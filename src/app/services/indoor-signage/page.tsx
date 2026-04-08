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

const accentColors = [
  { border: "border-[#FF6B35]", shadow: "shadow-[4px_4px_0px_#FF3AF2]", text: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
  { border: "border-[#FF3AF2]", shadow: "shadow-[4px_4px_0px_#FFE600]", text: "text-[#FF3AF2]", bg: "bg-[#FF3AF2]/10" },
  { border: "border-[#7B2FFF]", shadow: "shadow-[4px_4px_0px_#00F5D4]", text: "text-[#7B2FFF]", bg: "bg-[#7B2FFF]/10" },
  { border: "border-[#00F5D4]", shadow: "shadow-[4px_4px_0px_#7B2FFF]", text: "text-[#00F5D4]", bg: "bg-[#00F5D4]/10" },
];

export default function IndoorSignagePage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
            ← All Services
          </Link>

          <div className="flex items-start gap-6 flex-col md:flex-row md:items-center mb-8">
            <div className="text-7xl p-5 rounded-2xl border-4 flex-shrink-0"
              style={{ borderColor: service.accentColor, background: `${service.accentColor}15` }}>
              {service.emoji}
            </div>
            <div>
              <div className="inline-block text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border-2 mb-3"
                style={{ borderColor: service.accentColor, color: service.accentColor }}>
                Emirads Service
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-none mb-3"
                style={{ textShadow: `3px 3px 0px ${service.accentColor}, 6px 6px 0px ${service.shadowColor}` }}>
                {service.name}
              </h1>
              <p className="text-xl text-white/60 font-medium max-w-xl">{service.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["3D Acrylic Letters", "Reception Logos", "Wall Graphics", "LED Lightboxes", "Wayfinding"].map(
              (tag, i) => (
                <span key={tag} className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border-2 ${accentColors[i % 4].border} ${accentColors[i % 4].text}`}>
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
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">Why choose us</h2>
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

      {/* Popular applications */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">Popular applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🏢", label: "Corporate offices" },
              { emoji: "🏨", label: "Hotels & hospitality" },
              { emoji: "🏪", label: "Retail & F&B" },
              { emoji: "🏥", label: "Healthcare" },
              { emoji: "🎓", label: "Education" },
              { emoji: "💼", label: "Banks & finance" },
              { emoji: "🏛️", label: "Government" },
              { emoji: "🎪", label: "Exhibitions" },
            ].map((item, i) => {
              const a = accentColors[i % 4];
              return (
                <div key={item.label} className={`rounded-xl p-4 border ${a.border} bg-white/[0.03] text-center`}>
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${a.text}`}>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="py-20 px-4" id="quote">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#FF6B35] bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-4 py-1 rounded-full mb-4">
              Instant Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-none"
              style={{ textShadow: "3px 3px 0px #FF6B35, 6px 6px 0px #FF3AF2" }}>
              Get Your Price Now
            </h2>
          </div>
          <QuoteBuilder preselectedServiceId="indoor-signage" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF3AF2]/10 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">Have a full fit-out project?</h2>
          <p className="text-white/50 mb-8">We manage large-scale interior signage programs from design to installation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/971552682030" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_#128C7E] hover:shadow-[2px_2px_0px_#128C7E] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              💬 WhatsApp Us
            </a>
            <a href="tel:+971552682030"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:border-white/50 transition-colors">
              <ArrowRight size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
