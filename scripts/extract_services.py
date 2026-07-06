#!/usr/bin/env python3
"""
Extract structured service data + embedded images from the client's Word-file
catalog ("word files/<Category>/[<Subcategory>/]<Service>.docx") into:
  - emirads/src/content/services-catalog.json
  - emirads/public/images/services/<category-slug>/<service-slug>/imgN.<ext>

Each docx follows a consistent template:
  Title (bold, line 1)
  "<Label>[:]" (bold) + bullet items (either same paragraph split by "●",
    or following paragraphs/bullets) -- repeated for N info groups
  "Categories[:]" + comma separated list
  "Description" (bold, alone)
  Sub-heading (bold, alone)
  Body paragraphs: plain text, section headings (bold, alone),
    "subitem" pairs (bold title + <w:br/> + plain body in the same paragraph),
    and Word bullet-list paragraphs (w:numPr).
"""
import json
import re
import shutil
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # /Users/applechoice/Documents/Hashim
WORD_FILES_DIR = ROOT / "word files"
EMIRADS_DIR = Path(__file__).resolve().parent.parent  # emirads/
PUBLIC_IMAGES_DIR = EMIRADS_DIR / "public" / "images" / "services"
OUTPUT_JSON = EMIRADS_DIR / "src" / "content" / "services-catalog.json"

W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"


def qn(tag):
    return f"{{{W_NS}}}{tag}"


# Some docs use "●" (manual bullet char) for same-line bullet lists, others
# type a literal "•" instead of relying on Word's real list numbering.
BULLET_RE = re.compile("[●•]")


def slugify(text):
    text = text.strip().lower()
    text = text.replace("&", "and")
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = re.sub(r"-+", "-", text).strip("-")
    return text


BRAND_REPLACEMENTS = [
    (re.compile(r"\bmechatron energy solutions llc\b", re.I), "Emir Ads"),
    (re.compile(r"\bemirads advertising llc\b", re.I), "Emir Ads"),
    (re.compile(r"\bmecha?tron\b", re.I), "Emir Ads"),
    (re.compile(r"\bemirads\b", re.I), "Emir Ads"),
]


def normalize_brand(text):
    for pattern, repl in BRAND_REPLACEMENTS:
        text = pattern.sub(repl, text)
    return text


def clean(text):
    text = text.replace(" ", " ")
    text = re.sub(r"[ \t]+", " ", text)
    return text.strip()


def iter_runs(p):
    """Yield <w:r> elements in document order, descending into wrapper
    elements (<w:hyperlink>, <w:smartTag>, ...) whose child runs would
    otherwise be silently skipped by a direct-children-only search. Category
    names in this catalog are frequently auto-hyperlinked."""
    for child in p:
        if child.tag == qn("r"):
            yield child
        elif child.tag in (qn("hyperlink"), qn("smartTag")):
            yield from iter_runs(child)


def parse_paragraph(p):
    """Return dict: {is_bullet, lines: [[{bold,text}, ...], ...]}"""
    ppr = p.find(qn("pPr"))
    is_bullet = ppr is not None and ppr.find(qn("numPr")) is not None

    lines = [[]]
    for r in iter_runs(p):
        rpr = r.find(qn("rPr"))
        bold = False
        if rpr is not None:
            b = rpr.find(qn("b"))
            if b is not None:
                val = b.get(qn("val"))
                bold = val not in ("false", "0")
            else:
                bold = False
        for child in r:
            if child.tag == qn("br"):
                lines.append([])
            elif child.tag == qn("tab"):
                lines[-1].append((bold, "\t"))
            elif child.tag == qn("t"):
                lines[-1].append((bold, child.text or ""))
    # collapse each line into merged (bold, text) segments
    merged_lines = []
    for line in lines:
        segs = []
        for bold, text in line:
            if segs and segs[-1][0] == bold:
                segs[-1] = (bold, segs[-1][1] + text)
            else:
                segs.append((bold, text))
        merged_lines.append(segs)
    return {"is_bullet": is_bullet, "lines": merged_lines}


def line_text(line):
    return clean("".join(t for _, t in line))


