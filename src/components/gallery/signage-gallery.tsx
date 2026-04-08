"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryCategories, type GalleryCategory } from "@/content/gallery";
import { ImageLightbox } from "./image-lightbox";
import { Container } from "@/components/layout/container";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const accentMap: Record<GalleryCategory["color"], { border: string; text: string }> = {
  cyan:    { border: "#038CE3", text: "#038CE3" },
  magenta: { border: "#db016e", text: "#db016e" },
  yellow:  { border: "#7a6400", text: "#7a6400" },
  white:   { border: "#000000", text: "#000000" },
};

const cardAccents = [
  { border: "#db016e", shadow: "rgba(219,1,110,0.08)" },
  { border: "#038CE3", shadow: "rgba(3,140,227,0.08)" },
  { border: "#ffe724", shadow: "rgba(255,231,36,0.1)" },
  { border: "#000000", shadow: "rgba(0,0,0,0.06)" },
  { border: "#db016e", shadow: "rgba(219,1,110,0.08)" },
];

interface SignageGalleryProps {
  showHeading?: boolean;
}

export function SignageGallery({ showHeading = true }: SignageGalleryProps) {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  });

  const openLightbox = (images: string[], initialIndex: number, title: string) => {
    setLightboxState({ isOpen: true, images, currentIndex: initialIndex, title });
  };

  const closeLightbox = () => {
    setLightboxState({ isOpen: false, images: [], currentIndex: 0, title: "" });
  };

  return (
    <>
      <section id="gallery" className="mt-24">
        <Container className="space-y-20">
        {showHeading && (
          <motion.div {...fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <div className="rounded-3xl bg-black p-10 sm:p-12 text-center">
              <div className="pointer-events-none absolute inset-0 pattern-dots-light opacity-10" />
              <div className="relative text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#ffe724]" />
                  <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#ffe724]">Our Portfolio</p>
                  <span className="h-px w-8 bg-[#ffe724]" />
                </div>
                <h2
                  className="text-4xl font-black text-white sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Showcasing excellence across all signage categories.
                </h2>
              </div>
            </div>
          </motion.div>
        )}

        {galleryCategories.map((category, categoryIndex) => (
          <CategorySection
            key={category.title}
            category={category}
            index={categoryIndex}
            onImageClick={openLightbox}
          />
        ))}
        </Container>
      </section>

      <ImageLightbox
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        title={lightboxState.title}
      />
    </>
  );
}

function CategorySection({
  category,
  index,
  onImageClick,
}: {
  category: GalleryCategory;
  index: number;
  onImageClick: (images: string[], index: number, title: string) => void;
}) {
  const gridCols = category.gridCols === "3" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";
  const accent = accentMap[category.color];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      {/* Category header */}
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-gray-100" />
        <h3
          className="rounded-full border border-gray-200 px-5 py-2 text-lg font-black text-black"
          style={{ fontFamily: "var(--font-display)", borderLeftColor: accent.border, borderLeftWidth: 4 }}
        >
          {category.title}
        </h3>
        <span className="h-px flex-1 bg-gray-100" />
      </div>

      <div className={`grid gap-6 ${gridCols}`}>
        {category.items.map((item, itemIndex) => (
          <GalleryItemCard
            key={item.title}
            item={item}
            accentIndex={(index * 3 + itemIndex) % cardAccents.length}
            index={itemIndex}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    </motion.div>
  );
}

function GalleryItemCard({
  item,
  accentIndex,
  index,
  onImageClick,
}: {
  item: { title: string; images: string[] };
  accentIndex: number;
  index: number;
  onImageClick: (images: string[], index: number, title: string) => void;
}) {
  const accent = cardAccents[accentIndex];

  const sizes =
    "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  const handleImageClick = (imageIndex: number) => {
    onImageClick(item.images, imageIndex, item.title);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ borderTopWidth: 4, borderTopColor: accent.border }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Images */}
      <div className="space-y-2 p-4">
        {item.images.length === 1 ? (
          <button
            onClick={() => handleImageClick(0)}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl cursor-pointer"
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.images[0]}
              alt={`${item.title} - Image 1`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes={sizes}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ) : item.images.length === 2 ? (
          <div className="grid grid-cols-2 gap-2">
            {item.images.map((image, imgIndex) => (
              <button
                key={imgIndex}
                onClick={() => handleImageClick(imgIndex)}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
                aria-label={`View ${item.title} - Image ${imgIndex + 1}`}
              >
                <Image src={image} alt={`${item.title} - Image ${imgIndex + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        ) : item.images.length === 3 ? (
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => handleImageClick(0)} className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl cursor-pointer" aria-label={`View ${item.title} - Image 1`}>
              <Image src={item.images[0]} alt={`${item.title} - Image 1`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            {item.images.slice(1, 3).map((image, imgIndex) => (
              <button key={imgIndex + 1} onClick={() => handleImageClick(imgIndex + 1)} className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer" aria-label={`View ${item.title} - Image ${imgIndex + 2}`}>
                <Image src={image} alt={`${item.title} - Image ${imgIndex + 2}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {item.images.slice(0, 4).map((image, imgIndex) => (
              <button
                key={imgIndex}
                onClick={() => handleImageClick(imgIndex)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer ${imgIndex === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                aria-label={`View ${item.title} - Image ${imgIndex + 1}`}
              >
                <Image src={image} alt={`${item.title} - Image ${imgIndex + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes={imgIndex === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {imgIndex === 3 && item.images.length > 4 && (
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: "rgba(13,13,26,0.7)" }}>
                    <span className="text-2xl font-black text-white" style={{ textShadow: `2px 2px 0 ${accent.border}` }}>
                      +{item.images.length - 4}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="px-5 pb-5">
        <div className="flex items-center justify-between">
          <h4
            className="text-base font-black text-black"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item.title}
          </h4>
          {item.images.length > 1 && (
            <span
              className="rounded-full border px-2.5 py-0.5 text-xs font-bold"
              style={{ borderColor: accent.border, color: accent.border }}
            >
              {item.images.length} imgs
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
