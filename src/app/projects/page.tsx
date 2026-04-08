import { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "./ProjectsGrid";
import { Container } from "@/components/layout/container";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Emirads — Dubai Signage",
  description:
    "Explore our portfolio of vehicle branding, outdoor signage, LED screens and indoor signage projects across the UAE.",
};

const statsData = [
  { label: "Projects delivered", value: "500+", color: "text-[#db016e]" },
  { label: "Vehicle wraps", value: "180+", color: "text-[#038CE3]" },
  { label: "Sq ft installed", value: "250K+", color: "text-[#7a6400]" },
  { label: "Years active", value: "12+", color: "text-white" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-28 text-white">
        <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-10" />
        <Container className="relative text-center">
          <span className="mb-5 inline-block rounded-full border border-[#ffe724]/30 bg-[#ffe724]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#ffe724]">
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
            500+ projects completed across the UAE. Every job delivered on time and on spec.
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#db016e] to-[#C00062] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <a
                href="https://wa.me/971585806956"
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

