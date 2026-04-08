import { Metadata } from "next";
import Link from "next/link";
import QuoteBuilder from "@/components/quote/QuoteBuilder";
import { Container } from "@/components/layout/container";
import { Zap, Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Get an Instant Price | Emirads — Dubai Signage",
  description:
    "Use our instant price calculator to get an estimate for vehicle branding, banners, LED screens, indoor and outdoor signage. No obligations.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="relative overflow-hidden bg-black py-28 text-white">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-10" />
        <Container className="relative text-center">
          <span className="mb-5 inline-block rounded-full border border-[#ffe724]/30 bg-[#ffe724]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#ffe724]">
            ⚡ Instant Pricing Tool
          </span>
          <h1
            className="mb-4 text-5xl font-black leading-none text-white md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get Your Price
            <span className="gradient-text-warm block">Right Now.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-xl text-white/60">
            No waiting. No sales calls. Select a service, enter your specs
            and get an instant estimate in under 60 seconds.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            {[
              { label: "Services", value: "5" },
              { label: "Quote time", value: "<60s" },
              { label: "Response SLA", value: "2 hrs" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-4xl font-black text-[#ffe724]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/40">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Builder */}
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
            Trusted by 500+ businesses across the UAE
          </p>
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {[
              {
                title: "Estimate accuracy",
                body: "Our quotes are typically within 5–10% of the final invoice.",
                color: "border-t-[#038CE3]",
              },
              {
                title: "No obligation",
                body: "Getting a quote commits you to nothing. Zero pressure.",
                color: "border-t-[#db016e]",
              },
              {
                title: "Human follow-up",
                body: "A real person from our team will review and confirm your quote.",
                color: "border-t-[#ffe724]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border-t-4 border border-gray-100 bg-white p-6 ${item.color}`}
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

      {/* Fallback CTA */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm text-gray-400">Prefer to talk to a human?</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/971585806956"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
              >
                💬 WhatsApp +971 58 580 6956
              </a>
              <a
                href="tel:+971585806956"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:border-black"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
