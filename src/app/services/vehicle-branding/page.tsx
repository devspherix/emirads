import { Metadata } from "next";
import Link from "next/link";
import QuoteBuilder from "@/components/quote/QuoteBuilder";
import { getPricingById } from "@/lib/pricing";
import {
  Car,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vehicle Branding | Emirads — Dubai Signage",
  description:
    "Professional vehicle wraps and fleet branding in Dubai. 3M-certified installers. Full, partial and plotter wraps for cars, vans, trucks and buses.",
};

const service = getPricingById("vehicle-branding")!;

const features = [
  {
    icon: <Shield size={20} />,
    title: "3M Certified",
    body: "Desert-grade films engineered to resist UV, heat and sand abrasion.",
  },
  {
    icon: <Zap size={20} />,
    title: "Fast Turnaround",
    body: "Standard car wraps completed in 1–2 days. Fleet jobs quoted with firm schedules.",
  },
  {
    icon: <Palette size={20} />,
    title: "In-house Design",
    body: "Our design team handles artwork at no extra charge for full wraps.",
  },
  {
    icon: <Car size={20} />,
    title: "All Vehicle Types",
    body: "Cars, SUVs, vans, trucks, buses, trailers and heavy machinery.",
  },
];

const included = [
  "Full vehicle surface preparation & cleaning",
  "3M / Avery premium cast or calendered vinyl",
  "Expert panel-by-panel installation",
  "Post-installation heat treatment",
  "Warranty certificate on wrap",
];

const accentColors = [
  { border: "border-[#FF3AF2]", shadow: "shadow-[4px_4px_0px_#FFE600]", text: "text-[#FF3AF2]", bg: "bg-[#FF3AF2]/10" },
  { border: "border-[#00F5D4]", shadow: "shadow-[4px_4px_0px_#7B2FFF]", text: "text-[#00F5D4]", bg: "bg-[#00F5D4]/10" },
  { border: "border-[#FFE600]", shadow: "shadow-[4px_4px_0px_#FF6B35]", text: "text-[#FFE600]", bg: "bg-[#FFE600]/10" },
  { border: "border-[#FF6B35]", shadow: "shadow-[4px_4px_0px_#FF3AF2]", text: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
];

export default function VehicleBrandingPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#FF3AF2]/10 rounded-full blur-3xl pointer-events-none" />

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

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3">
            {["3M Certified", "UAE-wide Installation", "In-house Design", "All Vehicle Types"].map(
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
                <div
                  key={f.title}
                  className={`rounded-2xl p-5 border-2 ${a.border} ${a.shadow} bg-white/5`}
                >
                  <div className={`${a.text} mb-3`}>{f.icon}</div>
                  <h3 className={`font-black text-sm mb-1 ${a.text}`}>{f.title}</h3>
                  <p className="text-white/50 text-sm">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
              What's included
            </h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#00F5D4] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#FF3AF2] p-6 bg-[#FF3AF2]/5 shadow-[6px_6px_0px_#FFE600]">
            <h3 className="text-[#FF3AF2] font-black text-lg mb-3 uppercase tracking-wider">
              Fleet Discounts
            </h3>
            <div className="space-y-2">
              {[
                { qty: "2–4 vehicles", discount: "5% off" },
                { qty: "5–9 vehicles", discount: "10% off" },
                { qty: "10+ vehicles", discount: "15% off" },
              ].map((row) => (
                <div key={row.qty} className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                  <span className="text-white/70 font-medium">{row.qty}</span>
                  <span className="text-[#FFE600] font-black">{row.discount}</span>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-3">
              Discounts applied at quote stage. Contact us for custom fleet pricing.
            </p>
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
              style={{ textShadow: "3px 3px 0px #7B2FFF, 6px 6px 0px #FF3AF2" }}
            >
              Get Your Price Now
            </h2>
          </div>
          <QuoteBuilder preselectedServiceId="vehicle-branding" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#FF3AF2]/10 to-[#7B2FFF]/10 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">
            Need a custom fleet solution?
          </h2>
          <p className="text-white/50 mb-8">
            Talk to our team directly for bulk orders, on-site surveys and custom timelines.
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
