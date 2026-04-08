import { Metadata } from "next";
import Link from "next/link";
import QuoteBuilder from "@/components/quote/QuoteBuilder";
import { getPricingById } from "@/lib/pricing";
import {
  Car,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vehicle Branding | Emirads — Dubai Signage",
  description:
    "Professional vehicle wraps and fleet branding in Dubai. 3M-certified installers. Full, partial and plotter wraps for cars, vans, trucks and buses.",
};

const service = getPricingById("vehicle-branding")!;

const features = [
  {
    icon: <Shield size={20} />,
    title: "3M Certified",
    body: "Desert-grade films engineered to resist UV, heat and sand abrasion.",
  },
  {
    icon: <Zap size={20} />,
    title: "Fast Turnaround",
    body: "Standard car wraps completed in 1–2 days. Fleet jobs quoted with firm schedules.",
  },
  {
    icon: <Palette size={20} />,
    title: "In-house Design",
    body: "Our design team handles artwork at no extra charge for full wraps.",
  },
  {
    icon: <Car size={20} />,
    title: "All Vehicle Types",
    body: "Cars, SUVs, vans, trucks, buses, trailers and heavy machinery.",
  },
];

const included = [
  "Full vehicle surface preparation & cleaning",
  "3M / Avery premium cast or calendered vinyl",
  "Expert panel-by-panel installation",
  "Post-installation heat treatment",
  "Warranty certificate on wrap",
];

const cardAccents = [
  "border-t-[#db016e]",
  "border-t-[#038CE3]",
  "border-t-[#ffe724]",
  "border-t-black",
];

export default function VehicleBrandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black px-4 pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white"
          >
            ← All Services
          </Link>
          <div className="mb-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-7xl">
              {service.emoji}
            </div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-[#db016e]/40 bg-[#db016e]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#db016e]">
                Emirads Service
              </span>
              <h1 className="mb-3 text-4xl font-black leading-none text-white md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                {service.name}
              </h1>
              <p className="max-w-xl text-xl font-medium text-white/60">{service.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["3M Certified", "UAE-wide Installation", "In-house Design", "All Vehicle Types"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-100 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-black uppercase tracking-wider text-black" style={{ fontFamily: "var(--font-display)" }}>Why choose us</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.title} className={`rounded-2xl border border-gray-100 border-t-4 bg-white p-5 shadow-sm ${cardAccents[i % 4]}`}>
                <div className="mb-3 text-[#db016e]">{f.icon}</div>
                <h3 className="mb-1 text-sm font-black text-black">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#f9f9f9] px-4 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-wider text-black" style={{ fontFamily: "var(--font-display)" }}>What’s included</h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-[#038CE3]" />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-t-4 border-t-[#db016e] border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-black uppercase tracking-wider text-[#db016e]">Fleet Discounts</h3>
            <div className="space-y-2">
              {[
                { qty: "2–4 vehicles", discount: "5% off" },
                { qty: "5–9 vehicles", discount: "10% off" },
                { qty: "10+ vehicles", discount: "15% off" },
              ].map((row) => (
                <div key={row.qty} className="flex items-center justify-between border-b border-gray-100 py-2 text-sm">
                  <span className="font-medium text-gray-600">{row.qty}</span>
                  <span className="font-black text-[#db016e]">{row.discount}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-400">Discounts applied at quote stage. Contact us for custom fleet pricing.</p>
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="px-4 py-20" id="quote">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full border border-[#db016e]/20 bg-[#db016e]/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#db016e]">
              Instant Pricing
            </span>
            <h2 className="text-4xl font-black leading-none text-black md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              Get Your Price Now
            </h2>
          </div>
          <QuoteBuilder preselectedServiceId="vehicle-branding" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">Need a custom fleet solution?</h2>
          <p className="mb-8 text-white/50">Talk to our team directly for bulk orders, on-site surveys and custom timelines.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://wa.me/971585806956" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105">
              💬 WhatsApp Us
            </a>
            <a href="tel:+971585806956"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white/50">
              <ArrowRight size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
