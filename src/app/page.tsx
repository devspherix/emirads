"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Award,
  ShieldCheck,
  Truck,
  Users,
  Smile,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ServiceCard, FeatureCard, PortfolioCard } from "@/components/ui/card";
import {
  certifications,
  contactMethods,
  featuredProjects,
  processSteps,
  servicesCatalog,
  trustBar,
  whyChooseUs,
  SITE,
} from "@/content/site";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const heroSlides = [
  {
    image: "/images/3D-Signage-25.jpg",
    label: "Vehicle Branding",
    tagline: "Fleet wraps that turn heads",
  },
  {
    image: "/images/FRONTLIT 3D LETTERS 02.avif",
    label: "Illuminated Signage",
    tagline: "Glow that gets you seen",
  },
  {
    image: "/images/LED NEON INDOOR SIGNS.webp",
    label: "LED Screens",
    tagline: "Dynamic displays in any space",
  },
];

const trustIcons = [Award, ShieldCheck, Truck, Users, Smile, Rocket];

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <AboutSnippet />
      <ProcessSection />
      <PortfolioTeaser />
      <WhyChooseUs />
      <CertificationsSection />
      <FinalCta />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 lg:pt-20 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(213,3,103,0.10),_transparent_70%)]" />
        <div className="absolute -bottom-20 -left-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_rgba(213,3,103,0.07),_transparent_70%)]" />
      </div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* LEFT */}
          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FCE3EE] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#A80250]">
              <Sparkles className="h-3 w-3" />
              Printing & Branding · UAE-wide
            </span>

            <h1
              className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We Print. We Brand.
              <br />
              <span className="gradient-text-orange">
                We Make You Visible.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Transform your business with high-impact printing and branding
              solutions — from vehicle wraps to signage and LED displays, we
              help your brand stand out everywhere.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/quote" variant="primary" size="lg">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

            {/* mini contact strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-gray-500">
              <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-gray-700 hover:text-[#D50367]">
                📞 {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="font-semibold text-gray-700 hover:text-[#D50367]">
                ✉ {SITE.email}
              </a>
            </div>
          </motion.div>

          {/* RIGHT — slider */}
          <HeroSlider />
        </div>
      </Container>
    </section>
  );
}

function HeroSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl card-shadow sm:aspect-[5/6]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[idx].image}
              alt={heroSlides[idx].label}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-[#D50367] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {heroSlides[idx].label}
              </span>
              <p
                className="mt-3 text-2xl font-black text-white sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {heroSlides[idx].tagline}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* dots */}
        <div className="absolute right-5 top-5 flex gap-1.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === idx ? "w-6 bg-white" : "w-2 bg-white/40",
              )}
            />
          ))}
        </div>
      </div>

      {/* floating stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -bottom-6 -left-3 rounded-2xl border border-gray-100 bg-white p-4 card-shadow sm:-left-6"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-[#D50367]">12+ Years</p>
        <p className="text-sm font-black text-black">Trusted in the UAE</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="absolute -right-3 -top-4 rounded-2xl border border-gray-100 bg-white px-4 py-3 card-shadow sm:-right-6"
      >
        <p className="text-2xl font-black text-black" style={{ fontFamily: "var(--font-display)" }}>
          95<span className="text-[#D50367]">%</span>
        </p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Satisfaction</p>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
//  TRUST BAR
// ─────────────────────────────────────────────────────────────
function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-[#f9f9f9] py-14">
      <Container>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {trustBar.map((item, i) => {
            const Icon = trustIcons[i % trustIcons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCE3EE] text-[#D50367]">
                  <Icon className="h-5 w-5" />
                </div>
                <p
                  className="text-base font-black text-black sm:text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.value}
                </p>
                <p className="text-xs font-medium text-gray-500">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.p
          {...fadeUp}
          className="mt-10 text-center text-sm italic text-gray-600 sm:text-base"
        >
          Your success is our priority — and we prove it through every project we deliver.
        </motion.p>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  SERVICES OVERVIEW
// ─────────────────────────────────────────────────────────────
function ServicesOverview() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <Container>
        <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D50367]" />
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              Our Services
            </p>
            <span className="h-px w-8 bg-[#D50367]" />
          </div>
          <h2
            className="text-3xl font-black leading-tight text-black sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything You Need to Build a
            <br />
            <span className="gradient-text-orange">Powerful Brand Presence.</span>
          </h2>
          <p className="mt-5 text-base text-gray-600 sm:text-lg">
            We offer a full range of printing and branding services designed to
            maximize your visibility and impact.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesCatalog.map((s, i) => {
            const Icon = s.icon;
            return (
              <ServiceCard
                key={s.slug}
                href={`/services/${s.slug}`}
                title={s.name}
                description={s.description}
                image={s.heroImage}
                icon={<Icon className="h-5 w-5" />}
                accent={s.accent}
                delay={i * 0.05}
              />
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline" size="lg">
            View All Services <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  ABOUT SNIPPET
// ─────────────────────────────────────────────────────────────
function AboutSnippet() {
  return (
    <section className="bg-[#f9f9f9] py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl card-shadow">
              <Image
                src="/images/BUILDING SIGNBOARDS 02.jpg"
                alt="Emir Ads workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#D50367] px-6 py-4 text-white card-shadow sm:-right-6">
              <p className="text-3xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                12+
              </p>
              <p className="text-xs font-bold uppercase tracking-widest">Years in the UAE</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              About Emir Ads
            </p>
            <h2
              className="mb-5 text-3xl font-black leading-tight text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Making your brand visible, credible and impossible to ignore.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-600">
              Emir Ads has been crafting signage, vehicle wraps and large-format
              branding in the UAE since {SITE.foundedYear}. We pair an in-house
              design team with our own fabrication workshop so every project is
              delivered fast, on-budget and to spec.
            </p>
            <p className="mb-6 text-base leading-relaxed text-gray-600">
              From a single shop sign to a full fleet branding rollout, our
              mission is simple — make your brand impossible to miss.
            </p>
            <Button href="/about" variant="primary">
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  PROCESS / HOW WE WORK
// ─────────────────────────────────────────────────────────────
function ProcessSection() {
  return (
    <section className="bg-black py-20 text-white lg:py-24">
      <Container>
        <motion.div {...fadeUp} className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
            How We Work
          </p>
          <h2
            className="text-3xl font-black sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A simple process from brief to install.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D50367] text-lg font-black text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="mb-2 font-black text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  PORTFOLIO TEASER (6 cards, equal size)
// ─────────────────────────────────────────────────────────────
function PortfolioTeaser() {
  // 6 equal-size cards = nice pair-friendly grid
  const items = [
    ...featuredProjects,
    {
      name: "Reception Brand Wall",
      scope: "Indoor Signage",
      image: "/images/Reception Logo 01.webp",
      stats: [],
    },
    {
      name: "Mall Hoarding Print",
      scope: "Banner Printing",
      image: "/images/HOARDINGS 01.jpg",
      stats: [],
    },
    {
      name: "Restaurant Menu Boards",
      scope: "Indoor Signage",
      image: "/images/MENU BOARDS 01.avif",
      stats: [],
    },
  ];
  const accents: Array<"orange" | "pink" | "blue" | "yellow"> = [
    "orange",
    "pink",
    "blue",
    "yellow",
    "orange",
    "pink",
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <motion.div
          {...fadeUp}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              Our Work
            </p>
            <h2
              className="text-3xl font-black leading-tight text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Recent projects across the UAE.
            </h2>
          </div>
          <Button href="/projects" variant="outline">
            View Full Portfolio <ArrowUpRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <PortfolioCard
              key={p.name}
              title={p.name}
              category={p.scope}
              image={p.image}
              accent={accents[i % accents.length]}
              delay={i * 0.05}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  WHY CHOOSE US
// ─────────────────────────────────────────────────────────────
function WhyChooseUs() {
  return (
    <section className="bg-[#f9f9f9] py-20 lg:py-24">
      <Container>
        <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
            Why Choose Us
          </p>
          <h2
            className="text-3xl font-black leading-tight text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We make your brand{" "}
            <span className="gradient-text-orange">work harder</span>.
          </h2>
          <p className="mt-4 text-base text-gray-600">
            ✔ High-quality printing materials ✔ Creative branding solutions ✔ Fast delivery & installation
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 card-shadow card-shadow-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FCE3EE] text-[#D50367]">
                <Check className="h-5 w-5" />
              </div>
              <p className="font-semibold text-gray-800">{point}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  CERTIFICATIONS & COMPLIANCE
// ─────────────────────────────────────────────────────────────
function CertificationsSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <motion.div {...fadeUp} className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
            Certifications & Compliance
          </p>
          <h2
            className="text-3xl font-black leading-tight text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Licensed, certified and fully insured.
          </h2>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => {
            const accents: Array<"orange" | "pink" | "blue" | "yellow"> = [
              "orange",
              "pink",
              "blue",
              "yellow",
            ];
            return (
              <FeatureCard
                key={cert.title}
                icon={ShieldCheck}
                title={cert.title}
                body={cert.body}
                accent={accents[i % 4]}
                delay={i * 0.05}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  FINAL CTA + CONTACT QUICK
// ─────────────────────────────────────────────────────────────
function FinalCta() {
  return (
    <section className="bg-[#f9f9f9] py-20 lg:py-24">
      <Container>
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-[#1a1a1a] to-black p-10 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-15" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#D50367]/20 blur-3xl" />
          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              Ready to stand out?
            </p>
            <h2
              className="mb-4 text-3xl font-black text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s make your brand{" "}
              <span className="gradient-text-orange">impossible to miss</span>.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-white/70">
              Get a free, no-obligation quote in under 60 seconds — or talk to
              our team directly on WhatsApp.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/quote" variant="primary" size="lg">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={SITE.whatsapp} variant="whatsapp" size="lg" external>
                💬 WhatsApp Us
              </Button>
            </div>

            {/* contact cards */}
            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                return (
                  <Link
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-left text-white transition-all hover:border-[#D50367] hover:bg-white/[0.08]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D50367]/20 text-[#D50367]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                        {m.label}
                      </p>
                      <p className="text-sm font-bold text-white">{m.value}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
