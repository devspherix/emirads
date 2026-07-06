import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/card";
import { servicesCatalog, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Services | Emir Ads — Printing & Branding UAE",
  description:
    "Vehicle branding, banner printing, custom signage, backdrops & displays, exhibition stands and custom flags — over 120 services across the UAE.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-15" />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#D50367]/25 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D50367]/40 bg-[#D50367]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D50367]">
              <Sparkles className="h-3 w-3" /> Our Services
            </span>
            <h1
              className="mb-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Everything you need to{" "}
              <span className="gradient-text-orange">stand out</span>.
            </h1>
            <p className="text-base text-white/70 sm:text-lg">
              From vehicle wraps to exhibition stands and illuminated signage
              — six specialist categories, 120+ services, one trusted UAE team.
            </p>
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

      {/* SERVICES GRID */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesCatalog.map((s, i) => {
              const Icon = s.icon;
              return (
                <ServiceCard
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  title={s.name}
                  description={s.description}
                  image={s.heroImage}
                  icon={<Icon className="h-5 w-5" />}
                  accent={s.accent}
                  delay={i * 0.05}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* PRICING NOTE */}
      <section className="bg-[#f9f9f9] py-16">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#D50367]/20 bg-white p-8 text-center card-shadow">
            <h2
              className="mb-3 text-2xl font-black text-black sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Transparent pricing, no surprises.
            </h2>
            <p className="mb-6 text-gray-600">
              Every service is custom-quoted for your exact sizes, materials
              and finishes. Tell us what you need and we&apos;ll send a
              tailored quote within one business day.
            </p>
            <Button href="/quote" variant="primary" size="lg">
              Try the Instant Quote Tool <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