def line_is_bold(line):
    non_empty = [(b, t) for b, t in line if t.strip()]
    if not non_empty:
        return False
    return all(b for b, _ in non_empty)


def extract_docx(path: Path):
    with zipfile.ZipFile(path) as z:
        xml_bytes = z.read("word/document.xml")
        media = []
        for name in z.namelist():
            if name.startswith("word/media/"):
                media.append(name)
        media.sort()
        images = []
        for name in media:
            ext = Path(name).suffix
            data = z.read(name)
            images.append((ext, data))

    root = ET.fromstring(xml_bytes)
    body = root.find(qn("body"))
    paragraphs = []
    for p in body.findall(qn("p")):
        parsed = parse_paragraph(p)
        full_text = clean(" ".join(line_text(l) for l in parsed["lines"] if line_text(l)))
        if not full_text:
            continue
        paragraphs.append(parsed)

    if not paragraphs:
        raise ValueError(f"No text content found in {path}")

    title = normalize_brand(line_text(paragraphs[0]["lines"][0]))

    # find "Description" marker paragraph index (bold formatting on this
    # marker is inconsistent across the catalog, so match on text alone --
    # it's always its own standalone one-line paragraph)
    marker_idx = None
    for i, p in enumerate(paragraphs):
        if i == 0:
            continue
        full = clean(" ".join(line_text(l) for l in p["lines"] if line_text(l)))
        if full.rstrip(":").strip().lower() == "description":
            marker_idx = i
            break

    if marker_idx is not None:
        info_end = marker_idx
        desc_start = marker_idx + 1
    else:
        # Some docs have no explicit "Description" marker at all -- the
        # description body just starts right after the Categories line (no
        # marker paragraph to skip over, unlike the branch above). A couple
        # of docs use singular "Category" instead of "Categories".
        info_end = None
        for i, p in enumerate(paragraphs):
            if i == 0:
                continue
            full = clean(" ".join(line_text(l) for l in p["lines"] if line_text(l)))
            if re.match(r"(?i)^categor(y|ies)\b", full):
                remainder = re.sub(r"(?i)^categor(y|ies)", "", full).strip().lstrip(":,|").strip()
                info_end = i + 1 if remainder else i + 2
                break

        if info_end is None:
            # A couple of docs have no Categories line either, and glue the
            # word "Description" onto the end (or start) of a paragraph
            # instead of giving it its own line. Find that word and split
            # there, stripping it out so it doesn't leak into either section.
            for i, p in enumerate(paragraphs):
                if i == 0:
                    continue
                full = clean(" ".join(line_text(l) for l in p["lines"] if line_text(l)))
                if re.search(r"(?i)\bdescription\b", full):
                    starts_with_it = bool(re.match(r"(?i)^description\b", full))
                    for line in p["lines"]:
                        for j, (bold, text) in enumerate(line):
                            line[j] = (bold, re.sub(r"(?i)\bdescription\b", "", text))
                    info_end = i if starts_with_it else i + 1
                    break

        if info_end is None:
            # Last resort: no marker, no Categories line, no "Description" word found.
            info_end = len(paragraphs)
        desc_start = info_end

    info_paragraphs = paragraphs[1:info_end]
    desc_paragraphs = paragraphs[desc_start:]

    # ---- Parse info groups + categories ----
    # Some docs put a group's label and its bullets in one <w:p> (split only by
    # <w:br/>), others give each its own paragraph -- so paragraph boundaries
    # aren't meaningful here. Instead flatten every info paragraph into its
    # <w:br/>-split LINES (in document order) and classify each line. Bold
    # formatting is also inconsistent (some docs bold only the label, some
    # bold nothing, some bold everything including the bullets), so a line is
    # treated as a new group label if EITHER:
    #   - it starts with a bold segment (label may have inline bullet text
    #     trailing on the same line, e.g. "Features:" + "● a ● b"), or
    #   - the whole line is bold / ends with ":" / is the very first info line
    #     (covers separate-paragraph labels with no bold and no colon, e.g.
    #     "Available Fabrics")
    # ...unless the line contains a "●", which always means bullet content.
    info_lines = []  # (segs, is_bullet) -- is_bullet: real Word list paragraph
    for p in info_paragraphs:
        for line in p["lines"]:
            if line_text(line):
                info_lines.append((line, p["is_bullet"]))

    groups = []
    categories = []
    current_group = None
    awaiting_categories_value = False

    def flush_group():
        nonlocal current_group
        if current_group and current_group["items"]:
            groups.append(current_group)
        current_group = None

    def add_items(group, text):
        if not text:
            return
        if BULLET_RE.search(text):
            parts = [clean(x) for x in BULLET_RE.split(text) if clean(x)]
        else:
            parts = [text]
        group["items"].extend(normalize_brand(x) for x in parts)

    for idx, (segs, is_bullet) in enumerate(info_lines):
        line_full_text = clean("".join(t for _, t in segs))
        if not line_full_text:
            continue

        if awaiting_categories_value:
            categories = [clean(c) for c in line_full_text.split(",") if clean(c)]
            awaiting_categories_value = False
            continue

        if re.match(r"(?i)^categor(y|ies)\b", line_full_text):
            remainder = re.sub(r"(?i)^categor(y|ies)", "", line_full_text).strip()
            remainder = remainder.lstrip(":,|").strip()
            flush_group()
            if remainder:
                categories = [clean(c) for c in re.split(r"[,|]", remainder) if clean(c)]
            else:
                awaiting_categories_value = True
            continue

        # A real Word list paragraph (numPr) is always bullet content, never
        # a label -- regardless of bold or how "label-like" its text looks
        # (teardrop-flags' fabric names are short, bold, standalone lines
        # that would otherwise be mistaken for new group labels).
        if is_bullet:
            if current_group is None:
                current_group = {"label": "Details", "items": []}
            add_items(current_group, line_full_text)
            continue

        # A leading bold segment is a label ONLY if that segment itself isn't
        # a bullet line (some docs, e.g. Rollup Banners, bold the bullets too
        # -- those must fall through to the bullet-content check below).
        leading_bold = (
            bool(segs) and segs[0][0] and segs[0][1].strip() and not BULLET_RE.search(segs[0][1])
        )
        if leading_bold:
            label = clean(segs[0][1]).rstrip(":").strip()
            rest = clean("".join(t for _, t in segs[1:]))
            flush_group()
            current_group = {"label": normalize_brand(label), "items": []}
            add_items(current_group, rest)
            continue

        non_empty = [(b, t) for b, t in segs if t.strip()]
        line_all_bold = bool(non_empty) and all(b for b, _ in non_empty)
        if not BULLET_RE.search(line_full_text) and (line_all_bold or line_full_text.endswith(":") or idx == 0):
            flush_group()
            current_group = {"label": normalize_brand(line_full_text.rstrip(":").strip()), "items": []}
            continue

        # content line for the current group
        if current_group is None:
            current_group = {"label": "Details", "items": []}
        add_items(current_group, line_full_text)

    flush_group()

    # ---- Parse description blocks ----
    blocks = []
    subheading = None
    list_buffer = None

    def flush_list():
        nonlocal list_buffer
        if list_buffer and list_buffer["items"]:
            blocks.append(list_buffer)
        list_buffer = None

    for idx, p in enumerate(desc_paragraphs):
        if p["is_bullet"]:
            text = clean(" ".join(line_text(l) for l in p["lines"] if line_text(l)))
            if not text:
                continue
            if list_buffer is None:
                list_buffer = {"type": "list", "items": []}
            list_buffer["items"].append(normalize_brand(text))
            continue
        else:
            flush_list()

        lines = [l for l in p["lines"] if line_text(l)]
        if not lines:
            continue

        if subheading is None and len(lines) == 1 and line_is_bold(lines[0]):
            subheading = normalize_brand(line_text(lines[0]))
            continue

        if len(lines) == 1:
            text = normalize_brand(line_text(lines[0]))
            if line_is_bold(lines[0]):
                blocks.append({"type": "heading", "text": text})
            else:
                blocks.append({"type": "paragraph", "text": text})
        elif len(lines) >= 2 and line_is_bold(lines[0]):
            title_text = normalize_brand(line_text(lines[0]))
            body_text = normalize_brand(
                clean(" ".join(line_text(l) for l in lines[1:] if line_text(l)))
            )
            blocks.append({"type": "subitem", "title": title_text, "text": body_text})
        else:
            text = normalize_brand(
                clean(" ".join(line_text(l) for l in lines if line_text(l)))
            )
            blocks.append({"type": "paragraph", "text": text})

    flush_list()

    return {
        "title": title,
        "info": {"groups": groups, "categories": categories},
        "description": {"subheading": subheading, "blocks": blocks},
        "images": images,
    }


