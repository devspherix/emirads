import { Metadata } from "next";
import Link from "next/link";
import QuoteBuilder from "@/components/quote/QuoteBuilder";
import { getPricingById } from "@/lib/pricing";
import { CheckCircle, ArrowRight, Shield, Sun, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Outdoor Signage | Emirads — Dubai Signage",
  description:
    "Shopfront fascias, pylon signs, halo-lit 3D letters and outdoor illuminated signage in Dubai.",
};

const service = getPricingById("outdoor-signage")!;

const features = [
  {
    icon: <Sun size={20} />,
    title: "Desert-rated",
    body: "All materials are UV-stabilised and heat-treated for the UAE climate.",
  },
  {
    icon: <Shield size={20} />,
    title: "Structural Engineering",
    body: "Every pylon and totem comes with stamped structural calculations.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Permit Handling",
    body: "We manage municipality and landlord NOC approvals on your behalf.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Full Illumination",
    body: "Frontlit, backlit, halo-lit and neon-effect — any look you need.",
  },
];

const cardAccents = ["border-t-[#038CE3]", "border-t-[#db016e]", "border-t-[#ffe724]", "border-t-black"];

export default function OutdoorSignagePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black px-4 pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white">← All Services</Link>
          <div className="mb-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-7xl">{service.emoji}</div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-[#038CE3]/40 bg-[#038CE3]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#038CE3]">Emirads Service</span>
              <h1 className="mb-3 text-4xl font-black leading-none text-white md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h1>
              <p className="max-w-xl text-xl font-medium text-white/60">{service.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Frontlit 3D Letters", "Halo-lit Letters", "Pylon Signs", "Hoardings", "Permit Handling"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-100 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-wider text-black" style={{ fontFamily: "var(--font-display)" }}>Why choose us</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.title} className={`rounded-2xl border border-gray-100 border-t-4 bg-white p-5 shadow-sm ${cardAccents[i % 4]}`}>
                <div className="mb-3 text-[#038CE3]">{f.icon}</div>
                <h3 className="mb-1 text-sm font-black text-black">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign types */}
      <section className="bg-[#f9f9f9] px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-wider text-black" style={{ fontFamily: "var(--font-display)" }}>Sign types we build</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { title: "Frontlit 3D Letters", desc: "Aluminium letter casings with internal LED strips. Visible day and night. Standard for shopfronts and mall fascias.", i: 0 },
              { title: "Halo / Backlit Letters", desc: "Reverse-mounted letters that cast a glowing halo behind them. Premium look for luxury brands.", i: 1 },
              { title: "Pylon & Totem Signs", desc: "Freestanding column signs for petrol stations, malls, compounds and corporate parks.", i: 2 },
              { title: "Hoarding & Billboard", desc: "Large-format PVC, aluminium composite or fabric signage for construction sites, hoardings and events.", i: 3 },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border border-t-4 border-gray-100 bg-white p-6 shadow-sm ${cardAccents[item.i % 4]}`}>
                <h3 className="mb-2 text-base font-black text-black">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-wider text-black" style={{ fontFamily: "var(--font-display)" }}>Our process</h2>
          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 hidden w-0.5 bg-gradient-to-b from-[#038CE3] to-[#db016e] md:block" />
            <div className="space-y-6">
              {[
                { n: "01", title: "Site Survey", body: "Our team visits to measure, assess structure and photograph the location." },
                { n: "02", title: "Design & Approval", body: "We produce technical drawings and 3D visuals for your sign-off." },
                { n: "03", title: "Permit Application", body: "We handle all municipality NOC paperwork and landlord approvals." },
                { n: "04", title: "Fabrication", body: "Signs are built in our Dubai workshop using premium materials." },
                { n: "05", title: "Installation", body: "Our certified installation team installs safely with minimal disruption." },
              ].map((step, i) => (
                <div key={step.n} className="flex items-start gap-6 pl-0 md:pl-14">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white text-sm font-black md:absolute md:left-0 ${cardAccents[i % 4].replace("border-t-", "border-")} text-black`}>
                    {step.n}
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-black text-black">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="px-4 py-20" id="quote">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full border border-[#038CE3]/20 bg-[#038CE3]/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#038CE3]">Instant Pricing</span>
            <h2 className="text-4xl font-black leading-none text-black md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Get Your Price Now</h2>
          </div>
          <QuoteBuilder preselectedServiceId="outdoor-signage" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">Large site? Let’s talk.</h2>
          <p className="mb-8 text-white/50">For multi-sign projects, compound branding and development hoardings — we provide competitive project rates.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://wa.me/971585806956" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105">💬 WhatsApp Us</a>
            <a href="tel:+971585806956" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white/50"><ArrowRight size={16} /> Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
