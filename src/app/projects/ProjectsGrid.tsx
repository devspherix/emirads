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
    title: "Full Fleet Vehicle Wrap",
    category: "Vehicle Branding",
    description:
      "Full cast-vinyl fleet wrap — design, production and installation handled in-house, start to finish.",
    image: "/images/3D-Signage-25.jpg",
    accent: "orange",
  },
  {
    id: 2,
    title: "Illuminated Retail Fascia",
    category: "Outdoor Signage",
    description:
      "Halo-lit frontlit letters for a retail shopfront — bespoke finish, overnight installation.",
    image: "/images/FRONTLIT 3D LETTERS 02.avif",
    accent: "pink",
  },
  {
    id: 3,
    title: "Corporate Office Wayfinding",
    category: "Indoor Signage",
    description:
      "Wayfinding signage across a multi-floor office — floor directories, door signs and emergency egress.",
    image: "/images/ACRYLIC LETTERING 02.avif",
    accent: "blue",
  },
  {
    id: 4,
    title: "Exhibition Banner Display",
    category: "Banner Printing",
    description:
      "Fabric and PVC exhibition banners for a trade-show stand — tensioned walls, rollers and hanging displays.",
    image: "/images/MENU BOARDS 01.avif",
    accent: "yellow",
  },
  {
    id: 5,
    title: "Indoor LED Video Wall",
    category: "LED Screens",
    description:
      "Indoor LED video wall for a retail boutique — full content management system integration.",
    image: "/images/BACKLIT 3D LETTERS 02.webp",
    accent: "orange",
  },
  {
    id: 6,
    title: "Compound Entrance Pylon Signs",
    category: "Outdoor Signage",
    description:
      "Twin pylon signs with LED-illuminated faces for a residential compound entrance.",
    image: "/images/PYLON AND TOTEM SIGNS 03.jpeg",
    accent: "pink",
  },
  {
    id: 7,
    title: "Hospitality Reception Logo",
    category: "Indoor Signage",
    description:
      "Brushed-metal 3D logo with halo lighting for a hotel reception wall.",
    image: "/images/Reception Logo 01.webp",
    accent: "blue",
  },
  {
    id: 8,
    title: "Construction Site Hoarding",
    category: "Outdoor Signage",
    description:
      "Large-format printed hoarding for a Dubai development — installed in a single overnight shift.",
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
                    ? "border-[#D50367] bg-[#D50367] text-white shadow-[0_8px_20px_-10px_rgba(213,3,103,0.7)]"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#D50367] hover:text-[#D50367]"
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