def main():
    if not WORD_FILES_DIR.exists():
        print(f"ERROR: {WORD_FILES_DIR} not found", file=sys.stderr)
        sys.exit(1)

    if PUBLIC_IMAGES_DIR.exists():
        shutil.rmtree(PUBLIC_IMAGES_DIR)
    PUBLIC_IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    categories = []
    services = []
    category_index = {}
    seen_service_slugs_by_cat = {}

    top_dirs = sorted([d for d in WORD_FILES_DIR.iterdir() if d.is_dir()])

    for cat_dir in top_dirs:
        cat_name = cat_dir.name.strip()
        cat_slug = slugify(cat_name)
        if cat_slug not in category_index:
            category_index[cat_slug] = {"slug": cat_slug, "name": cat_name, "subcategories": []}
            categories.append(category_index[cat_slug])
            seen_service_slugs_by_cat[cat_slug] = set()

        # does this category have subfolders?
        subdirs = sorted([d for d in cat_dir.iterdir() if d.is_dir()])
        if subdirs:
            doc_groups = [(d.name.strip(), sorted(d.glob("*.docx"))) for d in subdirs]
        else:
            doc_groups = [(None, sorted(cat_dir.glob("*.docx")))]

        for sub_name, docx_files in doc_groups:
            sub_slug = slugify(sub_name) if sub_name else None
            if sub_name and not any(
                s["slug"] == sub_slug for s in category_index[cat_slug]["subcategories"]
            ):
                category_index[cat_slug]["subcategories"].append(
                    {"slug": sub_slug, "name": sub_name}
                )

            for docx_path in docx_files:
                try:
                    data = extract_docx(docx_path)
                except Exception as e:
                    print(f"FAILED to parse {docx_path}: {e}", file=sys.stderr)
                    continue

                base_slug = slugify(docx_path.stem)
                slug = base_slug
                n = 2
                while slug in seen_service_slugs_by_cat[cat_slug]:
                    slug = f"{base_slug}-{n}"
                    n += 1
                seen_service_slugs_by_cat[cat_slug].add(slug)

                img_dir = PUBLIC_IMAGES_DIR / cat_slug / slug
                img_dir.mkdir(parents=True, exist_ok=True)
                image_paths = []
                for i, (ext, img_data) in enumerate(data["images"], start=1):
                    ext_clean = ext.lower() if ext else ".jpg"
                    fname = f"img{i}{ext_clean}"
                    (img_dir / fname).write_bytes(img_data)
                    image_paths.append(f"/images/services/{cat_slug}/{slug}/{fname}")

                services.append(
                    {
                        "slug": slug,
                        "title": data["title"],
                        "categorySlug": cat_slug,
                        "categoryName": cat_name,
                        "subcategorySlug": sub_slug,
                        "subcategoryName": sub_name,
                        "info": data["info"],
                        "description": data["description"],
                        "images": image_paths,
                        "sourceFile": str(docx_path.relative_to(WORD_FILES_DIR)),
                    }
                )

    output = {"categories": categories, "services": services}
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON.write_text(json.dumps(output, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"Parsed {len(services)} services across {len(categories)} categories.")
    total_images = sum(len(s["images"]) for s in services)
    print(f"Extracted {total_images} images.")
    no_image_services = [s["slug"] for s in services if not s["images"]]
    if no_image_services:
        print(f"WARNING: {len(no_image_services)} services have NO images: {no_image_services}")


if __name__ == "__main__":
    main()
