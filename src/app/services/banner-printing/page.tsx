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

const accentColors = [
  { border: "border-[#00F5D4]", shadow: "shadow-[4px_4px_0px_#7B2FFF]", text: "text-[#00F5D4]", bg: "bg-[#00F5D4]/10" },
  { border: "border-[#FFE600]", shadow: "shadow-[4px_4px_0px_#FF6B35]", text: "text-[#FFE600]", bg: "bg-[#FFE600]/10" },
  { border: "border-[#FF3AF2]", shadow: "shadow-[4px_4px_0px_#FFE600]", text: "text-[#FF3AF2]", bg: "bg-[#FF3AF2]/10" },
  { border: "border-[#7B2FFF]", shadow: "shadow-[4px_4px_0px_#00F5D4]", text: "text-[#7B2FFF]", bg: "bg-[#7B2FFF]/10" },
];

export default function BannerPrintingPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-diagonal opacity-10 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#00F5D4]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors"
          >
            ← All Services
          </Link>

          <div className="flex items-start gap-6 flex-col md:flex-row md:items-center mb-8">
            <div
              className="text-7xl p-5 rounded-2xl border-4 flex-shrink-0"
              style={{ borderColor: service.accentColor, background: `${service.accentColor}15` }}
            >
              {service.emoji}
            </div>
            <div>
              <div
                className="inline-block text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border-2 mb-3"
                style={{ borderColor: service.accentColor, color: service.accentColor }}
              >
                Emirads Service
              </div>
              <h1
                className="text-4xl md:text-6xl font-black text-white leading-none mb-3"
                style={{ textShadow: `3px 3px 0px ${service.accentColor}, 6px 6px 0px ${service.shadowColor}` }}
              >
                {service.name}
              </h1>
              <p className="text-xl text-white/60 font-medium max-w-xl">
                {service.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["PVC Flex", "Fabric / Dye-Sub", "Mesh Banners", "Roller Stands", "Same-day Rush"].map(
              (tag, i) => (
                <span
                  key={tag}
                  className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border-2 ${accentColors[i % 4].border} ${accentColors[i % 4].text}`}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">
            Why choose us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => {
              const a = accentColors[i % 4];
              return (
                <div key={f.title} className={`rounded-2xl p-5 border-2 ${a.border} ${a.shadow} bg-white/5`}>
                  <div className={`${a.text} mb-3`}>{f.icon}</div>
                  <h3 className={`font-black text-sm mb-1 ${a.text}`}>{f.title}</h3>
                  <p className="text-white/50 text-sm">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media guide */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">
            Choosing your material
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#00F5D4]/30">
                  <th className="text-left py-3 px-4 text-[#00F5D4] font-black uppercase tracking-wider">Material</th>
                  <th className="text-left py-3 px-4 text-[#00F5D4] font-black uppercase tracking-wider">Best For</th>
                  <th className="text-left py-3 px-4 text-[#00F5D4] font-black uppercase tracking-wider">Durability</th>
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
                  <tr key={row.material} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                    <td className="py-3 px-4 text-white font-bold">{row.material}</td>
                    <td className="py-3 px-4 text-white/60">{row.best}</td>
                    <td className="py-3 px-4 text-[#FFE600] font-bold">{row.dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="py-20 px-4" id="quote">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/30 px-4 py-1 rounded-full mb-4">
              Instant Pricing
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-none"
              style={{ textShadow: "3px 3px 0px #00F5D4, 6px 6px 0px #7B2FFF" }}
            >
              Get Your Price Now
            </h2>
          </div>
          <QuoteBuilder preselectedServiceId="banner-printing" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#00F5D4]/10 to-[#7B2FFF]/10 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">
            Need a rush order or bulk print run?
          </h2>
          <p className="text-white/50 mb-8">
            Same-day printing available. Call or WhatsApp for urgent jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/971552682030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_#128C7E] hover:shadow-[2px_2px_0px_#128C7E] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="tel:+971552682030"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:border-white/50 transition-colors"
            >
              <ArrowRight size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
