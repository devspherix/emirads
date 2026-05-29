"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/ui/card";
import { accentMap, SITE, type ServiceAccent } from "@/content/site";
import type { ServicePricing } from "@/lib/pricing";
import { getPricingBySlug } from "@/lib/pricing";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

export type ServiceType = {
  title: string;
  description: string;
  image: string;
};

export type ServiceFeature = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

export type ServicePageTemplateProps = {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  accent: ServiceAccent;
  features: ServiceFeature[];
  types: ServiceType[];
  pricingSlug?: string; // optional - resolved client-side to ServicePricing
  whatsIncluded?: string[];
  closingTitle?: string;
  closingBody?: string;
};

export function ServicePageTemplate({
  name,
  tagline,
  description,
  heroImage,
  accent,
  features,
  types,
  pricingSlug,
  whatsIncluded,
  closingTitle = "Ready to get started?",
  closingBody = "Get a free quote in under 60 seconds — no obligation, no sales calls.",
}: ServicePageTemplateProps) {
  const a = accentMap[accent];
  const pricing: ServicePricing | undefined = pricingSlug
    ? getPricingBySlug(pricingSlug)
    : undefined;
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black pb-20 pt-12 text-white lg:pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <Image src={heroImage} alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <Container className="relative">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Services
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                style={{
                  borderColor: `${a.hex}66`,
                  backgroundColor: `${a.hex}1f`,
                  color: a.hex,
                }}
              >
                <Sparkles className="h-3 w-3" /> Emir Ads Service
              </span>
              <h1
                className="mb-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {name}
              </h1>
              <p className="max-w-xl text-lg font-medium text-white/80 sm:text-xl">
                {tagline}
              </p>
              <p className="mt-3 max-w-xl text-base text-white/65">{description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#quote" variant="primary" size="lg">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={SITE.whatsapp} variant="whatsapp" size="lg" external>
                  💬 WhatsApp Us
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-t border-gray-100 bg-white py-16 lg:py-20">
        <Container>
          <motion.div {...fadeUp} className="mb-10 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.4em]"
              style={{ color: a.hex }}
            >
              Why Choose Emir Ads
            </p>
            <h2
              className="text-3xl font-black text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built right, delivered on time.
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const accents: ServiceAccent[] = ["orange", "pink", "blue", "yellow"];
              const a = accentMap[accents[i % 4]];
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 card-shadow card-shadow-hover"
                  style={{ borderTopWidth: 4, borderTopColor: a.hex }}
                >
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: a.soft, color: a.hex }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    className="mb-2 text-base font-black text-black"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">{f.body}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* TYPES OF … */}
      <section className="bg-[#f9f9f9] py-16 lg:py-20">
        <Container>
          <motion.div {...fadeUp} className="mb-10 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.4em]"
              style={{ color: a.hex }}
            >
              Types of {name}
            </p>
            <h2
              className="text-3xl font-black text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pick the option that fits your project.
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((t, i) => {
              const accents: ServiceAccent[] = ["orange", "pink", "blue", "yellow"];
              return (
                <PortfolioCard
                  key={t.title}
                  title={t.title}
                  image={t.image}
                  description={t.description}
                  accent={accents[i % 4]}
                  delay={i * 0.05}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* PRICING TABLE */}
      {pricing && (
        <section className="bg-white py-16 lg:py-20">
          <Container>
            <motion.div {...fadeUp} className="mb-10 text-center">
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.4em]"
                style={{ color: a.hex }}
              >
                Standard Rates
              </p>
              <h2
                className="text-3xl font-black text-black sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Pricing
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                All prices in AED, exclude VAT.
                {pricing.remarks ? ` ${pricing.remarks}` : ""}
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-100 bg-white card-shadow"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr
                    className="text-left text-xs font-bold uppercase tracking-widest text-white"
                    style={{ backgroundColor: a.hex }}
                  >
                    <th className="px-5 py-4">Item</th>
                    <th className="px-5 py-4 text-right whitespace-nowrap">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.materials.map((m, i) => (
                    <tr
                      key={m.key}
                      className={`border-t border-gray-100 ${i % 2 === 1 ? "bg-[#fafafa]" : ""}`}
                    >
                      <td className="px-5 py-4">
                        <p className="font-bold text-black">{m.label}</p>
                        <p className="mt-0.5 text-xs text-gray-500">{m.description}</p>
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-right font-black" style={{ color: a.hex }}>
                        AED {m.ratePerUnit.toLocaleString()}{" "}
                        <span className="text-xs font-medium text-gray-500">
                          / {m.unit === "sqm" ? "sq m" : m.unit === "meter" ? "m" : "unit"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {whatsIncluded && whatsIncluded.length > 0 && (
              <motion.div {...fadeUp} className="mx-auto mt-8 max-w-4xl">
                <h3
                  className="mb-4 text-base font-black text-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  What&apos;s included
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {whatsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: a.hex }} />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </Container>
        </section>
      )}

      {/* QUOTE BUILDER (only if hasQuote) */}
      {pricing && (
        <section id="quote" className="bg-[#f9f9f9] py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <motion.div {...fadeUp} className="mb-10 text-center">
                <span
                  className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
                  style={{ backgroundColor: a.soft, color: a.hex }}
                >
                  Instant Pricing
                </span>
                <h2
                  className="text-3xl font-black text-black sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Get your price right now.
                </h2>
              </motion.div>
              <QuoteBuilderWrapper preselectId={pricing.id} />
            </div>
          </Container>
        </section>
      )}

      {/* CLOSING CTA */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#D50367] to-[#D50367] p-10 text-center text-white card-shadow sm:p-14"
          >
            <h2
              className="mb-4 text-3xl font-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {closingTitle}
            </h2>
            <p className="mb-8 text-white/90">{closingBody}</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={pricing ? "#quote" : "/contact"}
                variant="dark"
                size="lg"
                className="!bg-white !text-[#D50367] hover:!bg-black hover:!text-white"
              >
                {pricing ? "Get a Free Quote" : "Talk to our team"}
                <ArrowRight className="h-4 w-4" />
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

// Inline import to avoid loading QuoteBuilder when service has no pricing
import QuoteBuilder from "@/components/quote/QuoteBuilder";
function QuoteBuilderWrapper({ preselectId }: { preselectId: string }) {
  return <QuoteBuilder preselectedServiceId={preselectId} />;
}
