import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { contactMethods } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact | Emirads Project Brief",
  description:
    "Share your signage, wrap, event or fabrication brief. Emirads replies with timelines and cost ranges within 24 hours.",
};

const accentColors = [
  { border: "#FF3AF2", shadow: "#FFE600" },
  { border: "#00F5D4", shadow: "#7B2FFF" },
  { border: "#FFE600", shadow: "#FF6B35" },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#0D0D1A]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(255,58,242,0.2),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(0,245,212,0.2),_transparent_70%)] blur-3xl" />
      </div>
      <Container className="relative z-10 space-y-16">

        {/* Header */}
        <div
          className="relative overflow-hidden rounded-3xl border-4 border-[#FF3AF2] p-10 sm:p-14"
          style={{
            background: "linear-gradient(135deg, #2D1B4E, #1A0B35)",
            boxShadow: "12px 12px 0 #FFE600, 24px 24px 0 #FF3AF2",
          }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,58,242,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px", opacity: 0.2 }} />
          <div className="relative">
            <SectionHeading
              align="center"
              eyebrow="Contact"
              title="Brief us on your signage or event build."
              description="Send drawings, brand books or even a mood board. We respond with a scoped estimate, material direction and delivery window."
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <GlassPanel accent="cyan" className="space-y-6 p-7 sm:p-9">
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,230,0,0.04) 10px, rgba(255,230,0,0.04) 20px)" }} />
            <h2
              className="relative text-3xl font-black text-white"
              style={{ fontFamily: "var(--font-display)", textShadow: "2px 2px 0px #00F5D4, 4px 4px 0px #7B2FFF" }}
            >
              Project intake form
            </h2>
            <form className="relative space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-black uppercase tracking-widest text-white/80">
                  Full name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Aisha Al Mansoori"
                    className="rounded-2xl border-4 border-[#00F5D4] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FF3AF2] focus:outline-none transition-colors"
                    style={{ boxShadow: "3px 3px 0 #7B2FFF" }}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-black uppercase tracking-widest text-white/80">
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Brand / Agency"
                    className="rounded-2xl border-4 border-[#7B2FFF] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FF3AF2] focus:outline-none transition-colors"
                    style={{ boxShadow: "3px 3px 0 #00F5D4" }}
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-black uppercase tracking-widest text-white/80">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="info@emirads.ae"
                    className="rounded-2xl border-4 border-[#FF3AF2] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FFE600] focus:outline-none transition-colors"
                    style={{ boxShadow: "3px 3px 0 #FF3AF2" }}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-black uppercase tracking-widest text-white/80">
                  Phone / WhatsApp
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971 5x xxx xxxx"
                    className="rounded-2xl border-4 border-[#FFE600] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FF3AF2] focus:outline-none transition-colors"
                    style={{ boxShadow: "3px 3px 0 #FF6B35" }}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-black uppercase tracking-widest text-white/80">
                Project summary
                <textarea
                  name="project"
                  rows={5}
                  placeholder="Tell us about site location, dimensions, deadlines and any authority notes."
                  className="rounded-2xl border-4 border-[#FF6B35] bg-[#2D1B4E]/60 px-4 py-3 text-base font-medium text-white placeholder-white/40 focus:border-[#FF3AF2] focus:outline-none transition-colors resize-none"
                  style={{ boxShadow: "3px 3px 0 #FF3AF2" }}
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full border-4 border-[#FFE600] bg-gradient-to-r from-[#FF3AF2] via-[#7B2FFF] to-[#00F5D4] px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:scale-105 hover:brightness-110"
                style={{ boxShadow: "6px 6px 0 #FFE600, 12px 12px 0 #FF3AF2" }}
              >
                ⚡ Share my brief
              </button>
              <p className="text-xs font-medium text-white/60">
                By submitting, you agree to receive project updates via email or phone. We respond within one business day.
              </p>
            </form>
          </GlassPanel>

          {/* Visit Info */}
          <GlassPanel accent="yellow" className="space-y-8 p-7 sm:p-9">
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "conic-gradient(from 90deg at 1px 1px, transparent 90deg, rgba(0,245,212,0.06) 0)", backgroundSize: "40px 40px" }} />
            <h2
              className="relative text-3xl font-black text-white"
              style={{ fontFamily: "var(--font-display)", textShadow: "2px 2px 0px #FFE600, 4px 4px 0px #FF6B35" }}
            >
              Visit us
            </h2>
            <p className="relative text-base text-white/80">
              Workshop hours run 8 AM – 8 PM, while install teams operate overnight. Book a slot to tour fabrication labs or host a technical review.
            </p>
            <div className="relative space-y-4">
              {contactMethods.map(({ icon: Icon, ...method }, i) => {
                const acc = accentColors[i % accentColors.length];
                return (
                  <Link
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : "_self"}
                    className="flex items-center justify-between rounded-2xl border-4 p-5 transition-all hover:-translate-y-1"
                    style={{
                      borderColor: acc.border,
                      backgroundColor: `${acc.border}10`,
                      boxShadow: `6px 6px 0 ${acc.shadow}`,
                    }}
                  >
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.4em] text-white/60">{method.label}</p>
                      <p className="mt-1 text-xl font-black text-white">{method.value}</p>
                    </div>
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4"
                      style={{ borderColor: acc.border, backgroundColor: `${acc.border}20` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: acc.border }} />
                    </div>
                  </Link>
                );
              })}
            </div>
            <div
              className="relative rounded-2xl border-4 border-[#FF6B35] bg-[#FF6B35]/10 p-5 text-sm"
              style={{ boxShadow: "4px 4px 0 #FF3AF2" }}
            >
              <p className="font-black text-[#FF6B35]" style={{ fontFamily: "var(--font-display)" }}>🏗️ Logistics & yard access</p>
              <p className="mt-2 text-white/75">
                Loading bay for 40ft trucks, on-site crane, lift tables, spray booth, CNC routers, 3D printers and glass bending furnace.
              </p>
            </div>
          </GlassPanel>
        </div>
      </Container>
    </main>
  );
}
