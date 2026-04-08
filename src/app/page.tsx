"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Car,
  Sparkles,
  Wrench,
  Zap,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/container";
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

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const serviceIconStyles = [
  { gradient: "from-[#ffe724] to-[#f59e0b]" },
  { gradient: "from-[#db016e] to-[#C00062]" },
  { gradient: "from-[#038CE3] to-[#032DAB]" },
  { gradient: "from-[#10b981] to-[#065f46]" },
];

export default function Home() {
  return (
    <main className="bg-white">

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative overflow-hidden pb-24 pt-12 lg:pt-20 lg:pb-32">
        {/* Subtle background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(219,1,110,0.07),_transparent_70%)]" />
          <div className="absolute -bottom-20 -left-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(3,140,227,0.07),_transparent_70%)]" />
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,231,36,0.04),_transparent_70%)]" />
        </div>

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            {/* Left column: text content */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#ffe724] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                <Zap className="h-3 w-3" />
                Dubai&apos;s Premier Sign Makers
              </span>

              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.5em] text-[#038CE3]">
                  Dubai · Abu Dhabi · Riyadh
                </p>
                <h1
                  className="text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Illuminated
                  <span className="gradient-text-main block">signage</span>
                  <span className="block text-black">& beyond.</span>
                </h1>
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-gray-600">
                Fabrication-first makers delivering{" "}
                <strong className="font-bold text-black">front lit</strong> and{" "}
                <strong className="font-bold text-black">backlit signages</strong>,
                high-fidelity neon, full vehicle wraps, event environments, joinery,
                aluminum, glass and interior fit-outs across the UAE.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:info@emirads.ae?subject=Project%20Brief"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#db016e] to-[#C00062] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:border-black hover:bg-black hover:text-white"
                >
                  View Capabilities
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Signages", color: "bg-[#ffe724]/30 text-[#7a6400] border-[#ffe724]" },
                  { label: "Vehicle Wraps", color: "bg-[#db016e]/10 text-[#db016e] border-[#db016e]/30" },
                  { label: "Events", color: "bg-[#038CE3]/10 text-[#038CE3] border-[#038CE3]/30" },
                  { label: "Joinery & Interiors", color: "bg-gray-100 text-gray-700 border-gray-200" },
                  { label: "Neon Glass", color: "bg-black/5 text-black border-black/10" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className={cn(
                      "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider",
                      tag.color
                    )}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right column: stats card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="mb-6 h-1 w-full rounded-full bg-gradient-to-r from-[#db016e] via-[#038CE3] to-[#ffe724]" />
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#038CE3]">
                  ⚡ Quick Stats
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {heroStats.map((item, i) => {
                    const colors = ["text-[#db016e]", "text-[#038CE3]", "text-[#7a6400]", "text-black"];
                    return (
                      <div key={item.label} className="flex flex-col gap-1">
                        <p
                          className={cn("text-4xl font-black", colors[i % 4])}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {item.value}
                        </p>
                        <p className="text-xs font-medium text-gray-400">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 rounded-2xl bg-black p-4">
                  <p className="font-bold text-[#ffe724] text-sm">⚡ Rapid delivery</p>
                  <p className="mt-1 text-sm text-white/70">
                    Concept to lit signage in as little as 12 days with in-house lines.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SERVICES SECTION
      ============================================================ */}
      <section id="services" className="bg-white py-24">
        <Container>
          <motion.div
            className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#db016e]" />
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#db016e]">
                  Capabilities
                </p>
              </div>
              <h2
                className="text-4xl font-black leading-tight text-black sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Everything from neon glasswork
                <br />
                to aluminum structures.
              </h2>
            </div>
            <p className="max-w-sm text-base text-gray-500 lg:text-right">
              One partner for illuminated signage, vehicle graphics, event builds,
              joinery, interior fit-out, neon, aluminum and glass work.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              const iconStyle = serviceIconStyles[index % serviceIconStyles.length];
              return (
                <motion.div
                  key={service.title}
                  className="group hover-card rounded-2xl border border-gray-100 bg-white p-8"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={cn(
                      "mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br",
                      iconStyle.gradient
                    )}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3
                    className="mb-3 text-2xl font-black text-black"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#038CE3]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#db016e] transition-all group-hover:gap-3"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          VEHICLE BRANDING + NEON GLASS SPLIT
      ============================================================ */}
      <section className="bg-[#f9f9f9] py-24">
        <Container>
          <motion.div
            className="grid gap-8 lg:grid-cols-2"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Vehicle Branding */}
            <div
              className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-10"
              style={{ boxShadow: "0 4px 24px rgba(3,140,227,0.07)" }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#038CE3]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#038CE3]">
                <Car className="h-3 w-3" />
                Vehicle Branding
              </div>
              <h3
                className="mb-4 text-2xl font-black text-black sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Full, partial and plotter wraps engineered for desert climates.
              </h3>
              <p className="mb-8 text-base text-gray-500">
                Laminated cast vinyl, reflective decals, rivet rolling and complex curves
                handled by 3M-certified installers.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["Full wrap", "Partial wrap", "Plotter graphics"].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#038CE3]/20 bg-[#038CE3]/5 p-3 text-center text-xs font-bold uppercase tracking-wide text-[#038CE3]"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Neon & Lighting */}
            <div
              className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-10"
              style={{ boxShadow: "0 4px 24px rgba(255,231,36,0.1)" }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#ffe724]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7a6400]">
                <Sparkles className="h-3 w-3" />
                Neon &amp; Lighting
              </div>
              <h3
                className="mb-4 text-2xl font-black text-black sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Neon glass, LED neon flex and hybrid lightboxes.
              </h3>
              <p className="mb-8 text-base text-gray-500">
                Flame-bent glass tubes, RGB controllers, DMX, diffused acrylic and
                aluminum housings.
              </p>
              <ul className="space-y-2">
                {[
                  "Hand fabricated neon typography",
                  "Flex neon for event rigging",
                  "Push-through letters with day/night vinyl",
                  "Smart control systems & maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#ffe724]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ============================================================
          FABRICATION PROCESS
      ============================================================ */}
      <section className="bg-black py-24 text-white">
        <Container>
          <motion.div
            className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#ffe724]" />
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#ffe724]">
                  Fabrication process
                </p>
              </div>
              <h2
                className="text-4xl font-black text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A disciplined workflow from audit to maintenance.
              </h2>
              <p className="text-lg text-white/70">
                Every project receives a technical audit, drawing package and QC report.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {craftingMaterials.map((material, i) => {
                  const pillColors = [
                    "border-[#ffe724]/30 text-[#ffe724]/80",
                    "border-[#db016e]/30 text-[#db016e]/80",
                    "border-[#038CE3]/30 text-[#038CE3]/80",
                    "border-white/20 text-white/60",
                  ];
                  return (
                    <span
                      key={material}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide",
                        pillColors[i % 4]
                      )}
                    >
                      {material}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, index) => {
                const stepAccents = [
                  { num: "text-[#db016e]", border: "border-[#db016e]/20 bg-[#db016e]/5" },
                  { num: "text-[#038CE3]", border: "border-[#038CE3]/20 bg-[#038CE3]/5" },
                  { num: "text-[#ffe724]", border: "border-[#ffe724]/20 bg-[#ffe724]/5" },
                  { num: "text-white", border: "border-white/10 bg-white/5" },
                ];
                const accent = stepAccents[index % 4];
                return (
                  <div
                    key={step.title}
                    className={cn("flex gap-5 rounded-2xl border p-5", accent.border)}
                  >
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-lg font-black",
                        accent.num,
                        accent.border
                      )}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <div>
                      <p
                        className="text-lg font-black text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-white/60">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ============================================================
          GALLERY SECTION
      ============================================================ */}
      <section className="bg-white">
        <SignageGallery />
      </section>

      {/* ============================================================
          FEATURED PROJECTS PREVIEW
      ============================================================ */}
      <section className="bg-[#f9f9f9] py-24">
        <Container>
          <motion.div
            className="mb-10 flex items-end justify-between"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#db016e]" />
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#db016e]">
                  Our work
                </p>
              </div>
              <h2
                className="text-4xl font-black text-black sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Projects that prove
                <br />
                what we can do.
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-sm font-bold text-black hover:text-[#db016e] transition-colors uppercase tracking-wider"
            >
              View all <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const cardAccents = [
                { topBorder: "border-t-4 border-t-[#db016e]", badge: "bg-[#db016e] text-white" },
                { topBorder: "border-t-4 border-t-[#038CE3]", badge: "bg-[#038CE3] text-white" },
                { topBorder: "border-t-4 border-t-[#ffe724]", badge: "bg-[#ffe724] text-black" },
              ];
              const accent = cardAccents[index % 3];
              return (
                <motion.div
                  key={project.name}
                  className={cn(
                    "hover-card rounded-2xl border border-gray-100 bg-white p-6",
                    accent.topBorder
                  )}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span
                    className={cn(
                      "mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
                      accent.badge
                    )}
                  >
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
                        <span className="h-1 w-4 shrink-0 rounded-full bg-gray-300" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          INSTANT PRICE CTA
      ============================================================ */}
      <section className="bg-white py-24">
        <Container>
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-black p-10 sm:p-14 text-center"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-20" />
            <div className="relative">
              <span className="mb-4 inline-block rounded-full border border-[#ffe724]/30 bg-[#ffe724]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#ffe724]">
                ⚡ No Waiting. No Calls.
              </span>
              <h2
                className="mb-4 text-4xl font-black text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get your price in{" "}
                <span className="gradient-text-warm">60 seconds.</span>
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
                Select a service, enter your dimensions, and see an instant estimate.
                No registration required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffe724] px-10 py-4 text-sm font-black uppercase tracking-wider text-black transition-all hover:scale-105 active:scale-95"
                >
                  <Zap className="h-4 w-4" />
                  Try the Price Calculator
                </Link>
                <a
                  href="https://wa.me/971585806956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-10 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:scale-105"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ============================================================
          CONTACT CTA
      ============================================================ */}
      <section className="bg-[#f9f9f9] py-24">
        <Container>
          <motion.div
            className="grid gap-12 lg:grid-cols-2"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#ffe724]" />
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#7a6400]">
                  🚀 Ready to build?
                </p>
              </div>
              <h2
                className="mb-5 text-4xl font-black text-black sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tell us about your signage brief.
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Share drawings, brand guidelines or a mood board. We&apos;ll respond
                with a material board, lead time and budget milestone within{" "}
                <strong className="font-bold text-black">24 hours</strong>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95"
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, ...method }, i) => {
                const cardStyles = [
                  { border: "border-l-4 border-l-[#db016e]", iconBg: "bg-[#db016e]/10", iconColor: "text-[#db016e]" },
                  { border: "border-l-4 border-l-[#038CE3]", iconBg: "bg-[#038CE3]/10", iconColor: "text-[#038CE3]" },
                  { border: "border-l-4 border-l-[#ffe724]", iconBg: "bg-[#ffe724]/20", iconColor: "text-[#7a6400]" },
                ];
                const style = cardStyles[i % 3];
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className={cn(
                      "flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md",
                      style.border
                    )}
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">
                        {method.label}
                      </p>
                      <p className="mt-1 text-lg font-black text-black">{method.value}</p>
                    </div>
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        style.iconBg
                      )}
                    >
                      <Icon className={cn("h-5 w-5", style.iconColor)} />
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="border-t border-gray-100 bg-black py-10">
        <Container className="pb-0 pt-0">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#038CE3] via-[#db016e] to-[#ffe724]">
                <span className="text-lg font-black text-white">E</span>
              </div>
              <div>
                <p
                  className="font-black uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Emirads
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#ffe724]">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Projects", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Quote", href: "/quote" },
                { label: "info@emirads.ae", href: "mailto:info@emirads.ae" },
                { label: "Instagram", href: "https://instagram.com/" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/70 transition-all hover:border-white/60 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </footer>

    </main>
  );
}


