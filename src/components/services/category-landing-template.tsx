"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Car, Flag, Layers, LayoutPanelTop, Printer, Signpost, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/ui/card";
import { accentMap, SITE } from "@/content/site";
import type { CategoryIconKey, CategoryMeta, Service } from "@/content/services";

const CATEGORY_ICONS: Record<CategoryIconKey, typeof Layers> = {
  car: Car,
  flag: Flag,
  layers: Layers,
  "layout-panel-top": LayoutPanelTop,
  printer: Printer,
  signpost: Signpost,
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

function ServiceGrid({
  services,
  categorySlug,
  accent,
}: {
  services: Service[];
  categorySlug: string;
  accent: CategoryMeta["accent"];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Link key={s.slug} href={`/services/${categorySlug}/${s.slug}`} className="block h-full">
          <PortfolioCard
            title={s.title}
            image={s.images[0]}
            accent={accent}
            delay={i * 0.04}
            description={s.description.subheading ?? undefined}
          />
        </Link>
      ))}
    </div>
  );
}

export function CategoryLandingTemplate({
  category,
  services,
}: {
  category: CategoryMeta;
  services: Service[];
}) {
  const a = accentMap[category.accent];
  const Icon = CATEGORY_ICONS[category.iconKey];
  const hasSubcategories = category.subcategories.length > 0;

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-15" />
        <div
          className="pointer-events-none absolute -right-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: `${a.hex}40` }}
        />
        <Container className="relative">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
          >
            All Services
          </Link>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
              style={{ borderColor: `${a.hex}66`, backgroundColor: `${a.hex}26`, color: a.hex }}
            >
              <Icon className="h-3.5 w-3.5" /> {services.length} Services
            </span>
            <h1
              className="mb-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {category.name}
            </h1>
            <p className="text-base text-white/70 sm:text-lg">{category.tagline}</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/55">{category.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/quote" variant="primary" size="lg">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={SITE.whatsapp} variant="whatsapp" size="lg" external>
                💬 WhatsApp Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="space-y-16">
          {hasSubcategories
            ? category.subcategories.map((sub, si) => {
                const subServices = services.filter((s) => s.subcategorySlug === sub.slug);
                if (subServices.length === 0) return null;
                return (
                  <motion.div
                    key={sub.slug}
                    id={sub.slug}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: si * 0.05 }}
                    className="scroll-mt-28"
                  >
                    <div className="mb-8 flex items-center gap-4">
                      <span className="h-px flex-1 bg-gray-200" />
                      <h2
                        className="rounded-full border-2 border-gray-200 bg-white px-5 py-2 text-base font-black text-black"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {sub.name}
                      </h2>
                      <span className="h-px flex-1 bg-gray-200" />
                    </div>
                    <ServiceGrid services={subServices} categorySlug={category.slug} accent={category.accent} />
                  </motion.div>
                );
              })
            : (
                <motion.div {...fadeUp}>
                  <ServiceGrid services={services} categorySlug={category.slug} accent={category.accent} />
                </motion.div>
              )}
        </Container>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#f9f9f9] py-16 lg:py-20">
        <Container>
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#D50367] to-[#D50367] p-10 text-center text-white card-shadow sm:p-14"
          >
            <h2 className="mb-4 text-3xl font-black sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Can&apos;t find exactly what you need?
            </h2>
            <p className="mb-8 text-white/90">
              Tell us what you&apos;re planning and we&apos;ll put together a custom {category.name.toLowerCase()} solution.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                variant="dark"
                size="lg"
                className="!bg-white !text-[#D50367] hover:!bg-black hover:!text-white"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={SITE.whatsapp} variant="whatsapp" size="lg" external>
                💬 WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
