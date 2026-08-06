"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { PortfolioCard } from "@/components/ui/card";
import { ImageSwiper } from "./image-swiper";
import { DescriptionBlocks } from "./description-blocks";
import { accentMap, SITE } from "@/content/site";
import { getRelatedServices, type CategoryMeta, type Service } from "@/content/services";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

export function ServiceDetailTemplate({
  service,
  category,
}: {
  service: Service;
  category: CategoryMeta;
}) {
  const a = accentMap[category.accent];
  const related = getRelatedServices(service, 3);
  const waMessage = encodeURIComponent(
    `Hi Emirads, I'd like a quote for ${service.title}.`,
  );

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB */}
      <section className="border-b border-gray-100 bg-[#fafafa] py-4">
        <Container>
          <nav className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-gray-500">
            <Link href="/services" className="transition-colors hover:text-[#D50367]">
              Services
            </Link>
            <span>/</span>
            <Link
              href={`/services/${category.slug}`}
              className="transition-colors hover:text-[#D50367]"
            >
              {category.name}
            </Link>
            {service.subcategoryName && (
              <>
                <span>/</span>
                <span>{service.subcategoryName}</span>
              </>
            )}
            <span>/</span>
            <span className="text-black">{service.title}</span>
          </nav>
        </Container>
      </section>

      {/* MAIN */}
      <section className="py-12 lg:py-16">
        <Container>
          <Link
            href={`/services/${category.slug}`}
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-[#D50367]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> {category.name}
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* LEFT: swiper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ImageSwiper images={service.images} title={service.title} />
            </motion.div>

            {/* RIGHT: info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider"
                style={{ borderColor: `${a.hex}66`, backgroundColor: a.soft, color: a.text }}
              >
                <Sparkles className="h-3 w-3" /> {category.name}
              </span>
              <h1
                className="mb-6 text-3xl font-black leading-tight text-black sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h1>

              <div className="space-y-6">
                {service.info.groups.map((g) => (
                  <div key={g.label}>
                    <p
                      className="mb-2.5 text-xs font-bold uppercase tracking-widest"
                      style={{ color: a.text }}
                    >
                      {g.label}
                    </p>
                    <ul className="space-y-2">
                      {g.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: a.text }} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {service.info.categories.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.info.categories.map((c) => (
                    <Tag key={c} tone="neutral">
                      {c}
                    </Tag>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/quote" variant="primary" size="lg">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={`${SITE.whatsapp}?text=${waMessage}`} variant="whatsapp" size="lg" external>
                  💬 Quote via WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* DESCRIPTION */}
      <section className="border-t border-gray-100 bg-[#f9f9f9] py-14 lg:py-20">
        <Container>
          <motion.div {...fadeUp} className="mx-auto max-w-3xl">
            {service.description.subheading && (
              <h2
                className="mb-6 text-2xl font-black text-black sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.description.subheading}
              </h2>
            )}
            <DescriptionBlocks blocks={service.description.blocks} accent={category.accent} />
          </motion.div>
        </Container>
      </section>

      {/* RELATED SERVICES */}
      {related.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <Container>
            <motion.div {...fadeUp} className="mb-8 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em]" style={{ color: a.text }}>
                Related
              </p>
              <h2
                className="text-2xl font-black text-black sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                More from {category.name}
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <Link key={s.slug} href={`/services/${s.categorySlug}/${s.slug}`} className="block h-full">
                  <PortfolioCard
                    title={s.title}
                    image={s.images[0]}
                    accent={category.accent}
                    delay={i * 0.05}
                    description={s.description.subheading ?? undefined}
                  />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CLOSING CTA */}
      <section className="bg-white pb-20 lg:pb-24">
        <Container>
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#D50367] to-[#D50367] p-10 text-center text-white card-shadow sm:p-14"
          >
            <h2 className="mb-4 text-3xl font-black sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Ready to get started?
            </h2>
            <p className="mb-8 text-white/90">
              Get a free quote for {service.title.toLowerCase()} in under 60 seconds — no obligation, no sales calls.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/quote"
                variant="dark"
                size="lg"
                className="!bg-white !text-[#D50367] hover:!bg-black hover:!text-white"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={`${SITE.whatsapp}?text=${waMessage}`} variant="whatsapp" size="lg" external>
                💬 WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
