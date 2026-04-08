"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const cardAccents = [
  { topBorder: "border-t-4 border-t-[#db016e]", badgeBg: "bg-[#db016e] text-white", highlightColor: "text-[#db016e]" },
  { topBorder: "border-t-4 border-t-[#038CE3]", badgeBg: "bg-[#038CE3] text-white", highlightColor: "text-[#038CE3]" },
  { topBorder: "border-t-4 border-t-[#ffe724]", badgeBg: "bg-[#ffe724] text-black", highlightColor: "text-[#7a6400]" },
  { topBorder: "border-t-4 border-t-black", badgeBg: "bg-black text-white", highlightColor: "text-black" },
  { topBorder: "border-t-4 border-t-[#db016e]", badgeBg: "bg-[#db016e] text-white", highlightColor: "text-[#db016e]" },
];

const projects = [
  {
    id: 1,
    title: "Al Jaber Optical Fleet Wrap",
    client: "Al Jaber Optical",
    category: "Vehicle Branding",
    description: "Full 3M cast vinyl wrap for a 12-vehicle fleet. Included design, production and installation across Dubai and Abu Dhabi.",
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
    description: "Halo-lit aluminium letters for a flagship retail unit inside Dubai Mall. Full-night visibility with bespoke chrome finish.",
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
    description: "Full wayfinding system for a 14-floor corporate tower. 120+ individual signs including floor directories, door signs and emergency egress.",
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
    description: "600+ sq ft of printed fabric and PVC for a major tech exhibitor at GITEX. Tensioned fabric walls, roller banners and hanging displays.",
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
    description: "4×2m P4 indoor video wall for a luxury fashion boutique. Includes content management system and brand day-parting schedule.",
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
    description: "Twin 6m pylon signs with LED-illuminated panel faces for a residential compound in Dubai Hills. Permit-managed end-to-end.",
    stats: [
      { label: "Height", value: "6 m each" },
      { label: "Pylons", value: "2" },
      { label: "Illumination", value: "Frontlit LED" },
    ],
    image: "/images/PYLON & TOTEM SIGNS 03.jpeg",
    emoji: "🏗️",
    highlight: "6m pylons, permit managed",
  },
];

const categories = [
  "All",
  "Vehicle Branding",
  "Outdoor Signage",
  "Indoor Signage",
  "Banner Printing",
  "LED Screens",
];

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter */}
      <section className="border-y border-gray-100 bg-[#f9f9f9] py-5">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 px-4">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-black"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => {
                const a = cardAccents[project.id % cardAccents.length];
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className={`hover-card flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white ${a.topBorder}`}
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden bg-gray-50">
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                          <span className="text-6xl">{project.emoji}</span>
                        </div>
                      )}
                      <span
                        className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${a.badgeBg}`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-1 text-base font-black text-black">{project.title}</h3>
                      <p className="mb-3 text-xs font-medium text-gray-400">{project.client}</p>
                      <p className="mb-4 flex-1 text-sm text-gray-500">{project.description}</p>

                      <div className={`mb-4 flex items-center gap-1.5 text-xs font-bold ${a.highlightColor}`}>
                        <Check className="h-3.5 w-3.5" />
                        {project.highlight}
                      </div>

                      <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-sm font-black text-black">{stat.value}</div>
                            <div className="text-[10px] uppercase tracking-wider text-gray-400">
                              {stat.label}
                            </div>
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
            <div className="py-20 text-center font-bold uppercase tracking-widest text-gray-300">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
