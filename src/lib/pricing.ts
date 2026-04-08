// ============================================================
// EMIRADS PRICING ENGINE
// ============================================================
// This is the single source of truth for all service pricing.
// Update the rates here when you have the correct values.
// All prices are in AED.
// ============================================================

export type UnitType = "sqft" | "sqm" | "unit" | "meter" | "panel";
export type MaterialKey = string;

export interface MaterialOption {
  key: MaterialKey;
  label: string;
  /** Rate in AED per unit */
  ratePerUnit: number;
  unit: UnitType;
  description: string;
}

export interface SpecField {
  key: string;
  label: string;
  type: "number" | "select" | "text";
  unit?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  options?: { value: string; label: string }[];
  required: boolean;
}

export interface ServicePricing {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  emoji: string;
  accentColor: string;
  shadowColor: string;
  materials: MaterialOption[];
  /** Extra spec fields shown after material selection */
  specs: SpecField[];
  /**
   * The formula that takes the filled-in spec values + chosen material rate
   * and returns { total, breakdown }.
   * All formulas live here so they're easy to update.
   */
  calculatePrice: (
    specs: Record<string, number | string>,
    material: MaterialOption
  ) => PriceResult;
  minOrderNote?: string;
}

export interface PriceResult {
  total: number;
  breakdown: { label: string; value: string }[];
  unit: string;
}

// ============================================================
// HELPER
// ============================================================
const fmt = (n: number) =>
  n.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ============================================================
// SERVICE DEFINITIONS & PRICING
// ============================================================

