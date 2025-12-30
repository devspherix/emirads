import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQs | Emirads Support",
  description:
    "Answers to the most common questions on lead times, permits, wraps, logistics and GCC deployments.",
};

export default function FaqPage() {
  return (
    <main className="relative overflow-hidden">
      <Container className="relative space-y-12">
        <SectionHeading
          align="center"
          eyebrow="Knowledge base"
          title="Frequently asked questions"
          description="If you do not find what you need, email info@emirads.ae and the team will respond within the same business day."
        />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <GlassPanel key={faq.question} className="space-y-3 p-6">
              <p className="text-xl font-semibold text-white">{faq.question}</p>
              <p className="text-white/70">{faq.answer}</p>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </main>
  );
}

