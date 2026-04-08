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

const accentColors = [
  { border: "border-[#7B2FFF]", shadow: "shadow-[4px_4px_0px_#00F5D4]", text: "text-[#7B2FFF]", bg: "bg-[#7B2FFF]/10" },
  { border: "border-[#00F5D4]", shadow: "shadow-[4px_4px_0px_#7B2FFF]", text: "text-[#00F5D4]", bg: "bg-[#00F5D4]/10" },
  { border: "border-[#FF3AF2]", shadow: "shadow-[4px_4px_0px_#FFE600]", text: "text-[#FF3AF2]", bg: "bg-[#FF3AF2]/10" },
  { border: "border-[#FFE600]", shadow: "shadow-[4px_4px_0px_#FF6B35]", text: "text-[#FFE600]", bg: "bg-[#FFE600]/10" },
];

export default function OutdoorSignagePage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-diagonal opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#7B2FFF]/15 rounded-full blur-3xl pointer-events-none" />

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
            {["Frontlit 3D Letters", "Halo-lit Letters", "Pylon Signs", "Hoardings", "Permit Handling"].map(
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

      {/* Sign types */}
      <section className="py-16 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">Sign types we build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Frontlit 3D Letters",
                desc: "Aluminium letter casings with internal LED strips. Visible day and night. Standard for shopfronts and mall fascias.",
                accent: accentColors[0],
              },
              {
                title: "Halo / Backlit Letters",
                desc: "Reverse-mounted letters that cast a glowing halo behind them. Premium look for luxury brands.",
                accent: accentColors[1],
              },
              {
                title: "Pylon & Totem Signs",
                desc: "Freestanding column signs for petrol stations, malls, compounds and corporate parks.",
                accent: accentColors[2],
              },
              {
                title: "Hoarding & Billboard",
                desc: "Large-format PVC, aluminium composite or fabric signage for construction sites, hoardings and events.",
                accent: accentColors[3],
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl p-6 border-2 ${item.accent.border} ${item.accent.shadow} bg-white/5`}>
                <h3 className={`font-black text-base mb-2 ${item.accent.text}`}>{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">Our process</h2>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B2FFF] to-[#00F5D4] hidden md:block" />
            <div className="space-y-6">
              {[
                { n: "01", title: "Site Survey", body: "Our team visits to measure, assess structure and photograph the location." },
                { n: "02", title: "Design & Approval", body: "We produce technical drawings and 3D visuals for your sign-off." },
                { n: "03", title: "Permit Application", body: "We handle all municipality NOC paperwork and landlord approvals." },
                { n: "04", title: "Fabrication", body: "Signs are built in our Dubai workshop using premium materials." },
                { n: "05", title: "Installation", body: "Our certified installation team installs safely with minimal disruption." },
              ].map((step, i) => {
                const a = accentColors[i % 4];
                return (
                  <div key={step.n} className="flex gap-6 items-start pl-0 md:pl-14">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 ${a.border} flex items-center justify-center font-black text-sm ${a.text} bg-[#0D0D1A] md:absolute md:left-0`}>
                      {step.n}
                    </div>
                    <div>
                      <h3 className={`font-black text-sm mb-1 ${a.text}`}>{step.title}</h3>
                      <p className="text-white/50 text-sm">{step.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="py-20 px-4" id="quote">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#7B2FFF] bg-[#7B2FFF]/10 border border-[#7B2FFF]/30 px-4 py-1 rounded-full mb-4">
              Instant Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-none"
              style={{ textShadow: "3px 3px 0px #7B2FFF, 6px 6px 0px #00F5D4" }}>
              Get Your Price Now
            </h2>
          </div>
          <QuoteBuilder preselectedServiceId="outdoor-signage" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#7B2FFF]/10 to-[#00F5D4]/10 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">Large site? Let's talk.</h2>
          <p className="text-white/50 mb-8">For multi-sign projects, compound branding and development hoardings — we provide competitive project rates.</p>
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
