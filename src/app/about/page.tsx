"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  team,
  SITE,
  accentMap,
  aboutIntro,
  missionStatement,
  visionStatement,
  qualityPrinciples,
  warrantyHighlights,
  type TeamMember,
} from "@/content/site";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(213,3,103,0.10),_transparent_70%)]" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FCE3EE] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#A80250]">
              <Sparkles className="h-3 w-3" /> About {SITE.name}
            </span>
            <h1
              className="mb-5 text-4xl font-black leading-tight text-black sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The People Behind <span className="gradient-text-orange">Your Brand.</span>
            </h1>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              {aboutIntro}
            </p>
          </div>
        </Container>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#f9f9f9] py-20 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              {...fadeUp}
              className="rounded-2xl border border-gray-100 bg-white p-8 card-shadow"
              style={{ borderTopWidth: 4, borderTopColor: "#D50367" }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
                Our Mission
              </p>
              <p className="text-base leading-relaxed text-gray-700">{missionStatement}</p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="rounded-2xl border border-gray-100 bg-white p-8 card-shadow"
              style={{ borderTopWidth: 4, borderTopColor: "#00BBFE" }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#00BBFE]">
                Our Vision
              </p>
              <p className="text-base leading-relaxed text-gray-700">{visionStatement}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              The Team
            </p>
            <h2
              className="text-3xl font-black leading-tight text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The people you&apos;ll actually work with.
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Real humans who pick up the phone, answer messages and own your
              project from quote to install.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      {/* QUALITY POLICY */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              Our Quality Policy
            </p>
            <h2
              className="text-3xl font-black text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Principles we hold every project to.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPrinciples.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 card-shadow card-shadow-hover"
                style={{ borderTopWidth: 4, borderTopColor: "#D50367" }}
              >
                <h3
                  className="mb-2 text-base font-black text-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* WARRANTY */}
      <section className="bg-[#f9f9f9] py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
                Warranty
              </p>
              <h2
                className="mb-5 text-3xl font-black leading-tight text-black sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Every signage backed by a written warranty.
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Our warranty covers manufacturing defects, installation issues
                and material-related problems within the specified warranty
                period — so you can install with confidence.
              </p>
            </motion.div>
            <motion.ul {...fadeUp} className="space-y-3">
              {warrantyHighlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 text-sm font-medium text-gray-700 card-shadow"
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#D50367]" />
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-24">
        <Container>
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#D50367] to-[#D50367] p-10 text-center text-white card-shadow sm:p-14"
          >
            <h2
              className="mb-4 text-3xl font-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s build something great together.
            </h2>
            <p className="mb-8 text-white/90">
              Tell us about your project and we&apos;ll respond within one business day.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/quote"
                variant="dark"
                size="lg"
                className="!bg-white !text-[#D50367] hover:!bg-black hover:!text-white"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="dark" size="lg" className="!bg-black/30 backdrop-blur hover:!bg-black/50">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────
function TeamCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  const [open, setOpen] = useState(false);
  const a = accentMap[member.accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white card-shadow card-shadow-hover"
      style={{ borderTopWidth: 4, borderTopColor: a.hex }}
    >
      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6">
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-3xl font-black text-white"
          style={{
            fontFamily: "var(--font-display)",
            background: `linear-gradient(135deg, ${a.hex}, #1a1a1a)`,
          }}
        >
          {member.initials}
        </div>
        <div className="flex-1">
          <h3
            className="text-xl font-black text-black"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {member.name}
          </h3>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: a.text }}>
            {member.role}
          </p>
          <p className="text-sm leading-relaxed text-gray-600">{member.summary}</p>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors hover:text-black"
            style={{ color: a.text }}
          >
            {open ? "Show Less" : "Read More"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div
              className="border-t px-6 py-5"
              style={{ backgroundColor: a.soft, borderColor: "rgba(0,0,0,0.05)" }}
            >
              <div className="space-y-3 text-sm leading-relaxed text-gray-700">
                {member.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
