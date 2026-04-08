import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQs | Emirads Support",
  description:
    "Answers to the most common questions on lead times, permits, wraps, logistics and GCC deployments.",
};

const accentColors = [
  { border: "#FF3AF2", shadow: "#FFE600", text: "#FF3AF2" },
  { border: "#00F5D4", shadow: "#7B2FFF", text: "#00F5D4" },
  { border: "#FFE600", shadow: "#FF6B35", text: "#FFE600" },
  { border: "#FF6B35", shadow: "#FF3AF2", text: "#FF6B35" },
  { border: "#7B2FFF", shadow: "#00F5D4", text: "#7B2FFF" },
];

export default function FaqPage() {
  return (
    <main className="relative overflow-hidden bg-[#0D0D1A]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(255,230,0,0.2),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(123,47,255,0.25),_transparent_70%)] blur-3xl" />
      </div>
      <Container className="relative z-10 space-y-12">

        {/* Header */}
        <div
          className="relative overflow-hidden rounded-3xl border-4 border-[#FFE600] p-10 sm:p-14"
          style={{
            background: "linear-gradient(135deg, #2D1B4E, #1A0B35)",
            boxShadow: "12px 12px 0 #FF6B35, 24px 24px 0 #FFE600",
          }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,230,0,0.06) 10px, rgba(255,230,0,0.06) 20px)" }} />
          <div className="relative">
            <SectionHeading
              align="center"
              eyebrow="Knowledge base"
              title="Frequently asked questions"
              description="If you do not find what you need, email info@emirads.ae and the team will respond within the same business day."
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const accent = accentColors[index % accentColors.length];
            return (
              <div
                key={faq.question}
                className="relative overflow-hidden rounded-3xl border-4 p-7"
                style={{
                  borderColor: accent.border,
                  background: `linear-gradient(135deg, ${accent.border}10, #2D1B4E70)`,
                  boxShadow: `6px 6px 0 ${accent.shadow}`,
                }}
              >
                <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "conic-gradient(from 90deg at 1px 1px, transparent 90deg, rgba(0,245,212,0.04) 0)", backgroundSize: "40px 40px" }} />
                <div className="relative flex gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 text-lg font-black"
                    style={{
                      borderColor: accent.border,
                      backgroundColor: `${accent.border}25`,
                      color: accent.border,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-xl font-black text-white"
                      style={{ fontFamily: "var(--font-display)", textShadow: `1px 1px 0px ${accent.border}` }}
                    >
                      {faq.question}
                    </p>
                    <p className="mt-3 text-base text-white/80">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
