export interface GalleryItem {
  title: string;
  images: string[];
}

export interface GalleryCategory {
  title: string;
  color: "cyan" | "magenta" | "yellow" | "white";
  items: GalleryItem[];
  gridCols?: "2" | "3";
}

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Indoor Signages",
    color: "cyan",
    gridCols: "3",
    items: [
      {
        title: "Reception Logo",
        images: [
          "/images/Reception Logo 01.webp",
          "/images/acrylic-reception-sign.webp",
        ],
      },
      {
        title: "Wall Branding And Graphic",
        images: [
          "/images/Wall branding.jpg",
          "/images/wall-graphic-main.jpg",
        ],
      },
      {
        title: "Acrylic Lettering",
        images: [
          "/images/ACRYLIC LETTERING.jpg",
          "/images/ACRYLIC LETTERING 02.avif",
        ],
      },
      {
        title: "WAYFINDING & DIRECTIONAL SIGNS",
        images: [
          "/images/WAYFINDING & DIRECTIONAL SIGNS 01.webp",
          "/images/WAYFINDING & DIRECTIONAL SIGNS 02.jpg",
        ],
      },
      {
        title: "DOOR & ROOM IDENTIFICATION SIGNS",
        images: ["/images/DOOR & ROOM IDENTIFICATION SIGNS.jpg"],
      },
      {
        title: "LED NEON INDOOR SIGNS",
        images: [
          "/images/LED NEON INDOOR SIGNS.webp",
          "/images/LED NEON INDOOR SIGNS.jpeg",
        ],
      },
      {
        title: "MENU BOARDS",
        images: [
          "/images/MENU BOARDS 01.avif",
          "/images/MENU BOARDS 02.webp",
        ],
      },
    ],
  },
  {
    title: "Outdoor Signages",
    color: "magenta",
    gridCols: "3",
    items: [
      {
        title: "BUILDING SIGNBOARDS",
        images: [
          "/images/BUILDING SIGNBOARDS 01.webp",
          "/images/BUILDING SIGNBOARDS 02.jpg",
        ],
      },
      {
        title: "SHOP FRONT SIGNS",
        images: [
          "/images/SHOP FRONT SIGNS 01.webp",
          "/images/SHOP FRONT SIGNS 02.jpg",
        ],
      },
      {
        title: "PYLON & TOTEM SIGNS",
        images: [
          "/images/PYLON & TOTEM SIGNS.jpg",
          "/images/PYLON & TOTEM SIGNS 02.avif",
          "/images/PYLON & TOTEM SIGNS 03.jpeg",
        ],
      },
      {
        title: "OUTDOOR LIGHTBOXES",
        images: [
          "/images/OUTDOOR LIGHTBOXES 01.jpg",
          "/images/OUTDOOR LIGHTBOXES 02.jpeg",
        ],
      },
      {
        title: "BILLBOARDS",
        images: [
          "/images/BILLBOARDS 01.jpg",
          "/images/BILLBOARDS 02.jpg",
        ],
      },
      {
        title: "HOARDINGS",
        images: [
          "/images/HOARDINGS 01.jpg",
          "/images/HOARDINGS 02.jpg",
        ],
      },
    ],
  },
  {
    title: "Illuminated Signages",
    color: "yellow",
    gridCols: "2",
    items: [
      {
        title: "FRONTLIT 3D LETTERS",
        images: [
          "/images/FRONTLIT 3D LETTERS 01.jpg",
          "/images/FRONTLIT 3D LETTERS 02.avif",
        ],
      },
      {
        title: "BACKLIT 3D LETTERS",
        images: [
          "/images/BACKLIT 3D LETTERS 01.webp",
          "/images/BACKLIT 3D LETTERS 02.webp",
          "/images/BACKLIT 3D LETTERS 03.webp",
          "/images/BACKLIT 3D LETTERS 04.jpg",
        ],
      },
      {
        title: "PUSH-THROUGH ACRYLIC SIGNS",
        images: [
          "/images/PUSH-THROUGH ACRYLIC SIGNS 01.webp",
          "/images/PUSH-THROUGH ACRYLIC SIGNS 02.webp",
        ],
      },
      {
        title: "2D / 3D CUTOUT LETTERS",
        images: ["/images/CUTOUT LETTERS.webp"],
      },
    ],
  },
  {
    title: "Non-Illuminated Signages",
    color: "white",
    gridCols: "2",
    items: [
      {
        title: "DIRECTORY BOARDS",
        images: [
          "/images/DIRECTORY BOARDS 01.webp",
          "/images/DIRECTORY BOARDS 02.webp",
        ],
      },
      {
        title: "JOINER WORK",
        images: [
          "/images/JOINER WORK 01.jpg",
          "/images/JOINER WORK 02.jpg",
          "/images/JOINER WORK 03.jpg",
        ],
      },
    ],
  },
  {
    title: "Safety & Compliance Signages",
    color: "magenta",
    gridCols: "2",
    items: [
      {
        title: "EMERGENCY EXIT SIGNS",
        images: [
          "/images/EMERGENCY EXIT SIGNS 01.webp",
          "/images/EMERGENCY EXIT SIGNS 02.jpg",
          "/images/EMERGENCY EXIT SIGNS 03.jpg",
        ],
      },
      {
        title: "FIRE SAFETY SIGNBOARDS",
        images: [
          "/images/FIRE SAFETY SIGNBOARDS.webp",
          "/images/FIRE SAFETY SIGNBOARDS 02.jpg",
        ],
      },
    ],
  },
];

