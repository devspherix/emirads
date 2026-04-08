import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { faqs } from "@/content/site";
import { ChevronDown, Mail, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs | Emirads Support",
  description:
    "Answers to the most common questions on lead times, permits, wraps, logistics and GCC deployments.",
};

const faqAccents = [
  "border-l-4 border-l-[#db016e]",
  "border-l-4 border-l-[#038CE3]",
  "border-l-4 border-l-[#ffe724]",
  "border-l-4 border-l-black",
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-24 text-white">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-10" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#ffe724]/30 bg-[#ffe724]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#ffe724]">
              Knowledge base
            </span>
            <h1
              className="mb-4 text-5xl font-black leading-none text-white md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently asked
              <span className="gradient-text-warm block">questions.</span>
            </h1>
            <p className="text-lg text-white/60">
              Can&apos;t find what you need? Email{" "}
              <a href="mailto:info@emirads.ae" className="font-bold text-[#ffe724] hover:underline">
                info@emirads.ae
              </a>{" "}
              and we&apos;ll respond same business day.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Items */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`rounded-2xl border border-gray-100 bg-white shadow-sm ${faqAccents[index % 4]}`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-sm font-black text-gray-500"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h2
                        className="mb-3 text-lg font-black text-black"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {faq.question}
                      </h2>
                      <p className="text-base leading-relaxed text-gray-500">{faq.answer}</p>
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
              <a
                href="mailto:info@emirads.ae"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:border-black"
              >
                <Zap className="h-4 w-4" />
                Get a Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
