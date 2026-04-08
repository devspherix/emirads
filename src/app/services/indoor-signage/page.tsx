import { Metadata } from "next";
import Link from "next/link";
import QuoteBuilder from "@/components/quote/QuoteBuilder";
import { getPricingById } from "@/lib/pricing";
import { CheckCircle, ArrowRight, Building, Map, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Indoor Signage | Emirads — Dubai Signage",
  description:
    "Reception logos, 3D acrylic letters, wayfinding systems and illuminated indoor signage in Dubai.",
};

const service = getPricingById("indoor-signage")!;

const features = [
  {
    icon: <Building size={20} />,
    title: "Brand Environments",
    body: "Transform your reception into a powerful brand statement with 3D logos and graphics.",
  },
  {
    icon: <Map size={20} />,
    title: "Wayfinding Systems",
    body: "Complete directional signage programs — from planning to installation.",
  },
  {
    icon: <Layers size={20} />,
    title: "All Finishes",
    body: "Brushed gold, chrome, painted RAL, backlit, halo-lit — any spec.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Turnkey Install",
    body: "Our team handles drilling, wiring and final sign-off. Zero hassle.",
  },
];

const cardAccents = ["border-t-[#db016e]", "border-t-[#038CE3]", "border-t-[#ffe724]", "border-t-black"];

export default function IndoorSignagePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black px-4 pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white">← All Services</Link>
          <div className="mb-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-7xl">{service.emoji}</div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-[#db016e]/40 bg-[#db016e]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#db016e]">Emirads Service</span>
              <h1 className="mb-3 text-4xl font-black leading-none text-white md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h1>
              <p className="max-w-xl text-xl font-medium text-white/60">{service.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["3D Acrylic Letters", "Reception Logos", "Wall Graphics", "LED Lightboxes", "Wayfinding"].map((tag) => (
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
                <div className="mb-3 text-[#db016e]">{f.icon}</div>
                <h3 className="mb-1 text-sm font-black text-black">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular applications */}
      <section className="bg-[#f9f9f9] px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-wider text-black" style={{ fontFamily: "var(--font-display)" }}>Popular applications</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { emoji: "🏢", label: "Corporate offices" },
              { emoji: "🏨", label: "Hotels & hospitality" },
              { emoji: "🏪", label: "Retail & F&B" },
              { emoji: "🏥", label: "Healthcare" },
              { emoji: "🎓", label: "Education" },
              { emoji: "💼", label: "Banks & finance" },
              { emoji: "🏛️", label: "Government" },
              { emoji: "🎪", label: "Exhibitions" },
            ].map((item, i) => (
              <div key={item.label} className={`rounded-xl border border-t-4 border-gray-100 bg-white p-4 text-center shadow-sm ${cardAccents[i % 4]}`}>
                <div className="mb-2 text-3xl">{item.emoji}</div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="px-4 py-20" id="quote">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full border border-[#db016e]/20 bg-[#db016e]/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#db016e]">Instant Pricing</span>
            <h2 className="text-4xl font-black leading-none text-black md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Get Your Price Now</h2>
          </div>
          <QuoteBuilder preselectedServiceId="indoor-signage" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">Have a full fit-out project?</h2>
          <p className="mb-8 text-white/50">We manage large-scale interior signage programs from design to installation.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://wa.me/971585806956" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105">💬 WhatsApp Us</a>
            <a href="tel:+971585806956" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white/50"><ArrowRight size={16} /> Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
