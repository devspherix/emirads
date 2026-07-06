import { CheckCircle2 } from "lucide-react";
import type { DescriptionBlock } from "@/content/services";
import type { ServiceAccent } from "@/content/site";
import { accentMap } from "@/content/site";

const BULLET_RE = /[●•]/;

/** Some paragraphs kept their manual "●"/"•" bullet characters instead of a
 * real Word list -- split those into a proper list at render time rather
 * than duplicating this in the extraction script. */
function splitBullets(text: string): string[] | null {
  if (!BULLET_RE.test(text)) return null;
  const parts = text
    .split(BULLET_RE)
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.length > 1 ? parts : null;
}

function BulletList({ items, accent }: { items: string[]; accent: ServiceAccent }) {
  const a = accentMap[accent];
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: a.hex }} />
          <span className="text-sm leading-relaxed text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DescriptionBlocks({
  blocks,
  accent,
}: {
  blocks: DescriptionBlock[];
  accent: ServiceAccent;
}) {
  const a = accentMap[accent];
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h3
              key={i}
              className="!mt-9 text-xl font-black text-black first:!mt-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          return <BulletList key={i} items={block.items} accent={accent} />;
        }

        if (block.type === "subitem") {
          const items = splitBullets(block.text);
          return (
            <div key={i} className="border-l-2 pl-4" style={{ borderColor: a.hex }}>
              <p className="mb-1 text-sm font-black text-black">{block.title}</p>
              {items ? (
                <BulletList items={items} accent={accent} />
              ) : (
                <p className="text-sm leading-relaxed text-gray-600">{block.text}</p>
              )}
            </div>
          );
        }

        // paragraph
        const items = splitBullets(block.text);
        if (items) return <BulletList key={i} items={items} accent={accent} />;
        return (
          <p key={i} className="text-[15px] leading-relaxed text-gray-700">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
