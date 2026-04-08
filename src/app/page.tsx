"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Car,
  Sparkles,
  Wrench,
  Zap,
  Star,
  Flame,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { buttonBase, buttonVariants } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { SignageGallery } from "@/components/gallery/signage-gallery";
import {
  contactMethods,
  craftingMaterials,
  featuredProjects,
  heroStats,
  processSteps,
  servicesList,
} from "@/content/site";
import { cn } from "@/lib/utils";

const accentColors = [
  { border: "#FF3AF2", shadow: "#FFE600", bg: "#FF3AF2" },
  { border: "#00F5D4", shadow: "#7B2FFF", bg: "#00F5D4" },
  { border: "#FFE600", shadow: "#FF6B35", bg: "#FFE600" },
  { border: "#FF6B35", shadow: "#FF3AF2", bg: "#FF6B35" },
  { border: "#7B2FFF", shadow: "#00F5D4", bg: "#7B2FFF" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const serviceTagTones = ["magenta", "cyan", "yellow", "orange"] as const;

const floatingShapes = [
  { emoji: "⚡", top: "8%", left: "5%", delay: 0, size: "text-4xl" },
  { emoji: "✨", top: "15%", right: "8%", delay: 0.5, size: "text-3xl" },
  { emoji: "🔥", top: "45%", left: "2%", delay: 1, size: "text-2xl" },
  { emoji: "💫", top: "60%", right: "3%", delay: 1.5, size: "text-3xl" },
  { emoji: "⭐", top: "80%", left: "7%", delay: 0.8, size: "text-2xl" },
  { emoji: "🚀", top: "25%", right: "2%", delay: 1.2, size: "text-2xl" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#0D0D1A]">
      {/* === FLOATING DECORATIVE SHAPES === */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {floatingShapes.map((shape, i) => (
          <div
            key={i}
            className={cn("absolute animate-float opacity-40 select-none", shape.size)}
            style={{
              top: shape.top,
              left: "left" in shape ? shape.left : undefined,
              right: "right" in shape ? shape.right : undefined,
              animationDelay: `${shape.delay}s`,
            }}
          >
            {shape.emoji}
          </div>
        ))}
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(123,47,255,0.3),_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(255,58,242,0.25),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(0,245,212,0.2),_transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative z-10">

        {/* ============================================================
            HERO SECTION
        ============================================================ */}
        <motion.section
          className="relative overflow-hidden rounded-3xl border-4 border-[#FF3AF2] p-8 sm:p-12 lg:p-16"
          style={{
            background: "linear-gradient(135deg, #2D1B4E 0%, #1A0B35 40%, #0D0D1A 100%)",
            boxShadow: "12px 12px 0 #FFE600, 24px 24px 0 #FF3AF2, 0 0 80px rgba(255,58,242,0.3)",
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />
          <div className="pointer-events-none absolute inset-0 pattern-diagonal" />
          <div
            className="pointer-events-none absolute -top-8 -right-4 select-none text-[180px] font-black uppercase leading-none opacity-5 lg:text-[260px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ADS
          </div>

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-[#FF3AF2] blur-lg opacity-80 animate-pulse-glow" />
                  <Image
                    src="/logo-emirads.svg"
                    alt="Emirads logo"
                    width={72}
                    height={72}
                    priority
                    className="relative h-16 w-16 rounded-2xl border-4 border-[#FFE600] bg-white p-2"
                    style={{ boxShadow: "4px 4px 0 #FF3AF2" }}
                  />
                </div>
                <Tag tone="magenta" className="text-[0.65rem] tracking-[0.5em]">
                  <Sparkles className="h-3 w-3 mr-1" />
                  EMIRADS · UAE
                </Tag>
              </div>

              <div>
                <p className="mb-2 text-sm font-black uppercase tracking-[0.5em] text-[#00F5D4]">
                  Dubai · Abu Dhabi · Riyadh
                </p>
                <h1
                  className="text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    textShadow: "4px 4px 0px #7B2FFF, 8px 8px 0px #FF3AF2, 12px 12px 0px #00F5D4",
                  }}
                >
                  Illuminated
                  <span className="gradient-text-main block">signage</span>
                  <span className="block text-[#FFE600]">& beyond.</span>
                </h1>
              </div>

              <p className="max-w-xl text-lg font-medium leading-relaxed text-white/85 lg:text-xl">
                Fabrication-first makers delivering{" "}
                <span className="text-[#FF3AF2] font-black">front lit</span> and{" "}
                <span className="text-[#00F5D4] font-black">backlit signages</span>, high-fidelity neon, full vehicle wraps, event environments, joinery, aluminum, glass and interior fit-outs across the UAE.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:info@emirads.ae?subject=Project%20Discovery%20Call"
                  className={cn(buttonBase, buttonVariants.primary, "text-sm")}
                >
                  <Zap className="h-4 w-4" />
                  Schedule a discovery call
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className={cn(buttonBase, buttonVariants.secondary, "text-sm")}
                >
                  View capabilities
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Signages", tone: "yellow" },
                  { label: "Vehicle Wraps", tone: "magenta" },
                  { label: "Events", tone: "cyan" },
                  { label: "Joinery & Interiors", tone: "orange" },
                  { label: "Neon Glass", tone: "purple" },
                ].map((tag) => (
                  <Tag key={tag.label} tone={tag.tone as "yellow" | "magenta" | "cyan" | "orange" | "purple"}>
                    {tag.label}
                  </Tag>
                ))}
              </div>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-3xl border-4 border-[#00F5D4] p-6 sm:p-8 lg:max-w-xs xl:max-w-sm"
              style={{
                background: "rgba(0,245,212,0.05)",
                boxShadow: "8px 8px 0 #7B2FFF, 0 0 30px rgba(0,245,212,0.2)",
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="pattern-check absolute inset-0 opacity-40" />
              <p className="relative mb-6 text-xs font-black uppercase tracking-[0.5em] text-[#00F5D4]">
                ⚡ Quick stats
              </p>
              <div className="relative grid grid-cols-2 gap-6">
                {heroStats.map((item, i) => {
                  const accent = accentColors[i % accentColors.length];
                  return (
                    <div key={item.label} className="flex flex-col gap-1">
                      <p
                        className="text-4xl font-black"
                        style={{
                          fontFamily: "var(--font-display)",
                          textShadow: `2px 2px 0px ${accent.border}`,
                          color: accent.border,
                        }}
                      >
                        {item.value}
                      </p>
                      <p className="text-xs font-medium text-white/70">{item.label}</p>
                    </div>
                  );
                })}
              </div>
              <div
                className="relative mt-6 rounded-2xl border-2 border-[#FFE600] bg-[#FFE600]/10 p-4 text-sm"
                style={{ boxShadow: "3px 3px 0 #FF6B35" }}
              >
                <p className="font-black text-[#FFE600]">⚡ Rapid delivery</p>
                <p className="mt-1 text-white/75">
                  Concept to lit signage in as little as 12 days with in-house lines.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ============================================================
            SERVICES SECTION
        ============================================================ */}
        <section id="services" className="mt-24">
          <motion.div
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeading
              eyebrow="Capabilities"
              title="Everything from neon glasswork to aluminum structures."
            />
            <p className="max-w-xl text-lg font-medium text-white/75">
              One partner for illuminated signage, vehicle graphics, event builds, joinery, interior fit-out, neon, aluminum and glass work.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              const accent = accentColors[index % accentColors.length];
              const tone = serviceTagTones[index % serviceTagTones.length];
              return (
                <motion.div
                  key={service.title}
                  className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border-4 p-7 transition-all duration-300"
                  style={{
                    borderColor: accent.border,
                    background: `linear-gradient(135deg, ${accent.border}12, #2D1B4E80)`,
                    boxShadow: `8px 8px 0 ${accent.shadow}`,
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="pointer-events-none absolute inset-0 pattern-diagonal opacity-50" />
                  <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-10" style={{ color: accent.border }}>
                    <Icon className="h-40 w-40" />
                  </div>

                  <div className="relative flex items-center justify-between">
                    <Tag tone={tone}>{service.tag}</Tag>
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border-4"
                      style={{
                        borderColor: accent.border,
                        backgroundColor: `${accent.border}20`,
                        boxShadow: `3px 3px 0 ${accent.shadow}`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: accent.border }} />
                    </div>
                  </div>

                  <h3
                    className="relative text-2xl font-black text-white sm:text-3xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      textShadow: `2px 2px 0px ${accent.border}`,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="relative text-base text-white/75">{service.description}</p>

                  <ul className="relative mt-2 space-y-2">
                    {service.items.map((item, ii) => {
                      const dotColor = accentColors[(index + ii) % accentColors.length].border;
                      return (
                        <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/85">
                          <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: dotColor }} />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            VEHICLE BRANDING + NEON SECTION
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GlassPanel accent="cyan" className="p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-0 pattern-dots opacity-20" />
              <div className="relative flex items-center justify-between">
                <Tag tone="cyan" className="text-[0.65rem] tracking-[0.4em]">Vehicle branding</Tag>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-[#00F5D4] bg-[#00F5D4]/10"
                  style={{ boxShadow: "3px 3px 0 #7B2FFF" }}
                >
                  <Car className="h-5 w-5 text-[#00F5D4]" />
                </div>
              </div>
              <h3
                className="relative mt-6 text-3xl font-black text-white sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  textShadow: "3px 3px 0px #00F5D4, 6px 6px 0px #7B2FFF",
                }}
              >
                Full, partial and plotter wraps engineered for desert climates.
              </h3>
              <p className="relative mt-4 text-base text-white/80">
                Laminated cast vinyl, reflective decals, rivet rolling and complex curves handled by 3M-certified installers.
              </p>
              <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
                {["Full wrap", "Partial wrap", "Plotter graphics"].map((label, i) => {
                  const acc = accentColors[(i + 1) % accentColors.length];
                  return (
                    <div
                      key={label}
                      className="rounded-2xl border-2 p-4 text-center text-sm font-black uppercase tracking-wide text-white"
                      style={{
                        borderColor: acc.border,
                        backgroundColor: `${acc.border}15`,
                        boxShadow: `3px 3px 0 ${acc.shadow}`,
                      }}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
            </GlassPanel>

            <GlassPanel accent="yellow" className="p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-0 pattern-diagonal opacity-60" />
              <div className="relative flex items-center justify-between">
                <Tag tone="yellow" className="text-[0.65rem] tracking-[0.4em]">Neon & lighting</Tag>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-[#FFE600] bg-[#FFE600]/10"
                  style={{ boxShadow: "3px 3px 0 #FF6B35" }}
                >
                  <Sparkles className="h-5 w-5 text-[#FFE600]" />
                </div>
              </div>
              <h3
                className="relative mt-6 text-3xl font-black text-white sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  textShadow: "3px 3px 0px #FFE600, 6px 6px 0px #FF6B35",
                }}
              >
                Neon glass, LED neon flex and hybrid lightboxes.
              </h3>
              <p className="relative mt-4 text-base text-white/80">
                Flame-bent glass tubes, RGB controllers, DMX, diffused acrylic and aluminum housings.
              </p>
              <ul className="relative mt-6 space-y-3">
                {[
                  "Hand fabricated neon typography",
                  "Flex neon for event rigging",
                  "Push-through letters with day/night vinyl",
                  "Smart control systems & maintenance",
                ].map((item, i) => {
                  const dotColor = accentColors[i % accentColors.length].border;
                  return (
                    <li key={item} className="flex gap-3 text-sm font-medium text-white/85">
                      <Star className="h-4 w-4 shrink-0 mt-0.5" style={{ color: dotColor }} />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </GlassPanel>
          </motion.div>
        </section>

        {/* ============================================================
            FEATURED PROJECTS
        ============================================================ */}
        <section className="mt-24">
          <motion.div className="mb-12" {...fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <SectionHeading
              eyebrow="Featured work"
              title="Built for retail, automotive, destination and event clients."
            />
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const accent = accentColors[index % accentColors.length];
              return (
                <motion.div
                  key={project.name}
                  className="relative overflow-hidden rounded-3xl border-4 p-7"
                  style={{
                    borderColor: accent.border,
                    background: `linear-gradient(135deg, ${accent.border}18, #2D1B4E90)`,
                    boxShadow: `8px 8px 0 ${accent.shadow}, 16px 16px 0 ${accent.border}50`,
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="pointer-events-none absolute inset-0 pattern-check opacity-30" />
                  <div
                    className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0D0D1A] text-sm font-black"
                    style={{ backgroundColor: accent.border, color: "#0D0D1A" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative space-y-4">
                    <Tag tone={serviceTagTones[index % serviceTagTones.length]} className="text-[0.6rem] tracking-[0.4em]">
                      {project.scope}
                    </Tag>
                    <h3
                      className="text-2xl font-black text-white"
                      style={{
                        fontFamily: "var(--font-display)",
                        textShadow: `2px 2px 0px ${accent.border}`,
                      }}
                    >
                      {project.name}
                    </h3>
                    <ul className="space-y-2">
                      {project.stats.map((stat) => (
                        <li key={stat} className="flex items-center gap-3 text-sm font-medium text-white/85">
                          <span className="h-px w-6 rounded-full" style={{ backgroundColor: accent.border }} />
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ============================================================
            GALLERY
        ============================================================ */}
        <SignageGallery />

        {/* ============================================================
            FABRICATION PROCESS
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            className="relative overflow-hidden rounded-3xl border-4 border-[#7B2FFF] p-8 sm:p-12"
            style={{
              background: "linear-gradient(135deg, #2D1B4E 0%, #1A0535 100%)",
              boxShadow: "12px 12px 0 #00F5D4, 24px 24px 0 #7B2FFF",
            }}
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="pointer-events-none absolute inset-0 pattern-dots opacity-20" />
            <div className="pointer-events-none absolute inset-0 pattern-diagonal" />
            <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-6">
                <Tag tone="purple" className="text-[0.65rem] tracking-[0.4em]">
                  Fabrication process
                </Tag>
                <h2
                  className="text-4xl font-black text-white sm:text-5xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    textShadow: "3px 3px 0px #7B2FFF, 6px 6px 0px #00F5D4",
                  }}
                >
                  A disciplined workflow from audit to maintenance.
                </h2>
                <p className="text-lg text-white/80">
                  Every project receives a technical audit, drawing package and QC report.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {craftingMaterials.map((material, i) => {
                    const acc = accentColors[i % accentColors.length];
                    return (
                      <span
                        key={material}
                        className="rounded-full border-2 px-4 py-1 text-xs font-black uppercase tracking-wide text-white"
                        style={{
                          borderColor: acc.border,
                          backgroundColor: `${acc.border}15`,
                          boxShadow: `2px 2px 0 ${acc.shadow}`,
                        }}
                      >
                        {material}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-5">
                {processSteps.map((step, index) => {
                  const accent = accentColors[index % accentColors.length];
                  return (
                    <div
                      key={step.title}
                      className="flex gap-5 rounded-2xl border-4 p-5"
                      style={{
                        borderColor: accent.border,
                        background: `${accent.border}10`,
                        boxShadow: `4px 4px 0 ${accent.shadow}`,
                      }}
                    >
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-4 text-xl font-black"
                        style={{
                          borderColor: accent.border,
                          backgroundColor: `${accent.border}25`,
                          color: accent.border,
                          boxShadow: `3px 3px 0 ${accent.shadow}`,
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <div>
                        <p className="text-xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm text-white/75">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================================================
            JOINERY + EVENT SUPPORT
        ============================================================ */}
        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          <motion.div {...fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <GlassPanel accent="orange" className="flex h-full flex-col gap-6 p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-0 pattern-diagonal opacity-50" />
              <div className="relative flex items-center justify-between">
                <Tag tone="orange" className="text-[0.6rem] tracking-[0.4em]">
                  Joinery · Interior · Aluminum · Glass
                </Tag>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-[#FF6B35] bg-[#FF6B35]/10"
                  style={{ boxShadow: "3px 3px 0 #FF3AF2" }}
                >
                  <Wrench className="h-5 w-5 text-[#FF6B35]" />
                </div>
              </div>
              <h3
                className="relative text-3xl font-black text-white sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  textShadow: "3px 3px 0px #FF6B35, 6px 6px 0px #FF3AF2",
                }}
              >
                Bespoke counters, kiosks, feature walls and aluminum structures.
              </h3>
              <p className="relative text-base text-white/80">
                Event counters, mall kiosks, media walls, suspended canopies and storefront interiors.
              </p>
              <div className="relative grid gap-4 sm:grid-cols-2">
                {["Joinery work", "Interior fit-out", "Aluminum work", "Glass work"].map((item, i) => {
                  const acc = accentColors[i % accentColors.length];
                  return (
                    <div
                      key={item}
                      className="rounded-2xl border-2 p-4 text-sm font-black uppercase tracking-wide text-white"
                      style={{
                        borderColor: acc.border,
                        backgroundColor: `${acc.border}15`,
                        boxShadow: `3px 3px 0 ${acc.shadow}`,
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GlassPanel accent="purple" className="flex h-full flex-col gap-6 p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-0 pattern-check opacity-30" />
              <div className="relative flex items-center justify-between">
                <Tag tone="purple" className="text-[0.6rem] tracking-[0.4em]">Event support</Tag>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-[#7B2FFF] bg-[#7B2FFF]/10"
                  style={{ boxShadow: "3px 3px 0 #00F5D4" }}
                >
                  <Sparkles className="h-5 w-5 text-[#7B2FFF]" />
                </div>
              </div>
              <h3
                className="relative text-3xl font-black text-white sm:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  textShadow: "3px 3px 0px #7B2FFF, 6px 6px 0px #00F5D4",
                }}
              >
                24/7 event branding, rigging and rapid response.
              </h3>
              <p className="relative text-base text-white/80">
                Dedicated night teams, safety supervisors and transport fleet keep event programs on schedule.
              </p>
              <ul className="relative space-y-3">
                {[
                  "Event branding & wayfinding",
                  "On-site maintenance and replacements",
                  "Glass & neon emergency repair",
                  "Permits, authority drawings & compliance",
                ].map((item, i) => {
                  const dotColor = accentColors[i % accentColors.length].border;
                  return (
                    <li key={item} className="flex gap-3 text-sm font-medium text-white/85">
                      <Flame className="h-4 w-4 shrink-0 mt-0.5" style={{ color: dotColor }} />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </GlassPanel>
          </motion.div>
        </section>

        {/* ============================================================
            INSTANT PRICE SECTION
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            className="relative overflow-hidden rounded-3xl border-4 border-[#FFE600] p-10 sm:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, #2D1B4E 0%, #1A0B35 50%, #0D0D1A 100%)",
              boxShadow: "12px 12px 0 #FF3AF2, 24px 24px 0 #FFE600",
            }}
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="pointer-events-none absolute inset-0 pattern-dots opacity-25" />
            <div className="relative">
              <div
                className="inline-block text-xs font-black uppercase tracking-[0.2em] mb-4 px-4 py-1 rounded-full border-2"
                style={{ borderColor: "#FFE600", color: "#FFE600", backgroundColor: "#FFE60015" }}
              >
                ⚡ No Waiting. No Calls.
              </div>
              <h2
                className="text-4xl md:text-6xl font-black text-white leading-none mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  textShadow: "4px 4px 0px #FFE600, 8px 8px 0px #FF3AF2",
                }}
              >
                Get Your Price in 60 Seconds.
              </h2>
              <p className="text-xl text-white/60 font-medium max-w-xl mx-auto mb-10">
                Select a service, enter your dimensions, and see an instant estimate. No registration required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className={cn(buttonBase, buttonVariants.primary, "text-sm px-10 py-4")}
                >
                  <Zap className="h-4 w-4" />
                  Try the Price Calculator
                </Link>
                <a
                  href="https://wa.me/971552682030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl border-2 border-[#25D366] text-sm"
                  style={{ boxShadow: "4px 4px 0 #128C7E" }}
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================================================
            PROJECTS PREVIEW
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            className="mb-10 flex items-end justify-between"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeading eyebrow="Our work" title="Projects that prove what we can do." />
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-[#00F5D4] font-black uppercase tracking-widest text-xs hover:text-white transition-colors"
            >
              View all projects <ArrowUpRight size={14} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: "🚗", title: "Al Jaber Fleet Wrap", detail: "12 vehicles · 5-day turnaround", accent: accentColors[0] },
              { emoji: "✨", title: "Dubai Mall Fascia", detail: "Chrome halo-lit · overnight install", accent: accentColors[1] },
              { emoji: "📺", title: "Retail Video Wall", detail: "8 sq m P4 · cloud CMS included", accent: accentColors[2] },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                className="rounded-3xl border-4 p-7 flex flex-col gap-4"
                style={{
                  borderColor: p.accent.border,
                  background: `linear-gradient(135deg, ${p.accent.border}18, #2D1B4E80)`,
                  boxShadow: `8px 8px 0 ${p.accent.shadow}`,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="text-5xl">{p.emoji}</div>
                <h3 className="text-xl font-black text-white" style={{ textShadow: `2px 2px 0 ${p.accent.border}` }}>
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm font-medium">{p.detail}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 text-[#00F5D4] font-black uppercase tracking-widest text-xs">
              View all projects <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        {/* ============================================================
            CONTACT CTA
        ============================================================ */}
        <section className="mt-24">
          <motion.div
            className="relative overflow-hidden rounded-3xl border-4 border-[#FFE600] p-10 sm:p-14"
            style={{
              background: "linear-gradient(135deg, #2D1B4E 0%, #1A0B35 50%, #0D0D1A 100%)",
              boxShadow: "12px 12px 0 #FF3AF2, 24px 24px 0 #FFE600, 0 0 60px rgba(255,230,0,0.2)",
            }}
            {...fadeUp}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="pointer-events-none absolute inset-0 pattern-dots opacity-25" />
            <div className="pointer-events-none absolute inset-0 pattern-diagonal" />
            <div
              className="pointer-events-none absolute -top-10 -left-4 select-none text-[200px] font-black uppercase leading-none opacity-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              BUILD
            </div>
            <div className="relative grid gap-12 lg:grid-cols-2">
              <div>
                <Tag tone="yellow" className="mb-6 text-[0.65rem] tracking-[0.5em]">
                  🚀 Ready to build?
                </Tag>
                <h2
                  className="text-4xl font-black text-white sm:text-5xl lg:text-6xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    textShadow: "4px 4px 0px #FFE600, 8px 8px 0px #FF3AF2",
                  }}
                >
                  Tell us about your signage brief.
                </h2>
                <p className="mt-5 text-lg text-white/80">
                  Share drawings, brand guidelines or a mood board. We&apos;ll respond with a material board, lead time and budget milestone within{" "}
                  <span className="font-black text-[#FFE600]">24 hours</span>.
                </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/quote"
                  className={cn(buttonBase, buttonVariants.primary, "text-sm")}
                >
                  <Zap className="h-4 w-4" />
                  Get Instant Price
                </Link>
                <a
                  href="https://wa.me/971552682030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl border-2 border-[#25D366] text-sm"
                  style={{ boxShadow: "4px 4px 0 #128C7E" }}
                >
                  💬 WhatsApp
                </a>
              </div>
              </div>
              <div className="space-y-4">
                {contactMethods.map(({ icon: Icon, ...method }, i) => {
                  const accent = accentColors[i % accentColors.length];
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border-4 p-5 transition-all duration-200 hover:-translate-y-1"
                      style={{
                        borderColor: accent.border,
                        backgroundColor: `${accent.border}10`,
                        boxShadow: `6px 6px 0 ${accent.shadow}`,
                      }}
                    >
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.4em] text-white/60">
                          {method.label}
                        </p>
                        <p className="mt-1 text-xl font-black text-white">{method.value}</p>
                      </div>
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4"
                        style={{
                          borderColor: accent.border,
                          backgroundColor: `${accent.border}20`,
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: accent.border }} />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================================================
            FOOTER
        ============================================================ */}
        <footer
          className="relative mt-16 overflow-hidden rounded-3xl border-4 border-[#FF3AF2] px-8 py-10"
          style={{
            background: "linear-gradient(135deg, #2D1B4E, #0D0D1A)",
            boxShadow: "8px 8px 0 #FFE600",
          }}
        >
          <div className="pointer-events-none absolute inset-0 pattern-check opacity-20" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-emirads.svg"
                alt="Emirads"
                width={40}
                height={40}
                className="rounded-xl border-4 border-[#FFE600] bg-white p-1"
                style={{ boxShadow: "3px 3px 0 #FF3AF2" }}
              />
              <div>
                <p className="font-black text-white" style={{ textShadow: "2px 2px 0 #FF3AF2" }}>
                  Emirads
                </p>
                <p className="text-xs font-black uppercase tracking-[0.4em] text-[#00F5D4]">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Projects", href: "/projects", tone: 0 },
                { label: "About", href: "/about", tone: 1 },
                { label: "Quote", href: "/quote", tone: 2 },
                { label: "info@emirads.ae", href: "mailto:info@emirads.ae", tone: 3 },
                { label: "Instagram", href: "https://instagram.com/", tone: 4 },
              ].map(({ label, href, tone }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  className="rounded-full border-2 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white transition-all hover:-translate-y-0.5"
                  style={{
                    borderColor: accentColors[tone].border,
                    backgroundColor: `${accentColors[tone].border}20`,
                    boxShadow: `2px 2px 0 ${accentColors[tone].shadow}`,
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </Container>
    </main>
  );
}
