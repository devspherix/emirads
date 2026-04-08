import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, Users, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About Emirads | Dubai Signage & Vehicle Branding",
  description:
    "12 years of signage excellence in Dubai. 3M-certified installers, in-house design and fabrication. Trusted by 500+ UAE businesses.",
};

const accentColors = [
  { border: "border-[#FF3AF2]", shadow: "shadow-[4px_4px_0px_#FFE600]", text: "text-[#FF3AF2]", bg: "bg-[#FF3AF2]/10" },
  { border: "border-[#00F5D4]", shadow: "shadow-[4px_4px_0px_#7B2FFF]", text: "text-[#00F5D4]", bg: "bg-[#00F5D4]/10" },
  { border: "border-[#FFE600]", shadow: "shadow-[4px_4px_0px_#FF6B35]", text: "text-[#FFE600]", bg: "bg-[#FFE600]/10" },
  { border: "border-[#FF6B35]", shadow: "shadow-[4px_4px_0px_#FF3AF2]", text: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
  { border: "border-[#7B2FFF]", shadow: "shadow-[4px_4px_0px_#00F5D4]", text: "text-[#7B2FFF]", bg: "bg-[#7B2FFF]/10" },
];

const stats = [
  { value: "12+", label: "Years in business", accent: 0 },
  { value: "500+", label: "Projects completed", accent: 1 },
  { value: "180+", label: "Vehicle wraps", accent: 2 },
  { value: "250K+", label: "Sq ft installed", accent: 3 },
  { value: "50+", label: "Active clients", accent: 4 },
  { value: "2 hrs", label: "Quote response SLA", accent: 0 },
];

const certifications = [
  {
    icon: <Award size={24} />,
    title: "3M Certified Installer",
    body: "Authorised by 3M to install and warranty their premium vinyl and film products.",
    accent: 0,
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Dubai Economy Licensed",
    body: "Fully licensed trade licence (TL) and signage installation permit holder.",
    accent: 1,
  },
  {
    icon: <Users size={24} />,
    title: "RTA Compliant",
    body: "All vehicle wraps comply with RTA regulations for commercial fleet branding.",
    accent: 2,
  },
  {
    icon: <MapPin size={24} />,
    title: "Municipality Approved",
    body: "Registered applicant for outdoor signage NOC permits across Dubai and Sharjah.",
    accent: 3,
  },
];

const services = [
  { emoji: "🚗", name: "Vehicle Branding", href: "/services/vehicle-branding" },
  { emoji: "🖨️", name: "Banner Printing", href: "/services/banner-printing" },
  { emoji: "📺", name: "LED Screens", href: "/services/led-screens" },
  { emoji: "✨", name: "Indoor Signage", href: "/services/indoor-signage" },
  { emoji: "🏗️", name: "Outdoor Signage", href: "/services/outdoor-signage" },
];

const processSteps = [
  {
    n: "01",
    title: "Consult & Survey",
    body: "We listen to your brief, visit the site and take measurements. No guesswork.",
  },
  {
    n: "02",
    title: "Design & Approval",
    body: "Our in-house designers create visuals for your review. Unlimited revisions until you're happy.",
  },
  {
    n: "03",
    title: "Fabricate",
    body: "Everything is built in our Dubai workshop. We don't outsource critical fabrication.",
  },
  {
    n: "04",
    title: "Install & Hand Over",
    body: "Professional installation followed by a full walkthrough and warranty certificate.",
  },
];

const team = [
  { emoji: "👨‍💼", name: "Operations Director", note: "15 years signage industry" },
  { emoji: "🎨", name: "Lead Designer", note: "Expert in brand identity & large format" },
  { emoji: "🔧", name: "Head of Installation", note: "3M-certified, 10 years on-site" },
  { emoji: "📋", name: "Project Manager", note: "Manages end-to-end client delivery" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <div className="absolute top-20 right-0 w-[600px] h-[400px] bg-[#FF3AF2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#7B2FFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#FFE600] bg-[#FFE600]/10 border border-[#FFE600]/30 px-4 py-1 rounded-full mb-6">
                About Emirads
              </div>
              <h1
                className="text-5xl md:text-6xl font-black text-white leading-none mb-6"
                style={{ textShadow: "4px 4px 0px #7B2FFF, 8px 8px 0px #FF3AF2" }}
              >
                Dubai's Most
                <br />
                <span className="text-[#FFE600]">Trusted</span>
                <br />
                Sign Makers.
              </h1>
              <p className="text-white/60 text-lg font-medium leading-relaxed mb-8">
                Emirads has been fabricating and installing signage in the UAE since 2012.
                We started as a small vehicle wrap studio and grew into a full-service
                signage company trusted by some of the region's biggest brands.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFE600] text-black font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_#FF3AF2] hover:shadow-[2px_2px_0px_#FF3AF2] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm"
                >
                  ⚡ Get a Quote
                </Link>
                <a
                  href="https://wa.me/971552682030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl text-sm shadow-[4px_4px_0px_#128C7E] hover:shadow-[2px_2px_0px_#128C7E] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((s) => {
                const a = accentColors[s.accent];
                return (
                  <div key={s.label} className={`rounded-2xl border-2 ${a.border} ${a.shadow} ${a.bg} p-4 text-center`}>
                    <div className={`text-3xl font-black ${a.text} mb-1`}>{s.value}</div>
                    <div className="text-white/50 text-xs font-medium uppercase tracking-wider">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">
              Our mission
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Every sign, wrap and LED screen we make is a piece of someone's brand living in
              the real world. We take that seriously. Our job isn't just to print and install —
              it's to make your brand visible, credible and impossible to ignore.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">
            Certifications & compliance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => {
              const a = accentColors[cert.accent];
              return (
                <div key={cert.title} className={`rounded-2xl p-6 border-2 ${a.border} ${a.shadow} bg-white/5 flex gap-4 items-start`}>
                  <div className={`${a.text} flex-shrink-0 mt-0.5`}>{cert.icon}</div>
                  <div>
                    <h3 className={`font-black mb-1 ${a.text}`}>{cert.title}</h3>
                    <p className="text-white/50 text-sm">{cert.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services we offer */}
      <section className="py-16 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">
            What we do
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {services.map((s, i) => {
              const a = accentColors[i % 5];
              return (
                <Link
                  key={s.name}
                  href={s.href}
                  className={`group rounded-2xl p-4 border-2 ${a.border} ${a.bg} text-center transition-all hover:${a.shadow}`}
                >
                  <div className="text-4xl mb-2">{s.emoji}</div>
                  <p className={`text-xs font-black uppercase tracking-wider ${a.text}`}>{s.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-10 uppercase tracking-wider">
            How we work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => {
              const a = accentColors[i % 5];
              return (
                <div key={step.n} className={`relative rounded-2xl p-6 border-2 ${a.border} ${a.shadow} bg-white/5`}>
                  <div className={`text-5xl font-black ${a.text} opacity-20 absolute top-4 right-4`}>{step.n}</div>
                  <div className={`text-xs font-black uppercase tracking-widest ${a.text} mb-2`}>{step.n}</div>
                  <h3 className="font-black text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">The team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member, i) => {
              const a = accentColors[i % 5];
              return (
                <div key={member.name} className={`rounded-2xl border-2 ${a.border} ${a.bg} p-6 text-center`}>
                  <div className="text-5xl mb-3">{member.emoji}</div>
                  <h3 className={`font-black text-sm ${a.text} mb-1`}>{member.name}</h3>
                  <p className="text-white/40 text-xs">{member.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wider">Find us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Phone size={20} />,
                label: "Phone",
                value: "+971 55 268 2030",
                href: "tel:+971552682030",
                accent: 0,
              },
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "info@emirads.ae",
                href: "mailto:info@emirads.ae",
                accent: 1,
              },
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: "Al Quoz Industrial Area 4, Dubai, UAE",
                href: "https://maps.google.com",
                accent: 2,
              },
            ].map((item) => {
              const a = accentColors[item.accent];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  className={`group rounded-2xl p-6 border-2 ${a.border} ${a.shadow} bg-white/5 hover:bg-white/10 transition-all`}
                >
                  <div className={`${a.text} mb-3`}>{item.icon}</div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</div>
                  <div className={`font-bold text-sm ${a.text}`}>{item.value}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF3AF2]/10 via-[#7B2FFF]/10 to-[#00F5D4]/10 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ textShadow: "3px 3px 0px #7B2FFF" }}
          >
            Let's build something great together.
          </h2>
          <p className="text-white/50 mb-8">Get an instant estimate or speak directly with our team.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFE600] text-black font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_#FF3AF2] hover:shadow-[2px_2px_0px_#FF3AF2] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              ⚡ Get Instant Price
            </Link>
            <a
              href="https://wa.me/971552682030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl shadow-[4px_4px_0px_#128C7E] hover:shadow-[2px_2px_0px_#128C7E] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
