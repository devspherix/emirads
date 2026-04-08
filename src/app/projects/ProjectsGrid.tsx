"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const accentColors = [
  { border: "border-[#FF3AF2]", shadow: "shadow-[4px_4px_0px_#FFE600]", text: "text-[#FF3AF2]", bg: "bg-[#FF3AF2]/10", badge: "bg-[#FF3AF2] text-black", hex: "#FF3AF2", hexShadow: "#FFE600" },
  { border: "border-[#00F5D4]", shadow: "shadow-[4px_4px_0px_#7B2FFF]", text: "text-[#00F5D4]", bg: "bg-[#00F5D4]/10", badge: "bg-[#00F5D4] text-black", hex: "#00F5D4", hexShadow: "#7B2FFF" },
  { border: "border-[#FFE600]", shadow: "shadow-[4px_4px_0px_#FF6B35]", text: "text-[#FFE600]", bg: "bg-[#FFE600]/10", badge: "bg-[#FFE600] text-black", hex: "#FFE600", hexShadow: "#FF6B35" },
  { border: "border-[#FF6B35]", shadow: "shadow-[4px_4px_0px_#FF3AF2]", text: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10", badge: "bg-[#FF6B35] text-black", hex: "#FF6B35", hexShadow: "#FF3AF2" },
  { border: "border-[#7B2FFF]", shadow: "shadow-[4px_4px_0px_#00F5D4]", text: "text-[#7B2FFF]", bg: "bg-[#7B2FFF]/10", badge: "bg-[#7B2FFF] text-white", hex: "#7B2FFF", hexShadow: "#00F5D4" },
];

const projects = [
  {
    id: 1,
    title: "Al Jaber Optical Fleet Wrap",
    client: "Al Jaber Optical",
    category: "Vehicle Branding",
    description:
      "Full 3M cast vinyl wrap for a 12-vehicle fleet. Included design, production and installation across Dubai and Abu Dhabi.",
    stats: [
      { label: "Vehicles", value: "12" },
      { label: "Turnaround", value: "5 days" },
      { label: "Vinyl used", value: "480 sq ft" },
    ],
    image: null,
    emoji: "🚗",
    highlight: "Fleet of 12 wrapped in 5 days",
  },
  {
    id: 2,
    title: "Dubai Mall Retail Fascia",
    client: "Confidential — Retail",
    category: "Outdoor Signage",
    description:
      "Halo-lit aluminium letters for a flagship retail unit inside Dubai Mall. Full-night visibility with bespoke chrome finish.",
    stats: [
      { label: "Letter height", value: "600mm" },
      { label: "Finish", value: "Chrome halo" },
      { label: "Install", value: "Overnight" },
    ],
    image: "/images/FRONTLIT 3D LETTERS 02.avif",
    emoji: "✨",
    highlight: "Zero downtime overnight install",
  },
  {
    id: 3,
    title: "Corporate Office Wayfinding",
    client: "Emirates NBD — HQ",
    category: "Indoor Signage",
    description:
      "Full wayfinding system for a 14-floor corporate tower. 120+ individual signs including floor directories, door signs and emergency egress.",
    stats: [
      { label: "Signs installed", value: "120+" },
      { label: "Floors covered", value: "14" },
      { label: "Duration", value: "3 weeks" },
    ],
    image: "/images/ACRYLIC LETTERING 02.avif",
    emoji: "🏢",
    highlight: "120 signs across 14 floors",
  },
  {
    id: 4,
    title: "Trade Show Exhibition Banners",
    client: "GITEX 2024",
    category: "Banner Printing",
    description:
      "600+ sq ft of printed fabric and PVC for a major tech exhibitor at GITEX. Tensioned fabric walls, roller banners and hanging displays.",
    stats: [
      { label: "Print area", value: "600 sq ft" },
      { label: "Pieces", value: "28" },
      { label: "Delivery", value: "48 hrs" },
    ],
    image: "/images/MENU BOARDS 01.avif",
    emoji: "🖨️",
    highlight: "600 sq ft printed in 48 hours",
  },
  {
    id: 5,
    title: "Retail Video Wall — Mall of Emirates",
    client: "Confidential — Fashion",
    category: "LED Screens",
    description:
      "4×2m P4 indoor video wall for a luxury fashion boutique. Includes content management system and brand day-parting schedule.",
    stats: [
      { label: "Screen area", value: "8 sq m" },
      { label: "Pixel pitch", value: "P4 Indoor" },
      { label: "CMS", value: "Cloud-based" },
    ],
    image: null,
    emoji: "📺",
    highlight: "8 sq m P4 video wall",
  },
  {
    id: 6,
    title: "Compound Entrance Pylon Sign",
    client: "Emaar Properties",
    category: "Outdoor Signage",
    description:
      "Twin 6m pylon signs with LED-illuminated panel faces for a residential compound in Dubai Hills. Permit-managed end-to-end.",
    stats: [
      { label: "Height", value: "6 m each" },
      { label: "Pylons", value: "2" },
      { label: "Illumination", value: "Frontlit LED" },
    ],
    image: "/images/PYLON & TOTEM SIGNS 02.avif",
    emoji: "🏗️",
    highlight: "6m pylons, permit managed",
  },
];

const categories = ["All", "Vehicle Branding", "Outdoor Signage", "Indoor Signage", "Banner Printing", "LED Screens"];

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter */}
      <section className="py-6 px-4 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat, i) => {
            const a = accentColors[i % 5];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border-2 transition-all duration-200 ${
                  isActive
                    ? `${a.border} ${a.text} bg-white/5`
                    : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
                }`}
                style={isActive ? { boxShadow: `3px 3px 0 ${a.hexShadow}` } : {}}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => {
                const a = accentColors[project.id % 5];
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className={`group rounded-2xl border-2 ${a.border} ${a.shadow} bg-white/5 overflow-hidden flex flex-col transition-all duration-200 hover:bg-white/8`}
                  >
                    {/* Image / placeholder */}
                    <div className={`relative h-48 overflow-hidden border-b-2 ${a.border}`}>
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* overlay so badge is readable */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </>
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${a.hex}20, #2D1B4E)` }}
                        >
                          <span className="text-7xl">{project.emoji}</span>
                        </div>
                      )}
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10 ${a.badge}`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className={`font-black text-base mb-1 ${a.text}`}>{project.title}</h3>
                      <p className="text-white/40 text-xs font-medium mb-3">{project.client}</p>
                      <p className="text-white/60 text-sm mb-4 flex-1">{project.description}</p>

                      <div className={`inline-block text-xs font-black px-3 py-1 rounded-full ${a.bg} ${a.text} border ${a.border} mb-4`}>
                        ✓ {project.highlight}
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className={`font-black text-sm ${a.text}`}>{stat.value}</div>
                            <div className="text-white/30 text-[10px] uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/30 font-bold uppercase tracking-widest">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
