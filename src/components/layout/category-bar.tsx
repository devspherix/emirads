"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Car, Flag, Layers, LayoutPanelTop, Printer, Signpost } from "lucide-react";
import { Container } from "@/components/layout/container";
import { accentMap } from "@/content/site";
import { categories, getFullCategoryColumns, type CategoryIconKey } from "@/content/services";

const CATEGORY_ICONS: Record<CategoryIconKey, typeof Layers> = {
  car: Car,
  flag: Flag,
  layers: Layers,
  "layout-panel-top": LayoutPanelTop,
  printer: Printer,
  signpost: Signpost,
};

export function CategoryBar() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const close = () => setActiveSlug(null);
  const activeCategory = categories.find((c) => c.slug === activeSlug) ?? null;

  return (
    <div
      className="relative hidden border-b border-black/10 bg-black lg:block"
      onMouseLeave={close}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-center overflow-x-auto px-4 lg:px-8">
        <nav className="flex items-center gap-0.5 xl:gap-2">
          {categories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.iconKey];
            const a = accentMap[cat.accent];
            const isActive = activeSlug === cat.slug;
            return (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                onMouseEnter={() => setActiveSlug(cat.slug)}
                onClick={close}
                className="relative flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-3.5 text-[12px] font-bold uppercase tracking-wide text-white/75 transition-colors hover:text-white xl:px-4 xl:text-[13px]"
              >
                <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: isActive ? a.hex : undefined }} />
                {cat.name}
                {isActive && (
                  <motion.span
                    layoutId="category-bar-underline"
                    className="absolute inset-x-3 bottom-0 h-0.5 rounded-full"
                    style={{ backgroundColor: a.hex }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute left-0 right-0 top-full z-40 border-b border-gray-100 bg-white shadow-[0_32px_64px_rgba(0,0,0,0.18)]"
          >
            <Container className="py-8">
              <CategoryDropdownContent categorySlug={activeCategory.slug} onNavigate={close} />
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                <p className="text-sm text-gray-500">{activeCategory.description}</p>
                <Link
                  href={`/services/${activeCategory.slug}`}
                  onClick={close}
                  className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-all hover:gap-2.5"
                  style={{ color: accentMap[activeCategory.accent].hex }}
                >
                  View Full Category <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryDropdownContent({
  categorySlug,
  onNavigate,
}: {
  categorySlug: string;
  onNavigate: () => void;
}) {
  const groups = getFullCategoryColumns(categorySlug);
  const isFlat = groups.length === 1 && groups[0].heading === null;

  if (isFlat) {
    return (
      <ul className="columns-2 gap-x-10 sm:columns-3 lg:columns-4">
        {groups[0].links.map((link) => (
          <li key={link.href} className="break-inside-avoid pb-2.5">
            <Link
              href={link.href}
              onClick={onNavigate}
              className="text-sm text-gray-600 transition-colors hover:text-[#D50367]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((group) => (
        <div key={group.heading}>
          <h3
            className="mb-3 text-xs font-bold uppercase tracking-widest text-black"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {group.heading}
          </h3>
          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="text-sm leading-snug text-gray-600 transition-colors hover:text-[#D50367]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
