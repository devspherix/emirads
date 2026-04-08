"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryCategories, type GalleryCategory } from "@/content/gallery";
import { ImageLightbox } from "./image-lightbox";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const accentMap: Record<GalleryCategory["color"], { border: string; shadow: string; text: string }> = {
  cyan:    { border: "#00F5D4", shadow: "#7B2FFF", text: "#00F5D4" },
  magenta: { border: "#FF3AF2", shadow: "#FFE600", text: "#FF3AF2" },
  yellow:  { border: "#FFE600", shadow: "#FF6B35", text: "#FFE600" },
  white:   { border: "#7B2FFF", shadow: "#00F5D4", text: "#7B2FFF" },
};

const cardAccents = [
  { border: "#FF3AF2", shadow: "#FFE600" },
  { border: "#00F5D4", shadow: "#7B2FFF" },
  { border: "#FFE600", shadow: "#FF6B35" },
  { border: "#FF6B35", shadow: "#FF3AF2" },
  { border: "#7B2FFF", shadow: "#00F5D4" },
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
      <section id="gallery" className="mt-24 space-y-20">
        {showHeading && (
          <motion.div {...fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <div
              className="relative overflow-hidden rounded-3xl border-4 border-[#FF3AF2] p-10 sm:p-12"
              style={{
                background: "linear-gradient(135deg, #2D1B4E, #1A0535)",
                boxShadow: "12px 12px 0 #FFE600, 24px 24px 0 #FF3AF2",
              }}
            >
              <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,58,242,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px", opacity: 0.2 }} />
              <div className="relative text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#FF3AF2]" />
                  <p className="text-xs font-black uppercase tracking-[0.5em] text-[#FF3AF2]">Our Portfolio</p>
                  <span className="h-px w-8 bg-[#FF3AF2]" />
                </div>
                <h2
                  className="text-4xl font-black text-white sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "var(--font-display)", textShadow: "3px 3px 0px #7B2FFF, 6px 6px 0px #FF3AF2" }}
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
      <div className="flex items-center gap-5">
        <div className="h-1 flex-1 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${accent.border})` }} />
        <div
          className="rounded-full border-4 px-6 py-3"
          style={{
            borderColor: accent.border,
            backgroundColor: `${accent.border}15`,
            boxShadow: `4px 4px 0 ${accent.shadow}`,
          }}
        >
          <h3
            className="text-2xl font-black text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-display)", textShadow: `2px 2px 0px ${accent.border}` }}
          >
            {category.title}
          </h3>
        </div>
        <div className="h-1 flex-1 rounded-full" style={{ background: `linear-gradient(90deg, ${accent.border}, transparent)` }} />
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
      className="group relative overflow-hidden rounded-3xl border-4 transition-all duration-300"
      style={{
        borderColor: accent.border,
        background: `linear-gradient(135deg, ${accent.border}10, #2D1B4E70)`,
        boxShadow: `6px 6px 0 ${accent.shadow}`,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
            className="text-base font-black text-white"
            style={{ fontFamily: "var(--font-display)", textShadow: `1px 1px 0px ${accent.border}` }}
          >
            {item.title}
          </h4>
          {item.images.length > 1 && (
            <span
              className="rounded-full border-2 px-2.5 py-0.5 text-xs font-black"
              style={{ borderColor: accent.border, color: accent.border, backgroundColor: `${accent.border}15` }}
            >
              {item.images.length} imgs
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
