import type { Metadata } from "next";
import { Mail, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { faqs, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQs | Emir Ads — Dubai",
  description:
    "Answers to common questions about pricing, lead times, permits, materials and installation.",
};

const accents = ["#D50367", "#00BBFE", "#D50367", "#FFD705"];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-24 text-white">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-15" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D50367]/30 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#D50367]/40 bg-[#D50367]/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FCE3EE]">
              Knowledge base
            </span>
            <h1
              className="mb-4 text-5xl font-black leading-[1.05] text-white md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently asked{" "}
              <span className="gradient-text-orange">questions.</span>
            </h1>
            <p className="text-lg text-white/70">
              Can&apos;t find what you need? Email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-bold text-[#D50367] hover:underline"
              >
                {SITE.email}
              </a>{" "}
              and we&apos;ll get back to you the same day.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ items */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-100 bg-white card-shadow"
                style={{ borderLeftWidth: 4, borderLeftColor: accents[i % accents.length] }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
                      style={{
                        backgroundColor: accents[i % accents.length],
                        fontFamily: "var(--font-display)",
                        color: accents[i % accents.length] === "#FFD705" ? "#000" : "#fff",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h2
                        className="mb-3 text-lg font-black text-black"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {faq.question}
                      </h2>
                      <p className="text-base leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9f9] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="mb-4 text-3xl font-black text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Still have questions?
            </h2>
            <p className="mb-8 text-gray-500">
              Our team responds within one business day.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                href={`mailto:${SITE.email}`}
                external
                variant="dark"
                size="lg"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </Button>
              <Button
                href="/quote"
                variant="primary"
                size="lg"
              >
                <Zap className="h-4 w-4" />
                Get a Free Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
