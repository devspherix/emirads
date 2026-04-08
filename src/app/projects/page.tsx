import { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Emirads — Dubai Signage",
  description:
    "Explore our portfolio of vehicle branding, outdoor signage, LED screens and indoor signage projects across the UAE.",
};

const accentColors = [
  { text: "text-[#FF3AF2]" },
  { text: "text-[#00F5D4]" },
  { text: "text-[#FFE600]" },
  { text: "text-[#FF6B35]" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#FF3AF2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7B2FFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#FFE600] bg-[#FFE600]/10 border border-[#FFE600]/30 px-4 py-1 rounded-full mb-6">
            Our Work
          </div>
          <h1
            className="text-5xl md:text-7xl font-black text-white leading-none mb-4"
            style={{ textShadow: "4px 4px 0px #7B2FFF, 8px 8px 0px #FF3AF2" }}
          >
            Built to Last.
            <br />
            <span className="text-[#FFE600]">Made to Impress.</span>
          </h1>
          <p className="text-xl text-white/60 font-medium max-w-xl mx-auto">
            500+ projects completed across the UAE. Every job delivered on time and on spec.
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {[
              { label: "Projects delivered", value: "500+" },
              { label: "Vehicle wraps", value: "180+" },
              { label: "Sq ft installed", value: "250K+" },
              { label: "Years active", value: "12+" },
            ].map((s, i) => (
              <div key={s.label} className="text-center">
                <div className={`text-3xl font-black ${accentColors[i].text}`}>{s.value}</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive filter + grid */}
      <ProjectsGrid />

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF3AF2]/10 via-[#7B2FFF]/10 to-[#00F5D4]/10 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ textShadow: "3px 3px 0px #7B2FFF" }}
          >
            Ready to start your project?
          </h2>
          <p className="text-white/50 mb-8 font-medium">
            Get an instant price estimate or talk to our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFE600] text-black font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_#FF3AF2] hover:shadow-[2px_2px_0px_#FF3AF2] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              ⚡ Get Instant Price
            </Link>
            <a
              href="https://wa.me/971552682030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_#128C7E] hover:shadow-[2px_2px_0px_#128C7E] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
