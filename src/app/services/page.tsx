import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { SignageGallery } from "@/components/gallery/signage-gallery";
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

const accentColors = [
  { border: "#FF3AF2", shadow: "#FFE600", bg: "#FF3AF2" },
  { border: "#00F5D4", shadow: "#7B2FFF", bg: "#00F5D4" },
  { border: "#FFE600", shadow: "#FF6B35", bg: "#FFE600" },
  { border: "#FF6B35", shadow: "#FF3AF2", bg: "#FF6B35" },
  { border: "#7B2FFF", shadow: "#00F5D4", bg: "#7B2FFF" },
];

const tagTones = ["magenta", "cyan", "yellow", "orange"] as const;

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#0D0D1A]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(123,47,255,0.25),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(255,58,242,0.2),_transparent_70%)] blur-3xl" />
      </div>
      <Container className="relative z-10 space-y-20">

        {/* Header */}
        <div
          className="relative overflow-hidden rounded-3xl border-4 border-[#00F5D4] p-10 sm:p-14"
          style={{
            background: "linear-gradient(135deg, #2D1B4E, #1A0535)",
            boxShadow: "12px 12px 0 #7B2FFF, 24px 24px 0 #00F5D4",
          }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,245,212,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px", opacity: 0.25 }} />
          <div
            className="pointer-events-none absolute -right-4 -top-6 select-none text-[180px] font-black uppercase leading-none opacity-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SVC
          </div>
          <div className="relative">
            <SectionHeading
              align="center"
              eyebrow="Service Catalogue"
              title="Modular teams from concept to lit signage."
              description="Four specialist pods — signage, fleet branding, experiential and fabrication labs. Choose the pod you need or engage the full stack."
            />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {servicesList.map((service, index) => {
            const accent = accentColors[index % accentColors.length];
            const tone = tagTones[index % tagTones.length];
            return (
              <div
                key={service.title}
                className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border-4 p-8"
                style={{
                  borderColor: accent.border,
                  background: `linear-gradient(135deg, ${accent.border}12, #2D1B4E80)`,
                  boxShadow: `8px 8px 0 ${accent.shadow}`,
                }}
              >
                <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,230,0,0.04) 10px, rgba(255,230,0,0.04) 20px)" }} />
                <div
                  className="absolute -right-6 -bottom-6 pointer-events-none opacity-10"
                  style={{ color: accent.border }}
                >
                  <service.icon className="h-40 w-40" />
                </div>
                <div className="relative flex items-center justify-between">
                  <Tag tone={tone}>{service.tag}</Tag>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border-4"
                    style={{ borderColor: accent.border, backgroundColor: `${accent.border}20`, boxShadow: `3px 3px 0 ${accent.shadow}` }}
                  >
                    <service.icon className="h-5 w-5" style={{ color: accent.border }} />
                  </div>
                </div>
                <h2
                  className="relative text-2xl font-black text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-display)", textShadow: `2px 2px 0px ${accent.border}` }}
                >
                  {service.title}
                </h2>
                <p className="relative text-base text-white/80">{service.description}</p>
                <ul className="relative mt-2 space-y-2">
                  {service.items.map((item, ii) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/85">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: accentColors[(index + ii) % accentColors.length].border }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process */}
        <GlassPanel accent="purple" className="p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "conic-gradient(from 90deg at 1px 1px, transparent 90deg, rgba(0,245,212,0.06) 0)", backgroundSize: "40px 40px" }} />
          <div className="relative flex flex-col gap-8 lg:flex-row">
            <div className="flex-1 space-y-4">
              <SectionHeading
                eyebrow="Workflow"
                title="Tightly managed sprints with transparent checkpoints."
                description="A single Emirads project manager orchestrates site audits, permits, fabrication schedules, QA sign-offs and installation crews."
              />
            </div>
            <div className="flex-1 space-y-5">
              {processSteps.map((step, index) => {
                const accent = accentColors[index % accentColors.length];
                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border-4 p-5"
                    style={{ borderColor: accent.border, background: `${accent.border}10`, boxShadow: `4px 4px 0 ${accent.shadow}` }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 text-lg font-black"
                      style={{ borderColor: accent.border, backgroundColor: `${accent.border}25`, color: accent.border, fontFamily: "var(--font-display)" }}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-lg font-black text-white" style={{ fontFamily: "var(--font-display)" }}>{step.title}</p>
                      <p className="text-sm text-white/75">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </GlassPanel>

        {/* Featured Projects */}
        <div>
          <SectionHeading
            eyebrow="Featured Work"
            title="Recent launches across retail, automotive and live events."
            description="Tap into our fabrication muscle for statement pieces, multi-site rollouts or rapid event deployments."
            className="mb-10"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const accent = accentColors[index % accentColors.length];
              return (
                <div
                  key={project.name}
                  className="relative overflow-hidden rounded-3xl border-4 p-7"
                  style={{
                    borderColor: accent.border,
                    background: `linear-gradient(135deg, ${accent.border}18, #2D1B4E90)`,
                    boxShadow: `8px 8px 0 ${accent.shadow}`,
                  }}
                >
                  <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "conic-gradient(from 90deg at 1px 1px, transparent 90deg, rgba(0,245,212,0.05) 0)", backgroundSize: "40px 40px" }} />
                  <div
                    className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0D0D1A] text-sm font-black"
                    style={{ backgroundColor: accent.border, color: "#0D0D1A" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative space-y-4">
                    <Tag tone={tagTones[index % tagTones.length]} className="text-[0.6rem] tracking-[0.4em]">
                      {project.scope}
                    </Tag>
                    <h3
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: "var(--font-display)", textShadow: `2px 2px 0px ${accent.border}` }}
                    >
                      {project.name}
                    </h3>
                    <ul className="space-y-2">
                      {project.stats.map((stat) => (
                        <li key={stat} className="flex items-center gap-3 text-sm font-medium text-white/85">
                          <ArrowUpRight className="h-4 w-4 shrink-0" style={{ color: accent.border }} />
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <SignageGallery showHeading={true} />
      </Container>
    </main>
  );
}
