import { Metadata } from "next";
import QuoteBuilder from "@/components/quote/QuoteBuilder";

export const metadata: Metadata = {
  title: "Get an Instant Price | Emirads — Dubai Signage",
  description:
    "Use our instant price calculator to get an estimate for vehicle branding, banners, LED screens, indoor and outdoor signage. No obligations.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      {/* Header */}
      <section className="relative pt-36 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF3AF2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#7B2FFF]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#FFE600] bg-[#FFE600]/10 border border-[#FFE600]/30 px-4 py-1 rounded-full mb-6">
            ⚡ Instant Pricing Tool
          </div>
          <h1
            className="text-5xl md:text-7xl font-black text-white leading-none mb-4"
            style={{
              textShadow:
                "4px 4px 0px #7B2FFF, 8px 8px 0px #FF3AF2",
            }}
          >
            Get Your Price
            <br />
            <span className="text-[#FFE600]">Right Now.</span>
          </h1>
          <p className="text-xl text-white/60 font-medium max-w-lg mx-auto mt-4">
            No waiting. No sales calls. Select a service, enter your specs
            and get an instant estimate in under 60 seconds.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { label: "Services", value: "5" },
              { label: "Quote time", value: "<60s" },
              { label: "Response SLA", value: "2 hrs" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-[#FFE600]">{s.value}</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <QuoteBuilder />
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12 px-4 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-white/30 text-xs font-bold uppercase tracking-widest mb-8">
            Trusted by 500+ businesses across the UAE
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              {
                title: "Estimate accuracy",
                body: "Our quotes are typically within 5–10% of the final invoice.",
                accent: "text-[#00F5D4]",
                border: "border-[#00F5D4]",
              },
              {
                title: "No obligation",
                body: "Getting a quote commits you to nothing. Zero pressure.",
                accent: "text-[#FF3AF2]",
                border: "border-[#FF3AF2]",
              },
              {
                title: "Human follow-up",
                body: "A real person from our team will review and confirm your quote.",
                accent: "text-[#FFE600]",
                border: "border-[#FFE600]",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border-2 ${item.border} bg-white/5 p-6`}>
                <h3 className={`font-black text-sm uppercase tracking-wider mb-2 ${item.accent}`}>
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fallback CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/40 text-sm mb-4">Prefer to talk to a human?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/971552682030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_#128C7E] hover:shadow-[2px_2px_0px_#128C7E] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              💬 WhatsApp +971 55 268 2030
            </a>
            <a
              href="tel:+971552682030"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:border-white/50 transition-colors"
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
