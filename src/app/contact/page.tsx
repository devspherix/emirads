import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { contactMethods } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact | Emirads Project Brief",
  description:
    "Share your signage, wrap, event or fabrication brief. Emirads replies with timelines and cost ranges within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-black py-24 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#ffe724]/30 bg-[#ffe724]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#ffe724]">
              Contact
            </span>
            <h1
              className="mb-4 text-5xl font-black leading-none text-white md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Brief us on your
              <span className="gradient-text-warm block">signage project.</span>
            </h1>
            <p className="text-lg text-white/60">
              Send drawings, brand books or a mood board. We respond with a scoped estimate,
              material direction and delivery window.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Form */}
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
              style={{ boxShadow: "0 4px 24px rgba(3,140,227,0.07)" }}
            >
              <h2
                className="mb-6 text-2xl font-black text-black"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Project intake form
              </h2>
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Full name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Aisha Al Mansoori"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 transition-colors focus:border-[#038CE3] focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Company</span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Brand / Agency"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 transition-colors focus:border-[#038CE3] focus:outline-none"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="info@emirads.ae"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 transition-colors focus:border-[#038CE3] focus:outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone / WhatsApp</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+971 5x xxx xxxx"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 transition-colors focus:border-[#038CE3] focus:outline-none"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Project summary</span>
                  <textarea
                    name="project"
                    rows={5}
                    placeholder="Tell us about site location, dimensions, deadlines and any authority notes."
                    className="resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 transition-colors focus:border-[#038CE3] focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-full bg-black px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="h-4 w-4" />
                    Share my brief
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#db016e] to-[#C00062] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to receive project updates via email or phone.
                  We respond within one business day.
                </p>
              </form>
            </div>

            {/* Visit Info */}
            <div className="space-y-6">
              <div
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
                style={{ boxShadow: "0 4px 24px rgba(255,231,36,0.08)" }}
              >
                <h2
                  className="mb-4 text-2xl font-black text-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Visit us
                </h2>
                <p className="mb-6 text-base text-gray-500">
                  Workshop hours run 8 AM – 8 PM, while install teams operate overnight.
                  Book a slot to tour fabrication labs or host a technical review.
                </p>
                <div className="space-y-3">
                  {contactMethods.map(({ icon: Icon, ...method }, i) => {
                    const cardStyles = [
                      { border: "border-l-4 border-l-[#db016e]", iconBg: "bg-[#db016e]/10", iconColor: "text-[#db016e]" },
                      { border: "border-l-4 border-l-[#038CE3]", iconBg: "bg-[#038CE3]/10", iconColor: "text-[#038CE3]" },
                      { border: "border-l-4 border-l-[#ffe724]", iconBg: "bg-[#ffe724]/20", iconColor: "text-[#7a6400]" },
                    ];
                    const style = cardStyles[i % 3];
                    return (
                      <Link
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : "_self"}
                        className={`flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md ${style.border}`}
                      >
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">
                            {method.label}
                          </p>
                          <p className="mt-0.5 font-black text-black">{method.value}</p>
                        </div>
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.iconBg}`}>
                          <Icon className={`h-4 w-4 ${style.iconColor}`} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-[#f9f9f9] p-6">
                <p className="font-black text-black">🏗️ Logistics &amp; yard access</p>
                <p className="mt-2 text-sm text-gray-500">
                  Loading bay for 40ft trucks, on-site crane, lift tables, spray booth,
                  CNC routers, 3D printers and glass bending furnace.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </main>
  );
}
