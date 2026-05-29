"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { PortfolioCard } from "@/components/ui/card";
import { galleryCategories, type GalleryCategory } from "@/content/gallery";
import { ImageLightbox } from "./image-lightbox";
import type { ServiceAccent } from "@/content/site";

const accentMap: Record<GalleryCategory["color"], ServiceAccent> = {
  cyan: "blue",
  magenta: "pink",
  yellow: "yellow",
  white: "orange",
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

interface SignageGalleryProps {
  showHeading?: boolean;
}

export function SignageGallery({ showHeading = true }: SignageGalleryProps) {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    title: string;
  }>({ isOpen: false, images: [], currentIndex: 0, title: "" });

  const openLightbox = (images: string[], title: string) =>
    setLightbox({ isOpen: true, images, currentIndex: 0, title });
  const closeLightbox = () =>
    setLightbox({ isOpen: false, images: [], currentIndex: 0, title: "" });

  return (
    <>
      <section id="gallery" className="mt-16">
        <Container className="space-y-20 py-12">
          {showHeading && (
            <motion.div {...fadeUp} viewport={{ once: true, amount: 0.3 }}>
              <div className="rounded-3xl bg-black p-10 text-center sm:p-12">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#D50367]" />
                  <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#D50367]">
                    Our Portfolio
                  </p>
                  <span className="h-px w-8 bg-[#D50367]" />
                </div>
                <h2
                  className="text-4xl font-black text-white sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Showcasing excellence across every signage category.
                </h2>
              </div>
            </motion.div>
          )}

          {galleryCategories.map((category, ci) => {
            const accent = accentMap[category.color];
            return (
              <motion.div
                key={category.title}
                className="space-y-8"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: ci * 0.05 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4">
                  <span className="h-px flex-1 bg-gray-200" />
                  <h3
                    className="rounded-full border-2 border-gray-200 bg-white px-5 py-2 text-base font-black text-black"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.title}
                  </h3>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Equal-size PortfolioCards — 3 cols, always same aspect */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, ii) => (
                    <PortfolioCard
                      key={item.title}
                      title={item.title}
                      image={item.images[0]}
                      category={
                        item.images.length > 1
                          ? `${item.images.length} photos`
                          : undefined
                      }
                      accent={accent}
                      onClick={() => openLightbox(item.images, item.title)}
                      delay={ii * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </Container>
      </section>

      <ImageLightbox
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        title={lightbox.title}
      />
    </>
  );
}
