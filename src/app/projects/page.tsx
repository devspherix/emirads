import { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "./ProjectsGrid";
import { Container } from "@/components/layout/container";
import { SITE } from "@/content/site";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Emirads — Dubai Signage",
  description:
    "Explore our portfolio of vehicle branding, outdoor signage, LED screens and indoor signage projects across the UAE.",
};

const statsData = [
  { label: "In-House", value: "Design to Install", color: "text-[#D50367]" },
  { label: "Materials", value: "Certified", color: "text-[#00BBFE]" },
  { label: "Turnaround", value: "Fast", color: "text-[#7a6400]" },
  { label: "Coverage", value: "UAE-Wide", color: "text-white" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-28 text-white">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-10" />
        <Container className="relative text-center">
          <span className="mb-5 inline-block rounded-full border border-[#FFD705]/30 bg-[#FFD705]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FFD705]">
            Our Work
          </span>
          <h1
            className="mb-4 text-5xl font-black leading-none text-white md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built to Last.
            <span className="gradient-text-warm block">Made to Impress.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            In-house design, production and installation. Every job delivered on time and on spec.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {statsData.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className={`text-4xl font-black ${s.color}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/40">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive filter + grid */}
      <ProjectsGrid />

      {/* CTA */}
      <section className="bg-[#f9f9f9] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="mb-4 text-3xl font-black text-black md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to start your project?
            </h2>
            <p className="mb-8 text-gray-500">
              Get an instant price estimate or talk to our team directly.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/quote"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Get Instant Price
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D50367] to-[#A80250] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}

