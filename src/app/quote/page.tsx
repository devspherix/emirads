import type { Metadata } from "next";
import { Phone } from "lucide-react";
import QuoteBuilder from "@/components/quote/QuoteBuilder";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Get a Free Quote | Emirads — Dubai",
  description:
    "Use our instant price calculator to get an estimate for vehicle branding, banners, LED screens and indoor/outdoor signage. No obligation.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-black py-24 text-white">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-15" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D50367]/30 blur-3xl" />
        <Container className="relative text-center">
          <span className="mb-5 inline-block rounded-full border border-[#D50367]/40 bg-[#D50367]/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FCE3EE]">
            ⚡ Instant Pricing
          </span>
          <h1
            className="mb-4 text-5xl font-black leading-[1.05] text-white md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get Your Price{" "}
            <span className="gradient-text-orange">Right Now.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            No waiting. No sales calls. Select a service, enter your specs and
            get an instant estimate in under 60 seconds.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-10">
            {[
              { label: "Services", value: "8" },
              { label: "Quote time", value: "<60s" },
              { label: "Response Time", value: "24 hrs" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-4xl font-black text-[#D50367]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Builder */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <QuoteBuilder />
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-t border-gray-100 bg-[#f9f9f9] py-16">
        <Container>
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            In-house design, production and installation — Dubai-based, UAE-wide
          </p>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {[
              {
                title: "Estimate accuracy",
                body: "Our quotes are typically within 5–10% of the final invoice.",
                color: "border-t-[#D50367]",
              },
              {
                title: "No obligation",
                body: "Getting a quote commits you to nothing. Zero pressure.",
                color: "border-t-[#00BBFE]",
              },
              {
                title: "Human follow-up",
                body: "A real person reviews and confirms every quote.",
                color: "border-t-[#D50367]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border-t-4 border border-gray-100 bg-white p-6 card-shadow ${item.color}`}
              >
                <h3 className="mb-2 text-sm font-black uppercase tracking-wider text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Talk to human */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm text-gray-500">Prefer to talk to a human?</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href={SITE.whatsapp} external variant="whatsapp" size="lg">
                💬 WhatsApp {SITE.phone}
              </Button>
              <Button
                href={`tel:${SITE.phoneRaw}`}
                external
                variant="outline"
                size="lg"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
