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

const colorMap = {
  cyan: "via-[var(--brand-cyan)]",
  magenta: "via-[var(--brand-magenta)]",
  yellow: "via-[var(--brand-yellow)]",
  white: "via-white/40",
};

const gradientMap = {
  cyan: "from-[var(--brand-cyan)]/20 via-transparent to-[var(--brand-magenta)]/20",
  magenta: "from-[var(--brand-magenta)]/20 via-transparent to-[var(--brand-yellow)]/20",
  yellow: "from-[var(--brand-yellow)]/20 via-transparent to-[var(--brand-cyan)]/20",
  white: "from-white/10 via-transparent to-white/5",
};

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

  const openLightbox = (
    images: string[],
    initialIndex: number,
    title: string
  ) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: initialIndex,
      title,
    });
  };

  const closeLightbox = () => {
    setLightboxState({
      isOpen: false,
      images: [],
      currentIndex: 0,
      title: "",
    });
  };

  return (
    <>
      <section id="gallery" className="mt-20 space-y-16">
        {showHeading && (
          <motion.div {...fadeUp} viewport={{ once: true, amount: 0.3 }}>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Our Portfolio
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Showcasing excellence across all signage categories.
            </h2>
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
  const gridCols =
    category.gridCols === "3"
      ? "md:grid-cols-2 lg:grid-cols-3"
      : "md:grid-cols-2";

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`h-px flex-1 bg-gradient-to-r from-transparent ${colorMap[category.color]} to-transparent`}
        />
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
          {category.title}
        </h3>
        <div
          className={`h-px flex-1 bg-gradient-to-r from-transparent ${colorMap[category.color]} to-transparent`}
        />
      </div>
      <div className={`grid gap-6 ${gridCols}`}>
        {category.items.map((item, itemIndex) => (
          <GalleryItemCard
            key={item.title}
            item={item}
            categoryColor={category.color}
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
  categoryColor,
  index,
  onImageClick,
}: {
  item: { title: string; images: string[] };
  categoryColor: GalleryCategory["color"];
  index: number;
  onImageClick: (images: string[], index: number, title: string) => void;
}) {
  const sizes =
    categoryColor === "yellow" || categoryColor === "white"
      ? "(max-width: 768px) 100vw, 50vw"
      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  const handleImageClick = (imageIndex: number) => {
    onImageClick(item.images, imageIndex, item.title);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Show all images in a grid */}
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
                <Image
                  src={image}
                  alt={`${item.title} - Image ${imgIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        ) : item.images.length === 3 ? (
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleImageClick(0)}
              className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl cursor-pointer"
              aria-label={`View ${item.title} - Image 1`}
            >
              <Image
                src={item.images[0]}
                alt={`${item.title} - Image 1`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            {item.images.slice(1, 3).map((image, imgIndex) => (
              <button
                key={imgIndex + 1}
                onClick={() => handleImageClick(imgIndex + 1)}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
                aria-label={`View ${item.title} - Image ${imgIndex + 2}`}
              >
                <Image
                  src={image}
                  alt={`${item.title} - Image ${imgIndex + 2}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
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
                className={`relative overflow-hidden rounded-2xl cursor-pointer ${
                  imgIndex === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
                aria-label={`View ${item.title} - Image ${imgIndex + 1}`}
              >
                <Image
                  src={image}
                  alt={`${item.title} - Image ${imgIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={
                    imgIndex === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {imgIndex === 3 && item.images.length > 4 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-none">
                    <span className="text-2xl font-bold text-white">
                      +{item.images.length - 4}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="px-5 pb-5">
        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
        {item.images.length > 1 && (
          <p className="mt-1 text-xs text-white/60">
            {item.images.length} {item.images.length === 1 ? "image" : "images"}
          </p>
        )}
      </div>
      <div
        className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${gradientMap[categoryColor]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
    </motion.div>
  );
}

