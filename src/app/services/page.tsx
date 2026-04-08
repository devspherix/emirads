import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SignageGallery } from "@/components/gallery/signage-gallery";
import { featuredProjects, processSteps, servicesList } from "@/content/site";

export const metadata: Metadata = {
  title: "Services | Emirads Signage & Branding",
  description:
    "Explore Emirads full-stack services: signages, vehicle wraps, event builds, joinery, aluminum, glass and neon fabrication.",
};

const serviceIconGradients = [
  "from-[#ffe724] to-[#f59e0b]",
  "from-[#db016e] to-[#C00062]",
  "from-[#038CE3] to-[#032DAB]",
  "from-[#10b981] to-[#065f46]",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-black py-24 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-[#ffe724]/30 bg-[#ffe724]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#ffe724]">
              Service Catalogue
            </span>
            <h1
              className="mb-4 text-5xl font-black leading-none text-white md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Modular teams from
              <span className="gradient-text-warm block">concept to lit signage.</span>
            </h1>
            <p className="text-lg text-white/60">
              Four specialist pods — signage, fleet branding, experiential and fabrication labs.
              Choose the pod you need or engage the full stack.
            </p>
          </div>
        </Container>
      </section>

      {/* Service Cards */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="hover-card rounded-2xl border border-gray-100 bg-white p-8"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${serviceIconGradients[index % serviceIconGradients.length]}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h2
                    className="mb-3 text-2xl font-black text-black sm:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="mb-6 text-base text-gray-500">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#038CE3]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-black py-20 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#ffe724]" />
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#ffe724]">Workflow</p>
              </div>
              <h2
                className="mb-4 text-3xl font-black text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tightly managed sprints with transparent checkpoints.
              </h2>
              <p className="text-lg text-white/60">
                A single Emirads project manager orchestrates site audits, permits,
                fabrication schedules, QA sign-offs and installation crews.
              </p>
            </div>
            <div className="space-y-4">
              {processSteps.map((step, index) => {
                const numColors = ["text-[#db016e]", "text-[#038CE3]", "text-[#ffe724]", "text-white"];
                const borderColors = ["border-[#db016e]/20", "border-[#038CE3]/20", "border-[#ffe724]/20", "border-white/10"];
                return (
                  <div
                    key={step.title}
                    className={`flex gap-4 rounded-2xl border bg-white/5 p-5 ${borderColors[index % 4]}`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-sm font-black ${numColors[index % 4]} ${borderColors[index % 4]}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <div>
                      <p className="font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-white/60">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="bg-[#f9f9f9] py-20">
        <Container>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-[#db016e]" />
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#db016e]">Featured Work</p>
          </div>
          <h2
            className="mb-10 text-4xl font-black text-black sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Recent launches across retail,
            <br />
            automotive and live events.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const topColors = ["border-t-[#db016e]", "border-t-[#038CE3]", "border-t-[#ffe724]"];
              const badgeColors = [
                "bg-[#db016e] text-white",
                "bg-[#038CE3] text-white",
                "bg-[#ffe724] text-black",
              ];
              return (
                <div
                  key={project.name}
                  className={`hover-card rounded-2xl border-t-4 border border-gray-100 bg-white p-7 ${topColors[index % 3]}`}
                >
                  <span className={`mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${badgeColors[index % 3]}`}>
                    {project.scope}
                  </span>
                  <h3
                    className="mb-4 text-xl font-black text-black"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.name}
                  </h3>
                  <ul className="space-y-2">
                    {project.stats.map((stat) => (
                      <li key={stat} className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-white">
        <SignageGallery showHeading={true} />
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9f9] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="mb-4 text-3xl font-black text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to get a quote?
            </h2>
            <p className="mb-8 text-gray-500">
              Use our instant price calculator or speak to our team.
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:border-black"
              >
                Contact the team
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
