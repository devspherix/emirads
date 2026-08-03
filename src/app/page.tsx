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
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ServiceCard, FeatureCard, PortfolioCard } from "@/components/ui/card";
import {
  aboutIntro,
  accentMap,
  certifications,
  contactMethods,
  featuredProjects,
  processSteps,
  qualityPrinciples,
  servicesCatalog,
  trustBar,
  whyChooseUs,
  SITE,
} from "@/content/site";
import { clients } from "@/content/clients";
import { blogPosts } from "@/content/blog";
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
      <StatsTicker />
      <TrustBar />
      <TrustedByClients />
      <ServicesOverview />
      <FeaturedServices />
      <AboutSnippet />
      <ProcessSection />
      <PortfolioTeaser />
      <WhereWeWork />
      <WhyChooseUs />
      <CertificationsSection />
      <BlogPreview />
      <FinalCta />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────
//  FEATURED SERVICES — flagship services, large visuals
// ─────────────────────────────────────────────────────────────
const featuredServices = [
  {
    title: "Neon 3D Signage",
    category: "Custom Signage",
    description:
      "Traditional glass neon and modern LED neon (neon flex) — a standout, highly visible signage solution for retail, restaurants, cafés and events.",
    image: "/images/services/custom-signage/neon-3d-signage/img1.jpeg",
    href: "/services/custom-signage/neon-3d-signage",
    accent: "blue" as const,
  },
  {
    title: "Full Vehicle Branding",
    category: "Vehicle Branding",
    description:
      "Cover the entire exterior of a vehicle with printed vinyl graphics — one of the most impactful mobile advertising solutions available.",
    image: "/images/services/vehicle-branding/full-vehicle-branding/img1.jpeg",
    href: "/services/vehicle-branding/full-vehicle-branding",
    accent: "orange" as const,
  },
  {
    title: "Custom Exhibition Stands",
    category: "Exhibition & Stands",
    description:
      "Bespoke stands and modular booths for exhibitions, corporate events and product launches — designed, built and installed in-house.",
    image: "/images/services/exhibition-and-stands/custom-exhibition-stands/img1.jpeg",
    href: "/services/exhibition-and-stands/custom-exhibition-stands",
    accent: "pink" as const,
  },
  {
    title: "Backlit Exhibition Backdrops",
    category: "Backdrop & Display",
    description:
      "Illuminated fabric backdrops for exhibition stands and event spaces — even, edge-to-edge glow with vivid, durable print quality.",
    image: "/images/services/backdrop-and-display/backlit-exhibition-backdrops/img1.jpeg",
    href: "/services/backdrop-and-display/backlit-exhibition-backdrops",
    accent: "yellow" as const,
  },
  {
    title: "Backlit Banner Printing",
    category: "Banner Printing",
    description:
      "Translucent, illuminated banners for lightboxes and backlit displays — sharp, saturated colour whether lit from behind or not.",
    image: "/images/services/banners-printing/backlit-banner-printing/img1.jpeg",
    href: "/services/banners-printing/backlit-banner-printing",
    accent: "pink" as const,
  },
  {
    title: "Blade Flags",
    category: "Custom Flags",
    description:
      "Sleek, single-mast blade flags in vivid full-colour print — durable outdoor fabric built to move with the wind and catch the eye.",
    image: "/images/services/custom-flags/blade-flags/img1.jpeg",
    href: "/services/custom-flags/blade-flags",
    accent: "orange" as const,
  },
];

