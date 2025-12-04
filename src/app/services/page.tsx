import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import {
  featuredProjects,
  processSteps,
  servicesList,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Services | Emirads Signage & Branding",
  description:
    "Explore Emirads full-stack services: signages, vehicle wraps, event builds, joinery, aluminum, glass and neon fabrication.",
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(0,172,238,0.25),_transparent_70%)] blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(236,0,140,0.35),_transparent_70%)] blur-3xl" />
      </div>
      <Container className="relative space-y-16">
        <SectionHeading
          align="center"
          eyebrow="Service Catalogue"
          title="Modular teams that take you from concept to lit signage."
          description="Every requirement slots into four specialist pods — signage, fleet branding, experiential and fabrication labs. Choose the pod you need or engage the full stack."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {servicesList.map((service) => (
            <GlassPanel key={service.title} className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <Tag tone="cyan">{service.tag}</Tag>
                <service.icon className="h-6 w-6 text-white/70" />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="text-white/70">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[var(--brand-magenta)]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ))}
        </div>

        <GlassPanel className="p-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1 space-y-4">
              <SectionHeading
                eyebrow="Workflow"
                title="Tightly managed sprints with transparent checkpoints."
                description="A single Emirads project manager orchestrates site audits, permits, fabrication schedules, QA sign-offs and installation crews."
              />
            </div>
            <div className="flex-1 space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 text-sm font-semibold text-white/80">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="text-sm text-white/70">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <SectionHeading
          eyebrow="Featured Work"
          title="Recent launches across retail, automotive and live events."
          description="Tap into our fabrication muscle for statement pieces, multi-site rollouts or rapid event deployments."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <GlassPanel
              key={project.name}
              className="relative flex flex-col gap-6 overflow-hidden p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,229,0,0.15),_transparent)]" />
              <div className="relative space-y-2">
                <Tag tone="yellow" className="text-[0.6rem] tracking-[0.4em]">
                  {project.scope}
                </Tag>
                <h3 className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>
              <ul className="relative space-y-2 text-white/80">
                {project.stats.map((stat) => (
                  <li key={stat} className="flex items-center gap-2 text-sm">
                    <ArrowUpRight className="h-4 w-4 text-white/50" />
                    {stat}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </main>
  );
}

