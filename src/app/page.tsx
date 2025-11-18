"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Car,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Signage Studio",
    tag: "Signages",
    description:
      "Front lit, backlit, neon, push-through and precision 2D signage programs for retail, hospitality and destination facades.",
    items: [
      "Front lit signage engineering",
      "Backlit & halo-lit fascias",
      "Hand-blown neon + LED neon",
      "Push-through acrylic letters",
      "2D CNC-routed brand marks",
    ],
  },
  {
    title: "Vehicle Branding",
    tag: "Fleet",
    description:
      "Turn an entire fleet into rolling media. We manage design, material selection, print, lamination and on-site wrapping.",
    items: [
      "Full vehicle wraps",
      "Partial wraps & gradients",
      "Plotter cut graphics",
      "Protective over-lamination",
      "Fleet rollout scheduling",
    ],
  },
  {
    title: "Event & Experience",
    tag: "Events",
    description:
      "Immersive pop-ups, stages, kiosks and exhibition booths with integrated lighting, AV and brand storytelling.",
    items: [
      "Pop-up retail & kiosks",
      "Stage + truss dressing",
      "Wayfinding & zoning",
      "Rapid deployment teams",
      "On-site technical support",
    ],
  },
  {
    title: "Fabrication Lab",
    tag: "Fabrication",
    description:
      "Joinery, aluminum, acrylic, glass and metal craft under one roof so we can prototype fast and deliver faster.",
    items: [
      "Joinery & bespoke carpentry",
      "Aluminum & mild steel works",
      "Glass bending & lamination",
      "Acrylic thermoforming",
      "In-house paint booth",
    ],
  },
];

const featuredProjects = [
  {
    name: "Glow District Retail",
    scope: "Neon signage + interior wayfinding",
    stats: ["2 week turnaround", "IP65 lighting system", "12m custom fascia"],
  },
  {
    name: "Velocity Motorsports",
    scope: "Full fleet wrap program",
    stats: ["18 vehicles", "Weatherproof vinyl", "Carbon accents"],
  },
  {
    name: "Expo Pavilion Pop-up",
    scope: "Event build + experiential zones",
    stats: ["600 sqm build", "Modular joinery", "AV integration"],
  },
];

const processSteps = [
  {
    title: "Discover & audit",
    detail:
      "Site survey, structural checks, material study and compliance with mall / municipality regulations.",
  },
  {
    title: "Design & prototype",
    detail:
      "3D visualization, lighting calculations and sample panels so stakeholders can sign off fast.",
  },
  {
    title: "Fabricate & wrap",
    detail:
      "In-house joinery, metal, paint, print and electrical teams ensure tighter tolerances and QC.",
  },
  {
    title: "Install & maintain",
    detail:
      "Night installs, access equipment, safety plans and post-install maintenance programs.",
  },
];

const stats = [
  { label: "Installations delivered", value: "950+" },
  { label: "Fleet vehicles wrapped", value: "180+" },
  { label: "Events & pop-ups yearly", value: "40+" },
  { label: "Years crafting signage", value: "12" },
];

const craftingMaterials = [
  "Acrylic + Polycarbonate",
  "Aluminum composite",
  "Solid surface",
  "Edge-lit glass",
  "Powder-coated metals",
  "Programmable LED",
  "Sustainable plywood",
  "Canvas & textile",
];

