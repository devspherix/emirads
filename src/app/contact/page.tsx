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

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <Container className="relative space-y-16">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Brief us on your signage, vehicle branding or experiential build."
          description="Send drawings, brand books or even a mood board. We respond with a scoped estimate, material direction and delivery window."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassPanel className="space-y-6 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Project intake form
            </h2>
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-white/80">
                  Full name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Aisha Al Mansoori"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/80">
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Brand / Agency"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-white/80">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="shizaeim9720@outlook.com"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/80">
                  Phone / WhatsApp
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971 5x xxx xxxx"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Project summary
                <textarea
                  name="project"
                  rows={5}
                  placeholder="Tell us about site location, dimensions, deadlines and any authority notes."
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white focus:border-white/40 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5"
              >
                Share my brief
              </button>
              <p className="text-xs text-white/60">
                By submitting, you agree to receive project updates via email or
                phone. We respond within one business day.
              </p>
            </form>
          </GlassPanel>

          <GlassPanel className="space-y-8 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Visit us</h2>
            <p className="text-white/70">
              Workshop hours run 8 AM – 8 PM, while install teams operate
              overnight. Book a slot to tour fabrication labs or host a
              technical review.
            </p>
            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, ...method }) => (
                <Link
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/30"
                >
                  <div>
                    <Tag tone="neutral" className="text-[0.55rem] tracking-[0.4em]">
                      {method.label}
                    </Tag>
                    <p className="text-xl font-semibold text-white">
                      {method.value}
                    </p>
                  </div>
                  <Icon className="h-6 w-6 text-[var(--brand-cyan)]" />
                </Link>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-white/70">
              <p className="font-semibold text-white">Logistics & yard access</p>
              <p>
                Loading bay for 40ft trucks, on-site crane, lift tables, spray
                booth, CNC routers, 3D printers and glass bending furnace.
              </p>
            </div>
          </GlassPanel>
        </div>
      </Container>
    </main>
  );
}

