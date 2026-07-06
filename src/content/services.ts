import type { ServiceAccent } from "@/content/site";
import raw from "./services-catalog.json";

// String keys only (not the LucideIcon components themselves) -- this data
// module is imported by both server and client components, and a component
// function reference can't cross the server->client RSC boundary. The
// actual icon components are resolved from CATEGORY_ICONS in
// category-landing-template.tsx, which is a client component.
export type CategoryIconKey = "car" | "flag" | "layers" | "layout-panel-top" | "printer" | "signpost";

export type InfoGroup = { label: string; items: string[] };

export type DescriptionBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subitem"; title: string; text: string }
  | { type: "list"; items: string[] };

export type Service = {
  slug: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  subcategorySlug: string | null;
  subcategoryName: string | null;
  info: { groups: InfoGroup[]; categories: string[] };
  description: { subheading: string | null; blocks: DescriptionBlock[] };
  images: string[];
  sourceFile: string;
};

export type RawSubcategory = { slug: string; name: string };
export type RawCategory = {
  slug: string;
  name: string;
  subcategories: RawSubcategory[];
};

const catalog = raw as { categories: RawCategory[]; services: Service[] };

function titleCase(s: string): string {
  return s
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

// ─────────────────────────────────────────────────────────────
//  Category presentation metadata (icon, accent, hero copy).
//  Everything else (services, groupings, slugs) is data-driven
//  straight from the client's word-file catalog.
// ─────────────────────────────────────────────────────────────
export type CategoryMeta = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconKey: CategoryIconKey;
  accent: ServiceAccent;
  subcategories: { slug: string; name: string }[];
};

const CATEGORY_PRESENTATION: Record<
  string,
  { name: string; tagline: string; description: string; iconKey: CategoryIconKey; accent: ServiceAccent }
> = {
  "vehicle-branding": {
    name: "Vehicle Branding",
    tagline: "Turn your fleet into a moving billboard",
    description:
      "Full wraps, partial wraps, vinyl lettering and specialist branding for cars, vans, trucks, boats and containers.",
    iconKey: "car",
    accent: "orange",
  },
  "banners-printing": {
    name: "Banner Printing",
    tagline: "High-impact banners for every space",
    description:
      "PVC flex, fabric, mesh, blockout and roll-up banners — printed sharp and ready when you need them.",
    iconKey: "printer",
    accent: "pink",
  },
  "custom-signage": {
    name: "Custom Signage",
    tagline: "3D letters, LED and illuminated signage that gets noticed",
    description:
      "Acrylic, stainless steel, backlit and frontlit 3D letters, LED screens, directory boards and wayfinding signage.",
    iconKey: "signpost",
    accent: "blue",
  },
  "backdrop-and-display": {
    name: "Backdrop & Display",
    tagline: "Indoor backdrops, outdoor displays and portable stands",
    description:
      "Fabric and MDF backdrops, pop-up displays, A-frames and exhibition counters for events of every size.",
    iconKey: "layout-panel-top",
    accent: "yellow",
  },
  "exhibition-and-stands": {
    name: "Exhibition & Stands",
    tagline: "Stands, booths and full event branding",
    description:
      "Custom exhibition stands, modular booths, wedding arches and complete event branding builds.",
    iconKey: "layers",
    accent: "orange",
  },
  "custom-flags": {
    name: "Custom Flags",
    tagline: "Flags that move with the wind and the crowd",
    description:
      "Teardrop, blade, hoisting, boat and body flags — vivid full-colour printing on durable outdoor fabric.",
    iconKey: "flag",
    accent: "pink",
  },
};

export const categories: CategoryMeta[] = catalog.categories.map((c) => {
  const preset = CATEGORY_PRESENTATION[c.slug];
  return {
    slug: c.slug,
    name: preset?.name ?? titleCase(c.name),
    tagline: preset?.tagline ?? "",
    description: preset?.description ?? "",
    iconKey: preset?.iconKey ?? "layers",
    accent: preset?.accent ?? "orange",
    subcategories: c.subcategories.map((s) => ({
      slug: s.slug,
      name: titleCase(s.name),
    })),
  };
});

export const services: Service[] = catalog.services;

export function getCategory(categorySlug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === categorySlug);
}

export function getServicesByCategory(categorySlug: string): Service[] {
  return services.filter((s) => s.categorySlug === categorySlug);
}

export function getServicesBySubcategory(
  categorySlug: string,
  subcategorySlug: string,
): Service[] {
  return services.filter(
    (s) => s.categorySlug === categorySlug && s.subcategorySlug === subcategorySlug,
  );
}

export function getService(categorySlug: string, serviceSlug: string): Service | undefined {
  return services.find((s) => s.categorySlug === categorySlug && s.slug === serviceSlug);
}

export function getAllServiceParams(): { category: string; service: string }[] {
  return services.map((s) => ({ category: s.categorySlug, service: s.slug }));
}

export function getAllCategoryParams(): { category: string }[] {
  return categories.map((c) => ({ category: c.slug }));
}

export function getRelatedServices(service: Service, limit = 3): Service[] {
  const sameGroup = services.filter(
    (s) =>
      s.slug !== service.slug &&
      s.categorySlug === service.categorySlug &&
      (service.subcategorySlug ? s.subcategorySlug === service.subcategorySlug : true),
  );
  if (sameGroup.length >= limit) return sameGroup.slice(0, limit);
  const rest = services.filter(
    (s) => s.slug !== service.slug && s.categorySlug === service.categorySlug && !sameGroup.includes(s),
  );
  return [...sameGroup, ...rest].slice(0, limit);
}
