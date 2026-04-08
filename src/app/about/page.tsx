import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, Users, MapPin, Phone, Mail, ArrowRight, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About Emirads | Dubai Signage & Vehicle Branding",
  description:
    "12 years of signage excellence in Dubai. 3M-certified installers, in-house design and fabrication. Trusted by 500+ UAE businesses.",
};

const stats = [
  { value: "12+", label: "Years in business", color: "text-[#db016e]" },
  { value: "500+", label: "Projects completed", color: "text-[#038CE3]" },
  { value: "180+", label: "Vehicle wraps", color: "text-[#7a6400]" },
  { value: "250K+", label: "Sq ft installed", color: "text-black" },
  { value: "50+", label: "Active clients", color: "text-[#db016e]" },
  { value: "2 hrs", label: "Quote response SLA", color: "text-[#038CE3]" },
];

const certifications = [
  {
    icon: <Award size={22} className="text-[#db016e]" />,
    title: "3M Certified Installer",
    body: "Authorised by 3M to install and warranty their premium vinyl and film products.",
  },
  {
    icon: <CheckCircle size={22} className="text-[#038CE3]" />,
    title: "Dubai Economy Licensed",
    body: "Fully licensed trade licence (TL) and signage installation permit holder.",
  },
  {
    icon: <Users size={22} className="text-[#7a6400]" />,
    title: "RTA Compliant",
    body: "All vehicle wraps comply with RTA regulations for commercial fleet branding.",
  },
  {
    icon: <MapPin size={22} className="text-black" />,
    title: "Municipality Approved",
    body: "Registered applicant for outdoor signage NOC permits across Dubai and Sharjah.",
  },
];

const processSteps = [
  { n: "01", title: "Consult & Survey", body: "We listen to your brief, visit the site and take measurements. No guesswork." },
  { n: "02", title: "Design & Approval", body: "Our in-house designers create visuals for your review. Unlimited revisions until you're happy." },
  { n: "03", title: "Fabricate", body: "Everything is built in our Dubai workshop. We don't outsource critical fabrication." },
  { n: "04", title: "Install & Hand Over", body: "Professional installation followed by a full walkthrough and warranty certificate." },
];

const team = [
  { emoji: "👨‍💼", name: "Operations Director", note: "15 years signage industry" },
  { emoji: "🎨", name: "Lead Designer", note: "Expert in brand identity & large format" },
  { emoji: "🔧", name: "Head of Installation", note: "3M-certified, 10 years on-site" },
  { emoji: "📋", name: "Project Manager", note: "Manages end-to-end client delivery" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(219,1,110,0.07),_transparent_70%)]" />
          <div className="absolute -bottom-20 -left-32 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(3,140,227,0.07),_transparent_70%)]" />
        </div>
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ffe724] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                About Emirads
              </span>
              <h1
                className="mb-6 text-5xl font-black leading-none text-black md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Dubai&apos;s Most
                <span className="gradient-text-brand block">Trusted</span>
                Sign Makers.
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-500">
                Emirads has been fabricating and installing signage in the UAE since 2012.
                We started as a small vehicle wrap studio and grew into a full-service
                signage company trusted by some of the region&apos;s biggest brands.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Get a Quote
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

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="hover-card rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
                >
                  <div className={`mb-1 text-3xl font-black ${s.color}`} style={{ fontFamily: "var(--font-display)" }}>
                    {s.value}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-[#f9f9f9] py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#db016e]" />
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#db016e]">Our mission</p>
            </div>
            <h2
              className="mb-6 text-3xl font-black text-black sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Making your brand visible, credible and impossible to ignore.
            </h2>
            <p className="text-lg leading-relaxed text-gray-500">
              Every sign, wrap and LED screen we make is a piece of someone&apos;s brand living
              in the real world. We take that seriously. Our job isn&apos;t just to print and install —
              it&apos;s to make your brand command attention.
            </p>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <Container>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-[#038CE3]" />
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#038CE3]">Certifications & compliance</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="hover-card flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mt-0.5 shrink-0">{cert.icon}</div>
                <div>
                  <h3 className="mb-1 font-black text-black">{cert.title}</h3>
                  <p className="text-sm text-gray-500">{cert.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="bg-black py-20 text-white">
        <Container>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ffe724]" />
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#ffe724]">How we work</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const numColors = ["text-[#db016e]", "text-[#038CE3]", "text-[#ffe724]", "text-white"];
              return (
                <div
                  key={step.n}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div
                    className={`mb-4 text-4xl font-black opacity-60 ${numColors[i % 4]}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60">{step.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* The team */}
      <section className="bg-white py-20">
        <Container>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-[#db016e]" />
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#db016e]">The team</p>
          </div>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="hover-card rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-3 text-5xl">{member.emoji}</div>
                <h3 className="mb-1 text-sm font-black text-black">{member.name}</h3>
                <p className="text-xs text-gray-400">{member.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact & CTA */}
      <section className="bg-[#f9f9f9] py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2
                className="mb-4 text-4xl font-black text-black sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let&apos;s build something great together.
              </h2>
              <p className="mb-8 text-lg text-gray-500">
                Get an instant estimate or speak directly with our team.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Get Instant Price
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#db016e] to-[#C00062] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-all hover:border-black"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Phone size={20} />, label: "Phone", value: "+971 58 580 6956", href: "tel:+971585806956", color: "text-[#db016e]", bg: "bg-[#db016e]/10" },
                { icon: <Mail size={20} />, label: "Email", value: "info@emirads.ae", href: "mailto:info@emirads.ae", color: "text-[#038CE3]", bg: "bg-[#038CE3]/10" },
                { icon: <MapPin size={20} />, label: "Location", value: "Dubai Production City, UAE", href: "https://maps.google.com", color: "text-[#7a6400]", bg: "bg-[#ffe724]/20" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                    <p className="font-black text-black">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
