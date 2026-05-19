"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioCard } from "@/components/ui/card";
import type { ServiceAccent } from "@/content/site";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  accent: ServiceAccent;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Al Jaber Optical Fleet Wrap",
    category: "Vehicle Branding",
    description:
      "Full 3M cast vinyl wrap for a 12-vehicle fleet. Design, production and install across Dubai & Abu Dhabi.",
    image: "/images/3D-Signage-25.jpg",
    accent: "orange",
  },
  {
    id: 2,
    title: "Dubai Mall Retail Fascia",
    category: "Outdoor Signage",
    description:
      "Halo-lit aluminium letters for a flagship retail unit — bespoke chrome finish, overnight install.",
    image: "/images/FRONTLIT 3D LETTERS 02.avif",
    accent: "pink",
  },
  {
    id: 3,
    title: "Corporate Office Wayfinding",
    category: "Indoor Signage",
    description:
      "120+ wayfinding signs across a 14-floor HQ — floor directories, door signs and emergency egress.",
    image: "/images/ACRYLIC LETTERING 02.avif",
    accent: "blue",
  },
  {
    id: 4,
    title: "GITEX 2024 Exhibition Banners",
    category: "Banner Printing",
    description:
      "600+ sq ft of fabric and PVC for a major tech exhibitor — tensioned walls, rollers and hanging displays.",
    image: "/images/MENU BOARDS 01.avif",
    accent: "yellow",
  },
  {
    id: 5,
    title: "Retail Video Wall — Mall of Emirates",
    category: "LED Screens",
    description:
      "4×2m P4 indoor video wall for a luxury fashion boutique — full CMS and day-parting schedule.",
    image: "/images/BACKLIT 3D LETTERS 02.webp",
    accent: "orange",
  },
  {
    id: 6,
    title: "Compound Entrance Pylon Signs",
    category: "Outdoor Signage",
    description:
      "Twin 6m pylon signs with LED-illuminated faces for a residential compound — permit managed end-to-end.",
    image: "/images/PYLON AND TOTEM SIGNS 03.jpeg",
    accent: "pink",
  },
  {
    id: 7,
    title: "Hospitality Reception Logo",
    category: "Indoor Signage",
    description:
      "Brushed-metal 3D logo with halo lighting for a 5-star hotel reception wall.",
    image: "/images/Reception Logo 01.webp",
    accent: "blue",
  },
  {
    id: 8,
    title: "Construction Site Hoarding",
    category: "Outdoor Signage",
    description:
      "Large-format printed hoarding for a major Dubai development — installed in a single overnight shift.",
    image: "/images/HOARDINGS 01.jpg",
    accent: "orange",
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
                    ? "border-[#FF6A1A] bg-[#FF6A1A] text-white shadow-[0_8px_20px_-10px_rgba(255,106,26,0.7)]"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#FF6A1A] hover:text-[#FF6A1A]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects grid - all cards equal aspect */}
      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => (
                <PortfolioCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                  accent={project.accent}
                  delay={i * 0.05}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
