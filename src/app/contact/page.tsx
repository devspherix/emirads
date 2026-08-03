import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { contactMethods, SITE } from "@/content/site";
import { Send, Sparkles } from "lucide-react";

const accents = ["orange", "blue", "pink"] as const;
const accentHex: Record<(typeof accents)[number], { hex: string; soft: string }> = {
  orange: { hex: "#D50367", soft: "#FCE3EE" },
  blue: { hex: "#00BBFE", soft: "rgba(0,187,254,0.10)" },
  pink: { hex: "#D50367", soft: "rgba(213,3,103,0.10)" },
};

export const metadata: Metadata = {
  title: "Contact Us | Emirads — Dubai",
  description:
    "Get in touch with Emirads. Share your signage, wrap or LED screen brief — we reply within 24 hours with timelines and pricing.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-24 text-white">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-15" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D50367]/30 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#D50367]/40 bg-[#D50367]/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FCE3EE]">
              Contact
            </span>
            <h1
              className="mb-4 text-5xl font-black leading-[1.05] text-white md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tell us about your{" "}
              <span className="gradient-text-orange">project</span>
            </h1>
            <p className="text-lg text-white/70">
              Share your brief — drawings, brand books, photos or just an idea. We&apos;ll
              reply with a scoped estimate and delivery window.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + info */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 card-shadow">
                <h2
                  className="mb-1 text-2xl font-black text-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Project brief
                </h2>
                <p className="mb-6 text-sm text-gray-500">
                  We typically respond within one business day.
                </p>
                <form className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" required placeholder="Aisha Al Mansoori" />
                    <Field label="Company" name="company" placeholder="Brand / Agency" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
                    <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="+971 5x xxx xxxx" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-gray-500">
                      Project details
                    </label>
                    <textarea
                      name="project"
                      rows={5}
                      placeholder="Tell us about site location, dimensions, deadlines and any authority notes."
                      className="w-full resize-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-300 focus:border-[#D50367]"
                    />
                  </div>
                  <Button variant="primary" size="lg" fullWidth>
                    <Send className="h-4 w-4" />
                    Send My Brief
                  </Button>
                  <p className="text-center text-xs text-gray-400">
                    By submitting, you agree to receive project updates by email or phone.
                  </p>
                </form>
              </div>
            </div>

            {/* Info side */}
            <div className="space-y-4 lg:col-span-2">
              {contactMethods.map(({ icon: Icon, ...method }, i) => {
                const a = accentHex[accents[i % 3]];
                const isExternal = method.href.startsWith("http") || method.href.startsWith("mailto:") || method.href.startsWith("tel:");
                return (
                  <Link
                    key={method.label}
                    href={method.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="block rounded-2xl border border-gray-100 bg-white p-6 card-shadow card-shadow-hover transition-all"
                    style={{ borderTopWidth: 4, borderTopColor: a.hex }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: a.soft, color: a.hex }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                          {method.label}
                        </p>
                        <p
                          className="mt-0.5 text-base font-black text-black"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}

              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-[#FCE3EE] to-white p-6 card-shadow">
                <div className="mb-2 flex items-center gap-2 text-[#D50367]">
                  <Sparkles className="h-4 w-4" />
                  <p className="text-xs font-bold uppercase tracking-widest">Fast track</p>
                </div>
                <p className="font-black text-black">Need a quick price?</p>
                <p className="mt-1 text-sm text-gray-600">
                  Use our instant quote builder for vehicle wraps, banners, LED screens
                  and indoor/outdoor signage.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button href="/quote" variant="primary" size="sm">
                    Get a Free Quote
                  </Button>
                  <Button href={SITE.whatsapp} external variant="whatsapp" size="sm">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray-300 focus:border-[#D50367]"
      />
    </label>
  );
}
