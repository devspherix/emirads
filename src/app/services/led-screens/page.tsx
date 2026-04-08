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

const cardAccents = ["border-t-[#ffe724]", "border-t-[#db016e]", "border-t-[#038CE3]", "border-t-black"];

export default function LedScreensPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black px-4 pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white">← All Services</Link>
          <div className="mb-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-7xl">{service.emoji}</div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-[#ffe724]/40 bg-[#ffe724]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#ffe724]">Emirads Service</span>
              <h1 className="mb-3 text-4xl font-black leading-none text-white md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h1>
              <p className="max-w-xl text-xl font-medium text-white/60">{service.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Indoor P3/P4", "Outdoor P6/P10", "Video Walls", "Retail Displays", "Cloud CMS"].map((tag) => (
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
                <div className="mb-3 text-[#ffe724]">{f.icon}</div>
                <h3 className="mb-1 text-sm font-black text-black">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch guide */}
      <section className="bg-[#f9f9f9] px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-wider text-black" style={{ fontFamily: "var(--font-display)" }}>Choosing your pixel pitch</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#ffe724]/30 bg-[#ffe724]/10">
                  <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-black">Pitch</th>
                  <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-black">Best viewing distance</th>
                  <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-black">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pitch: "P3 Indoor", dist: "1–5 m", use: "Boardrooms, reception lobbies, retail close-up" },
                  { pitch: "P4 Indoor", dist: "3–8 m", use: "Shopping malls, conference rooms, hotel lobbies" },
                  { pitch: "P6 Outdoor", dist: "5–15 m", use: "Outdoor retail, stadiums, building facades" },
                  { pitch: "P10 Outdoor", dist: "10–40 m", use: "Highways, large building billboards, arenas" },
                ].map((row, i) => (
                  <tr key={row.pitch} className={`border-b border-gray-100 ${i % 2 === 0 ? "" : "bg-[#f9f9f9]"}`}>
                    <td className="px-4 py-3 font-bold text-black">{row.pitch}</td>
                    <td className="px-4 py-3 text-gray-500">{row.dist}</td>
                    <td className="px-4 py-3 font-bold text-[#038CE3]">{row.use}</td>
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
            <span className="mb-4 inline-block rounded-full border border-[#ffe724]/30 bg-[#ffe724]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">Instant Pricing</span>
            <h2 className="text-4xl font-black leading-none text-black md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Get Your Price Now</h2>
          </div>
          <QuoteBuilder preselectedServiceId="led-screens" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">Want a site survey first?</h2>
          <p className="mb-8 text-white/50">Our engineers will visit and recommend the right solution for your space.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://wa.me/971585806956" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105">💬 WhatsApp Us</a>
            <a href="tel:+971585806956" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white/50"><ArrowRight size={16} /> Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
