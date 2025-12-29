"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function ImageLightbox({
  images,
  currentIndex: initialIndex,
  isOpen,
  onClose,
  title,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && images.length > 1) {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight" && images.length > 1) {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSwipe = (offset: number) => {
    const threshold = 50;
    if (Math.abs(offset) > threshold) {
      if (offset > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Close Button */}
        <motion.button
          className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20 sm:right-6 sm:top-6"
          onClick={onClose}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </motion.button>

        {/* Image Container */}
        <div className="relative z-40 w-full h-full flex items-center justify-center p-4 sm:p-8">
          <motion.div
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, { offset, velocity }) => {
              // Use velocity for better mobile swipe detection
              const swipeThreshold = 50;
              const velocityThreshold = 500;
              
              if (Math.abs(velocity.x) > velocityThreshold) {
                if (velocity.x > 0) {
                  setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                } else {
                  setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                }
              } else if (Math.abs(offset.x) > swipeThreshold) {
                handleSwipe(offset.x);
              }
            }}
            dragElastic={0.2}
            dragMomentum={false}
          >
            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>

            {/* Navigation Arrows - Only show if more than 1 image */}
            {images.length > 1 && (
              <>
                <motion.button
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20 sm:left-4 sm:h-14 sm:w-14"
                  onClick={goToPrevious}
                  initial={{ scale: 0, opacity: 0, x: -20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: -20 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
                </motion.button>

                <motion.button
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20 sm:right-4 sm:h-14 sm:w-14"
                  onClick={goToNext}
                  initial={{ scale: 0, opacity: 0, x: 20 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0, opacity: 0, x: 20 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
                </motion.button>
              </>
            )}

            {/* Image Counter & Title */}
            {images.length > 1 && (
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-white text-sm sm:text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="font-medium">
                  {currentIndex + 1} / {images.length}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.div
              className="absolute top-4 left-1/2 -translate-x-1/2 z-50 max-w-4xl text-center px-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">
                {title}
              </h3>
            </motion.div>
          </motion.div>
        </div>

        {/* Thumbnail Strip - Show if more than 1 image */}
        {images.length > 1 && images.length <= 10 && (
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 overflow-x-auto px-4 pb-2 max-w-[90vw] sm:max-w-4xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ delay: 0.25 }}
          >
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-[var(--brand-cyan)] scale-110"
                    : "border-white/30 hover:border-white/60"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