const contactMethods = [
  {
    label: "Call the workshop",
    value: "+971 52 555 0123",
    href: "tel:+971525550123",
    icon: Phone,
  },
  {
    label: "Email a brief",
    value: "hello@emirads.com",
    href: "mailto:hello@emirads.com?subject=Project%20Brief%20-%20Emirads",
    icon: Mail,
  },
  {
    label: "Visit the yard",
    value: "Dubai Production City, UAE",
    href: "https://maps.app.goo.gl/dummy",
    icon: MapPin,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-[40%] bg-[radial-gradient(circle,_rgba(0,172,238,0.35),_transparent_70%)] blur-3xl" />
        <div className="absolute right-0 top-48 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(236,0,140,0.4),_transparent_70%)] blur-3xl" />
        <div className="absolute left-20 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,229,0,0.35),_transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        <div className="glass-panel relative overflow-hidden px-6 py-10 sm:px-12 sm:py-14">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-magenta)] to-[var(--brand-yellow)] opacity-60" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <motion.div
              className="flex flex-1 flex-col gap-6"
              {...fadeUp}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm tracking-widest text-white/80">
                <Sparkles className="h-4 w-4 text-[var(--brand-yellow)]" />
                EMIRADS • SIGNAGE + BRAND ENVIRONMENTS
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/logo-emirads.svg"
                  alt="Emirads logo"
                  width={64}
                  height={64}
                  priority
                  className="h-16 w-16 rounded-2xl border border-white/20 bg-white/90 p-2 shadow-2xl"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                    Dubai · Abu Dhabi · Riyadh
                  </p>
                  <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                    Illuminated signage, vehicle branding & immersive builds.
                  </h1>
                </div>
              </div>
              <p className="max-w-3xl text-lg text-white/80 lg:text-xl">
                We are fabrication-first makers delivering front lit and backlit
                signages, high fidelity neon, full vehicle wraps, event
                environments, joinery, aluminum, glass and interior fit-outs for
                retail, hospitality, automotive and government partners across
                the UAE.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:hello@emirads.com?subject=Project%20Discovery%20Call"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_rgba(255,255,255,0.9)]"
                >
                  Schedule a discovery call
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-base text-white/90 transition hover:border-white hover:bg-white/10"
                >
                  View capabilities deck
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-black/40 p-6 shadow-inner shadow-black/50 sm:p-8 lg:max-w-sm"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Quick stats
              </p>
              <div className="mt-4 grid grid-cols-2 gap-6">
                {stats.map((item) => (
                  <div key={item.label}>
                    <p className="text-3xl font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="text-sm text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-2 rounded-2xl bg-black/30 p-4 text-sm text-white/70">
                <p className="font-semibold text-white">Rapid delivery window</p>
                <p>
                  Concept to lit signage in as little as 12 days with our
                  in-house joinery, metal and print lines.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="tag bg-white/10 text-[var(--brand-yellow)]">
              Signages
            </span>
            <span className="tag bg-white/10 text-[var(--brand-magenta)]">
              Vehicle wraps
            </span>
            <span className="tag bg-white/10 text-[var(--brand-cyan)]">
              Events
            </span>
            <span className="tag bg-white/10 text-white">Joinery & Interiors</span>
          </div>
        </div>

        <section id="services" className="mt-16 space-y-10">
          <motion.div
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Capabilities
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Everything from neon glasswork to aluminum structures.
              </h2>
            </div>
            <p className="max-w-xl text-base text-white/70">
              One partner for illuminated signage, vehicle graphics, event
              builds, joinery, interior fit-out, neon, aluminum and glass work.
              We engineer, fabricate and install for malls, agencies, architects
              and direct brands.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group glass-panel relative flex flex-col gap-4 p-6 transition duration-300 hover:border-white/30 hover:bg-white/10"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between">
                  <span className="tag bg-white/10 text-[var(--brand-cyan)]">
                    {service.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-magenta)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-10">
          <motion.div
            className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="glass-panel p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                  Vehicle branding
                </p>
                <Car className="h-6 w-6 text-[var(--brand-cyan)]" />
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                Full, partial and plotter wraps engineered for desert climates.
              </h3>
              <p className="mt-4 text-white/70">
                Laminated cast vinyl, reflective decals, rivet rolling and
                complex curves handled by 3M-certified installers. We schedule
                downtime to keep fleets on the road.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {["Full wrap", "Partial wrap", "Plotter graphics"].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-semibold text-white/80"
                    >
                      {label}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="glass-panel p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                  Neon & lighting
                </p>
                <Sparkles className="h-6 w-6 text-[var(--brand-yellow)]" />
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                Neon glass, LED neon flex and hybrid lightboxes.
              </h3>
              <p className="mt-4 text-white/70">
                Flame-bent glass tubes, RGB controllers, DMX, diffused acrylic
                and aluminum housings designed to meet safety and luxe
                aesthetic.
              </p>
              <ul className="mt-4 space-y-2 text-white/75">
                {[
                  "Hand fabricated neon typography",
                  "Flex neon for event rigging",
                  "Push-through letters with day/night vinyl",
                  "Smart control systems & maintenance",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="text-[var(--brand-yellow)]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        <section className="mt-20 space-y-8">
          <motion.div {...fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Featured work
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Built for retail, automotive, destination and event clients.
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-black/10 to-black/40 p-6 shadow-2xl"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,229,0,0.18),_transparent)]" />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                      {project.scope}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {project.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    {project.stats.map((stat) => (
                      <li key={stat} className="flex items-center gap-2">
                        <span className="h-1.5 w-6 rounded-full bg-white/40" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] sm:p-10">
          <motion.div
            className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Fabrication process
              </p>
              <h2 className="text-3xl font-semibold text-white">
                A disciplined workflow from audit to maintenance.
              </h2>
              <p className="text-white/70">
                Every project receives a technical audit, drawing package and QC
                report so approvals are predictable and installations happen
                right the first time.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {craftingMaterials.map((material) => (
                  <span
                    key={material}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/80"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-black/30 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-lg font-bold text-white/80">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="text-sm text-white/70">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          <motion.div
            className="glass-panel flex flex-col gap-6 p-6 sm:p-8"
            {...fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Joinery · Interior · Aluminum · Glass
              </p>
              <Wrench className="h-6 w-6 text-[var(--brand-magenta)]" />
            </div>
            <h3 className="text-3xl font-semibold text-white">
              Bespoke counters, kiosks, feature walls and aluminum structures.
            </h3>
            <p className="text-white/70">
              Event counters, mall kiosks, media walls, suspended canopies and
              storefront interiors delivered with CNC joinery, aluminum welding
              and glass bending labs inside our facility.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Joinery work",
                "Interior fit-out",
                "Aluminum work",
                "Glass work",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="glass-panel flex flex-col gap-6 p-6 sm:p-8"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Event support
              </p>
              <Sparkles className="h-6 w-6 text-[var(--brand-yellow)]" />
            </div>
            <h3 className="text-3xl font-semibold text-white">
              24/7 event branding, rigging and rapid response.
            </h3>
            <p className="text-white/70">
              Dedicated night teams, safety supervisors and transport fleet keep
              event programs on schedule — from launch events to road shows and
              festivals.
            </p>
            <ul className="space-y-3 text-white/75">
              {[
                "Event branding & wayfinding",
                "On-site maintenance and replacements",
                "Glass & neon emergency repair",
                "Permits, authority drawings & compliance",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section className="mt-24 rounded-[2.75rem] border border-white/10 bg-gradient-to-r from-black/70 via-black/40 to-black/80 p-8 shadow-[0_20px_80px_-60px_rgba(0,0,0,0.8)] sm:p-12">
          <motion.div
            className="grid gap-10 lg:grid-cols-2"
            {...fadeUp}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Ready to build?
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Tell us about your signage, wrap, event or interior brief.
              </h2>
              <p className="mt-4 text-white/70">
                Share drawings, brand guidelines or even a quick mood board.
                We&apos;ll respond with a material board, lead time and budget
                milestone within 24 hours.
              </p>
              <Link
                href="mailto:hello@emirads.com?subject=Launch%20my%20project"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5"
              >
                Send us your project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {contactMethods.map(({ icon: Icon, ...method }) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/40 hover:bg-white/10"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                      {method.label}
                    </p>
                    <p className="text-xl font-semibold text-white">
                      {method.value}
                    </p>
                  </div>
                  <Icon className="h-6 w-6 text-[var(--brand-cyan)]" />
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <footer className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Emirads. All rights reserved.</p>
          <div className="flex gap-3 text-white/60">
            <Link href="mailto:hello@emirads.com">hello@emirads.com</Link>
            <span className="opacity-40">/</span>
            <Link href="https://instagram.com/" target="_blank">
              Instagram
            </Link>
            <span className="opacity-40">/</span>
            <Link href="https://www.behance.net/" target="_blank">
              Behance
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