export const servicePricingList: ServicePricing[] = [
  // ----------------------------------------------------------
  // 1. VEHICLE BRANDING
  // ----------------------------------------------------------
  {
    id: "vehicle-branding",
    name: "Vehicle Branding",
    slug: "vehicle-branding",
    tagline: "Turn your fleet into rolling billboards",
    description:
      "Full, partial and plotter vinyl wraps engineered for desert climates. 3M-certified installers.",
    emoji: "🚗",
    accentColor: "#FF3AF2",
    shadowColor: "#FFE600",
    materials: [
      {
        key: "full-wrap-cast",
        label: "Full Wrap — Cast Vinyl (3M)",
        ratePerUnit: 100,   // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Premium 3M cast vinyl, desert-grade lamination",
      },
      {
        key: "full-wrap-calendered",
        label: "Full Wrap — Calendered Vinyl",
        ratePerUnit: 65,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Economy grade, suitable for flat surfaces",
      },
      {
        key: "partial-wrap",
        label: "Partial Wrap",
        ratePerUnit: 80,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Spot coverage with precision plotter cut",
      },
      {
        key: "plotter-cut",
        label: "Plotter Cut Graphics",
        ratePerUnit: 40,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Single-color or die-cut vinyl lettering",
      },
    ],
    specs: [
      {
        key: "width",
        label: "Vehicle Width",
        type: "number",
        unit: "ft",
        placeholder: "e.g. 7",
        min: 1,
        max: 30,
        required: true,
      },
      {
        key: "height",
        label: "Coverage Height",
        type: "number",
        unit: "ft",
        placeholder: "e.g. 5",
        min: 1,
        max: 10,
        required: true,
      },
      {
        key: "quantity",
        label: "Number of Vehicles",
        type: "number",
        unit: "vehicles",
        placeholder: "e.g. 1",
        min: 1,
        max: 500,
        required: true,
      },
    ],
    calculatePrice(specs, material) {
      const width = Number(specs.width) || 0;
      const height = Number(specs.height) || 0;
      const qty = Number(specs.quantity) || 1;
      const sqft = width * height;
      const perVehicle = sqft * material.ratePerUnit;
      const total = perVehicle * qty;
      return {
        total,
        unit: "AED",
        breakdown: [
          { label: "Area per vehicle", value: `${fmt(sqft)} sq ft` },
          { label: "Rate", value: `AED ${fmt(material.ratePerUnit)} / sq ft` },
          { label: "Cost per vehicle", value: `AED ${fmt(perVehicle)}` },
          { label: "Vehicles", value: `× ${qty}` },
          { label: "Total", value: `AED ${fmt(total)}` },
        ],
      };
    },
    minOrderNote: "Minimum order: 1 vehicle",
  },

  // ----------------------------------------------------------
  // 2. BANNER PRINTING
  // ----------------------------------------------------------
  {
    id: "banner-printing",
    name: "Banner Printing",
    slug: "banner-printing",
    tagline: "High-impact banners for every environment",
    description:
      "Indoor and outdoor banners, roller banners, PVC flex and fabric media. Fast turnaround.",
    emoji: "🖨️",
    accentColor: "#00F5D4",
    shadowColor: "#7B2FFF",
    materials: [
      {
        key: "pvc-flex-outdoor",
        label: "PVC Flex — Outdoor (500gsm)",
        ratePerUnit: 18,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "UV-resistant outdoor flex banner",
      },
      {
        key: "pvc-flex-indoor",
        label: "PVC Flex — Indoor (440gsm)",
        ratePerUnit: 14,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Backlit or frontlit indoor flex",
      },
      {
        key: "fabric-tension",
        label: "Fabric — Tension / Dye Sublimation",
        ratePerUnit: 28,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Premium fabric for exhibitions and events",
      },
      {
        key: "mesh-banner",
        label: "Mesh Banner (Wind-through)",
        ratePerUnit: 22,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Wind-permeable for high-rise or outdoor scaffolding",
      },
      {
        key: "roller-banner",
        label: "Roller Banner Stand",
        ratePerUnit: 180,   // AED per unit — UPDATE WITH REAL RATE
        unit: "unit",
        description: "Includes stand + print (800×2000mm standard)",
      },
    ],
    specs: [
      {
        key: "width",
        label: "Width",
        type: "number",
        unit: "ft",
        placeholder: "e.g. 10",
        min: 1,
        max: 200,
        required: true,
      },
      {
        key: "height",
        label: "Height",
        type: "number",
        unit: "ft",
        placeholder: "e.g. 4",
        min: 1,
        max: 100,
        required: true,
      },
      {
        key: "quantity",
        label: "Quantity",
        type: "number",
        unit: "pcs",
        placeholder: "e.g. 5",
        min: 1,
        max: 10000,
        required: true,
      },
      {
        key: "finishing",
        label: "Finishing",
        type: "select",
        required: true,
        options: [
          { value: "none", label: "No finishing" },
          { value: "eyelets", label: "Eyelets (every 50cm)" },
          { value: "hem", label: "Hemmed edges" },
          { value: "pole-pocket", label: "Pole pocket top & bottom" },
        ],
      },
    ],
    calculatePrice(specs, material) {
      const width = Number(specs.width) || 0;
      const height = Number(specs.height) || 0;
      const qty = Number(specs.quantity) || 1;
      const finishing = specs.finishing as string;

      // Roller banners are priced per unit not per sqft
      if (material.unit === "unit") {
        const total = material.ratePerUnit * qty;
        return {
          total,
          unit: "AED",
          breakdown: [
            { label: "Rate per unit", value: `AED ${fmt(material.ratePerUnit)}` },
            { label: "Quantity", value: `× ${qty}` },
            { label: "Total", value: `AED ${fmt(total)}` },
          ],
        };
      }

      const sqft = width * height;
      const finishingCost =
        finishing === "eyelets" ? 5 * qty
        : finishing === "hem" ? 8 * qty
        : finishing === "pole-pocket" ? 12 * qty
        : 0;
      const printCost = sqft * material.ratePerUnit * qty;
      const total = printCost + finishingCost;
      return {
        total,
        unit: "AED",
        breakdown: [
          { label: "Area", value: `${fmt(sqft)} sq ft` },
          { label: "Print rate", value: `AED ${fmt(material.ratePerUnit)} / sq ft` },
          { label: "Print cost", value: `AED ${fmt(printCost)}` },
          ...(finishingCost > 0
            ? [{ label: "Finishing", value: `AED ${fmt(finishingCost)}` }]
            : []),
          { label: "Total", value: `AED ${fmt(total)}` },
        ],
      };
    },
    minOrderNote: "Minimum print area: 2 sq ft",
  },

  // ----------------------------------------------------------
  // 3. LED SCREENS
  // ----------------------------------------------------------
  {
    id: "led-screens",
    name: "LED Screens",
    slug: "led-screens",
    tagline: "Dynamic displays that command attention",
    description:
      "Indoor and outdoor LED display panels, video walls and programmable LED signage.",
    emoji: "📺",
    accentColor: "#FFE600",
    shadowColor: "#FF6B35",
    materials: [
      {
        key: "indoor-p3",
        label: "Indoor LED — P3 (3mm pitch)",
        ratePerUnit: 1800,  // AED per sq m — UPDATE WITH REAL RATE
        unit: "sqm",
        description: "High-resolution indoor display panel",
      },
      {
        key: "indoor-p4",
        label: "Indoor LED — P4 (4mm pitch)",
        ratePerUnit: 1400,  // AED per sq m — UPDATE WITH REAL RATE
        unit: "sqm",
        description: "Standard indoor LED, ideal for retail",
      },
      {
        key: "outdoor-p6",
        label: "Outdoor LED — P6 (6mm pitch)",
        ratePerUnit: 2200,  // AED per sq m — UPDATE WITH REAL RATE
        unit: "sqm",
        description: "Weatherproof outdoor LED display",
      },
      {
        key: "outdoor-p10",
        label: "Outdoor LED — P10 (10mm pitch)",
        ratePerUnit: 1600,  // AED per sq m — UPDATE WITH REAL RATE
        unit: "sqm",
        description: "Long-distance outdoor billboard LED",
      },
    ],
    specs: [
      {
        key: "width",
        label: "Screen Width",
        type: "number",
        unit: "m",
        placeholder: "e.g. 3",
        min: 0.5,
        max: 50,
        required: true,
      },
      {
        key: "height",
        label: "Screen Height",
        type: "number",
        unit: "m",
        placeholder: "e.g. 2",
        min: 0.5,
        max: 30,
        required: true,
      },
      {
        key: "installation",
        label: "Installation Type",
        type: "select",
        required: true,
        options: [
          { value: "wall-mount", label: "Wall mount" },
          { value: "freestanding", label: "Freestanding structure" },
          { value: "ceiling-hang", label: "Ceiling suspension" },
          { value: "supply-only", label: "Supply only (no installation)" },
        ],
      },
    ],
    calculatePrice(specs, material) {
      const width = Number(specs.width) || 0;
      const height = Number(specs.height) || 0;
      const sqm = width * height;
      const installation = specs.installation as string;

      const installCost =
        installation === "freestanding" ? sqm * 300
        : installation === "ceiling-hang" ? sqm * 200
        : installation === "wall-mount" ? sqm * 150
        : 0;

      const panelCost = sqm * material.ratePerUnit;
      const total = panelCost + installCost;
      return {
        total,
        unit: "AED",
        breakdown: [
          { label: "Area", value: `${fmt(sqm)} sq m` },
          { label: "Panel rate", value: `AED ${fmt(material.ratePerUnit)} / sq m` },
          { label: "Panel cost", value: `AED ${fmt(panelCost)}` },
          ...(installCost > 0
            ? [{ label: "Installation", value: `AED ${fmt(installCost)}` }]
            : []),
          { label: "Total", value: `AED ${fmt(total)}` },
        ],
      };
    },
    minOrderNote: "Minimum screen area: 1 sq m",
  },

  // ----------------------------------------------------------
  // 4. INDOOR SIGNAGE
  // ----------------------------------------------------------
  {
    id: "indoor-signage",
    name: "Indoor Signage",
    slug: "indoor-signage",
    tagline: "Reception, wayfinding & brand environments",
    description:
      "Acrylic letters, reception logos, wall graphics, wayfinding systems and illuminated indoor signage.",
    emoji: "✨",
    accentColor: "#FF6B35",
    shadowColor: "#FF3AF2",
    materials: [
      {
        key: "acrylic-letters-3d",
        label: "3D Acrylic Letters (Frontlit)",
        ratePerUnit: 450,   // AED per sq ft of letter area — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Illuminated acrylic letters with LED",
      },
      {
        key: "acrylic-letters-plain",
        label: "3D Acrylic Letters (Non-lit)",
        ratePerUnit: 220,   // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Painted or brushed finish acrylic",
      },
      {
        key: "wall-graphic",
        label: "Wall Graphics / Vinyl",
        ratePerUnit: 25,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Printed or cut vinyl wall graphics",
      },
      {
        key: "lightbox",
        label: "LED Lightbox Panel",
        ratePerUnit: 380,   // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Backlit fabric or acrylic lightbox",
      },
      {
        key: "wayfinding-unit",
        label: "Wayfinding Sign (per unit)",
        ratePerUnit: 350,   // AED per unit — UPDATE WITH REAL RATE
        unit: "unit",
        description: "Directional sign, aluminium or acrylic",
      },
    ],
    specs: [
      {
        key: "width",
        label: "Width",
        type: "number",
        unit: "ft",
        placeholder: "e.g. 4",
        min: 0.5,
        max: 50,
        required: true,
      },
      {
        key: "height",
        label: "Height",
        type: "number",
        unit: "ft",
        placeholder: "e.g. 2",
        min: 0.5,
        max: 30,
        required: true,
      },
      {
        key: "quantity",
        label: "Quantity",
        type: "number",
        unit: "pcs",
        placeholder: "e.g. 1",
        min: 1,
        max: 1000,
        required: true,
      },
    ],
    calculatePrice(specs, material) {
      const width = Number(specs.width) || 0;
      const height = Number(specs.height) || 0;
      const qty = Number(specs.quantity) || 1;

      if (material.unit === "unit") {
        const total = material.ratePerUnit * qty;
        return {
          total,
          unit: "AED",
          breakdown: [
            { label: "Rate per unit", value: `AED ${fmt(material.ratePerUnit)}` },
            { label: "Quantity", value: `× ${qty}` },
            { label: "Total", value: `AED ${fmt(total)}` },
          ],
        };
      }

      const sqft = width * height;
      const total = sqft * material.ratePerUnit * qty;
      return {
        total,
        unit: "AED",
        breakdown: [
          { label: "Area", value: `${fmt(sqft)} sq ft` },
          { label: "Rate", value: `AED ${fmt(material.ratePerUnit)} / sq ft` },
          { label: "Quantity", value: `× ${qty}` },
          { label: "Total", value: `AED ${fmt(total)}` },
        ],
      };
    },
    minOrderNote: "Minimum order: 1 piece",
  },

  // ----------------------------------------------------------
  // 5. OUTDOOR SIGNAGE
  // ----------------------------------------------------------
  {
    id: "outdoor-signage",
    name: "Outdoor Signage",
    slug: "outdoor-signage",
    tagline: "Facades, pylons & illuminated structures",
    description:
      "Shopfront fascias, pylon signs, building signboards, hoardings and outdoor lightboxes.",
    emoji: "🏗️",
    accentColor: "#7B2FFF",
    shadowColor: "#00F5D4",
    materials: [
      {
        key: "frontlit-3d",
        label: "Frontlit 3D Letters (Aluminium + LED)",
        ratePerUnit: 650,   // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Aluminium letter casing with LED frontlit module",
      },
      {
        key: "backlit-3d",
        label: "Backlit / Halo-lit 3D Letters",
        ratePerUnit: 720,   // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Reverse-lit halo glow aluminium letters",
      },
      {
        key: "lightbox-outdoor",
        label: "Outdoor LED Lightbox",
        ratePerUnit: 420,   // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Weatherproof backlit flex or acrylic lightbox",
      },
      {
        key: "hoarding",
        label: "Hoarding / Billboard Print",
        ratePerUnit: 22,    // AED per sq ft — UPDATE WITH REAL RATE
        unit: "sqft",
        description: "Large-format hoarding or scaffold banner",
      },
      {
        key: "pylon-totem",
        label: "Pylon / Totem Sign (per meter height)",
        ratePerUnit: 1800,  // AED per meter height — UPDATE WITH REAL RATE
        unit: "meter",
        description: "Freestanding aluminium pylon or totem",
      },
    ],
    specs: [
      {
        key: "width",
        label: "Width",
        type: "number",
        unit: "ft",
        placeholder: "e.g. 12",
        min: 1,
        max: 500,
        required: true,
      },
      {
        key: "height",
        label: "Height",
        type: "number",
        unit: "ft",
        placeholder: "e.g. 3",
        min: 1,
        max: 100,
        required: true,
      },
      {
        key: "quantity",
        label: "Quantity",
        type: "number",
        unit: "pcs",
        placeholder: "e.g. 1",
        min: 1,
        max: 500,
        required: true,
      },
    ],
    calculatePrice(specs, material) {
      const width = Number(specs.width) || 0;
      const height = Number(specs.height) || 0;
      const qty = Number(specs.quantity) || 1;

      // Pylon is priced by height in meters (1 ft ≈ 0.3048 m)
      if (material.unit === "meter") {
        const heightM = height * 0.3048;
        const total = heightM * material.ratePerUnit * qty;
        return {
          total,
          unit: "AED",
          breakdown: [
            { label: "Height", value: `${fmt(heightM)} m` },
            { label: "Rate", value: `AED ${fmt(material.ratePerUnit)} / m` },
            { label: "Quantity", value: `× ${qty}` },
            { label: "Total", value: `AED ${fmt(total)}` },
          ],
        };
      }

      const sqft = width * height;
      const total = sqft * material.ratePerUnit * qty;
      return {
        total,
        unit: "AED",
        breakdown: [
          { label: "Area", value: `${fmt(sqft)} sq ft` },
          { label: "Rate", value: `AED ${fmt(material.ratePerUnit)} / sq ft` },
          { label: "Quantity", value: `× ${qty}` },
          { label: "Total", value: `AED ${fmt(total)}` },
        ],
      };
    },
    minOrderNote: "Site survey required for pylon signs",
  },
];

// Convenience lookup by id
export const getPricingById = (id: string): ServicePricing | undefined =>
  servicePricingList.find((s) => s.id === id);

export const getPricingBySlug = (slug: string): ServicePricing | undefined =>
  servicePricingList.find((s) => s.slug === slug);