function FeaturedServices() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <Container>
        <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
            Featured Services
          </p>
          <h2
            className="text-3xl font-black leading-tight text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A closer look at what we do best.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredServices.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-gray-100 card-shadow card-shadow-hover"
              >
                <Link href={s.href} className="block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span
                        className="mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                        style={{ backgroundColor: a.hex }}
                      >
                        {s.category}
                      </span>
                      <h3
                        className="mb-2 text-xl font-black text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-white/75">
                        {s.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:gap-2.5">
                        Explore Service <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  WHERE WE WORK — Dubai / UAE-wide coverage
// ─────────────────────────────────────────────────────────────
function WhereWeWork() {
  return (
    <section className="bg-black py-20 text-white lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp} className="relative order-2 lg:order-1">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              Where We Work
            </p>
            <h2
              className="mb-5 text-3xl font-black leading-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Based in Dubai. Installing across the UAE.
            </h2>
            <p className="mb-6 max-w-lg text-base leading-relaxed text-white/70">
              Our design, production and fabrication all happen in-house at
              our Al Quoz workshop — so every wrap, sign and stand we install
              across the UAE starts and ends with the same team.
            </p>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D50367]" />
              <div>
                <p className="text-sm font-bold text-white">{SITE.address}</p>
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-white/50 hover:text-white"
                >
                  View on map
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="relative order-1 aspect-[4/3] overflow-hidden rounded-3xl lg:order-2"
          >
            <Image
              src="/images/HOARDINGS 01.jpg"
              alt="Outdoor signage installation in Dubai"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </Container>
    </section>
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
        <p className="text-xs font-bold uppercase tracking-widest text-[#D50367]">In-House</p>
        <p className="text-sm font-black text-black">Design to Install</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="absolute -right-3 -top-4 rounded-2xl border border-gray-100 bg-white px-4 py-3 card-shadow sm:-right-6"
      >
        <p className="text-lg font-black text-black" style={{ fontFamily: "var(--font-display)" }}>
          Fast <span className="text-[#D50367]">Turnaround</span>
        </p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Incl. Urgent Jobs</p>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
//  STATS TICKER — scrolling brand-strip banner
// ─────────────────────────────────────────────────────────────
const tickerItems = [
  "IN-HOUSE DESIGN, PRINT & FABRICATION",
  "DUBAI-BASED · UAE-WIDE INSTALLATION",
  "QUALITY POLICY & WRITTEN WARRANTY",
  "FAST TURNAROUND · URGENT & NIGHT JOBS",
  "TRUSTED BY LEADING UAE BUSINESSES",
];

function StatsTicker() {
  const loop = [...tickerItems, ...tickerItems];
  return (
    <section className="overflow-hidden border-y border-white/10 bg-black py-3.5">
      <div className="flex w-max animate-ticker items-center gap-6">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#D50367]" />
          </span>
        ))}
      </div>
    </section>
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
//  TRUSTED BY — real clients, sourced from the company profile
// ─────────────────────────────────────────────────────────────
function TrustedByClients() {
  const loop = [...clients, ...clients];
  return (
    <section className="overflow-hidden bg-white py-14">
      <Container>
        <motion.p
          {...fadeUp}
          className="mb-8 text-center text-xs font-bold uppercase tracking-[0.4em] text-gray-400"
        >
          Trusted By
        </motion.p>
      </Container>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <div className="flex w-max animate-ticker items-center gap-14 group-hover:[animation-play-state:paused]">
          {loop.map((client, i) => (
            <div
              key={`${client.slug}-${i}`}
              className="flex h-12 w-32 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0 sm:h-14 sm:w-40"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={200}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
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
                alt="Emirads workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#D50367] px-6 py-4 text-white card-shadow sm:-right-6">
              <p className="text-2xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                In-House
              </p>
              <p className="text-xs font-bold uppercase tracking-widest">Design to Install</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              About {SITE.name}
            </p>
            <h2
              className="mb-5 text-3xl font-black leading-tight text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Making your brand visible, credible and impossible to ignore.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-600">{aboutIntro}</p>
            <p className="mb-6 text-base leading-relaxed text-gray-600">
              From a single shopfront sign to a full fleet branding rollout, our
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
            A clear process from inquiry to hand over.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
Licensed, quality-driven and built for accountability.
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
//  BLOG PREVIEW
// ─────────────────────────────────────────────────────────────
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogPreview() {
  const latest = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-[#f9f9f9] py-20 lg:py-24">
      <Container>
        <motion.div
          {...fadeUp}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#D50367]">
              From The Blog
            </p>
            <h2
              className="text-3xl font-black leading-tight text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Guides, tips and industry insight.
            </h2>
          </div>
          <Button href="/blog" variant="outline">
            Read All Articles <ArrowUpRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white card-shadow card-shadow-hover"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#D50367] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {formatDate(post.date)}
                  </p>
                  <h3
                    className="mb-2 text-lg font-black leading-snug text-black"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D50367] transition-all group-hover:gap-2.5">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
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
