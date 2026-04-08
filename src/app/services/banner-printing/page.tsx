import { Metadata } from "next";
import Link from "next/link";
import QuoteBuilder from "@/components/quote/QuoteBuilder";
import { getPricingById } from "@/lib/pricing";
import { CheckCircle, ArrowRight, Clock, Layers, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Banner Printing | Emirads — Dubai Signage",
  description:
    "Large-format banner printing in Dubai. PVC flex, fabric, mesh and roller banners for indoor and outdoor use. Fast turnaround.",
};

const service = getPricingById("banner-printing")!;

const features = [
  {
    icon: <Clock size={20} />,
    title: "Same-day Rush",
    body: "Express printing available for urgent orders. Ask about our rush turnaround.",
  },
  {
    icon: <Layers size={20} />,
    title: "All Media Types",
    body: "PVC flex, fabric, mesh, vinyl — we print on the right material for your application.",
  },
  {
    icon: <Ruler size={20} />,
    title: "Any Size",
    body: "From roller banners to 50m² hoardings. No job too big or too small.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Finishing Options",
    body: "Eyelets, hemming, pole pockets and custom finishing for every installation type.",
  },
];

const cardAccents = ["border-t-[#038CE3]", "border-t-[#ffe724]", "border-t-[#db016e]", "border-t-black"];

export default function BannerPrintingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black px-4 pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white">
            ← All Services
          </Link>
          <div className="mb-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-7xl">{service.emoji}</div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-[#038CE3]/40 bg-[#038CE3]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#038CE3]">Emirads Service</span>
              <h1 className="mb-3 text-4xl font-black leading-none text-white md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h1>
              <p className="max-w-xl text-xl font-medium text-white/60">{service.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["PVC Flex", "Fabric / Dye-Sub", "Mesh Banners", "Roller Stands", "Same-day Rush"].map((tag) => (
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

      {/* Media guide */}
      <section className="bg-[#f9f9f9] px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-wider text-black" style={{ fontFamily: "var(--font-display)" }}>Choosing your material</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#038CE3]/20 bg-[#038CE3]/5">
                  <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-[#038CE3]">Material</th>
                  <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-[#038CE3]">Best For</th>
                  <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-[#038CE3]">Durability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { material: "PVC Flex (outdoor)", best: "Hoardings, facades, outdoor events", dur: "3–5 years" },
                  { material: "PVC Flex (indoor)", best: "Backlit retail, exhibitions, pop-ups", dur: "2–3 years" },
                  { material: "Dye-sub Fabric", best: "Exhibitions, tensioned frames, trade shows", dur: "5+ years" },
                  { material: "Mesh Banner", best: "Scaffolding, high-rise, wind exposure", dur: "2–4 years" },
                  { material: "Roller Banner", best: "Retail counters, events, receptions", dur: "Reusable" },
                ].map((row, i) => (
                  <tr key={row.material} className={`border-b border-gray-100 ${i % 2 === 0 ? "" : "bg-[#f9f9f9]"}`}>
                    <td className="px-4 py-3 font-bold text-black">{row.material}</td>
                    <td className="px-4 py-3 text-gray-500">{row.best}</td>
                    <td className="px-4 py-3 font-bold text-[#038CE3]">{row.dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <QuoteBuilder preselectedServiceId="banner-printing" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">Need a rush order or bulk print run?</h2>
          <p className="mb-8 text-white/50">Same-day printing available. Call or WhatsApp for urgent jobs.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://wa.me/971585806956" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105">
              💬 WhatsApp Us
            </a>
            <a href="tel:+971585806956" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white/50">
              <ArrowRight size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
