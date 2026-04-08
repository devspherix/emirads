import { Metadata } from "next";
import Link from "next/link";
import QuoteBuilder from "@/components/quote/QuoteBuilder";
import { getPricingById } from "@/lib/pricing";
import { CheckCircle, ArrowRight, Wifi, Sun, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "LED Screens | Emirads — Dubai Signage",
  description:
    "Indoor and outdoor LED display panels and video walls in Dubai. P3, P4, P6 and P10 pixel pitch. Supply and installation.",
};

const service = getPricingById("led-screens")!;

const features = [
  {
    icon: <Sun size={20} />,
    title: "High Brightness",
    body: "5000+ nits outdoor displays visible in direct UAE sunlight.",
  },
  {
    icon: <Wifi size={20} />,
    title: "Remote Content Management",
    body: "Cloud-based CMS included. Update your display from your phone.",
  },
  {
    icon: <Monitor size={20} />,
    title: "Pixel-Perfect Resolution",
    body: "From P3 fine-pitch for boardrooms to P10 for large-format billboards.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Full Warranty",
    body: "2-year parts and labour warranty with on-site support SLA.",
  },
];

const accentColors = [
  { border: "border-[#FFE600]", shadow: "shadow-[4px_4px_0px_#FF6B35]", text: "text-[#FFE600]", bg: "bg-[#FFE600]/10" },
  { border: "border-[#FF6B35]", shadow: "shadow-[4px_4px_0px_#FF3AF2]", text: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
  { border: "border-[#00F5D4]", shadow: "shadow-[4px_4px_0px_#7B2FFF]", text: "text-[#00F5D4]", bg: "bg-[#00F5D4]/10" },
  { border: "border-[#FF3AF2]", shadow: "shadow-[4px_4px_0px_#FFE600]", text: "text-[#FF3AF2]", bg: "bg-[#FF3AF2]/10" },
];

export default function LedScreensPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-check opacity-10 pointer-events-none" />
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-[#FFE600]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
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
              <p className="text-xl text-white/60 font-medium max-w-xl">{service.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Indoor P3/P4", "Outdoor P6/P10", "Video Walls", "Retail Displays", "Cloud CMS"].map(
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

      {/* Pitch guide */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">Choosing your pixel pitch</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#FFE600]/30">
                  <th className="text-left py-3 px-4 text-[#FFE600] font-black uppercase tracking-wider">Pitch</th>
                  <th className="text-left py-3 px-4 text-[#FFE600] font-black uppercase tracking-wider">Best viewing distance</th>
                  <th className="text-left py-3 px-4 text-[#FFE600] font-black uppercase tracking-wider">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pitch: "P3 Indoor", dist: "1–5 m", use: "Boardrooms, reception lobbies, retail close-up" },
                  { pitch: "P4 Indoor", dist: "3–8 m", use: "Shopping malls, conference rooms, hotel lobbies" },
                  { pitch: "P6 Outdoor", dist: "5–15 m", use: "Outdoor retail, stadiums, building facades" },
                  { pitch: "P10 Outdoor", dist: "10–40 m", use: "Highways, large building billboards, arenas" },
                ].map((row, i) => (
                  <tr key={row.pitch} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                    <td className="py-3 px-4 text-white font-bold">{row.pitch}</td>
                    <td className="py-3 px-4 text-white/60">{row.dist}</td>
                    <td className="py-3 px-4 text-[#FFE600] font-bold">{row.use}</td>
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
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#FFE600] bg-[#FFE600]/10 border border-[#FFE600]/30 px-4 py-1 rounded-full mb-4">
              Instant Pricing
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-none"
              style={{ textShadow: "3px 3px 0px #FFE600, 6px 6px 0px #FF6B35" }}
            >
              Get Your Price Now
            </h2>
          </div>
          <QuoteBuilder preselectedServiceId="led-screens" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#FFE600]/10 to-[#FF6B35]/10 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">Want a site survey first?</h2>
          <p className="text-white/50 mb-8">Our engineers will visit and recommend the right solution for your space.</p>
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
