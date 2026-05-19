// ============================================================
// EMIRADS PRICING ENGINE — Real rates (AED, per m² unless noted)
// ============================================================

export type UnitType = "sqm" | "unit" | "meter";

export interface MaterialOption {
  key: string;
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
  /** Single accent hex (kept on-brand) */
  accentColor: string;
  materials: MaterialOption[];
  specs: SpecField[];
  calculatePrice: (
    specs: Record<string, number | string>,
    material: MaterialOption,
  ) => PriceResult;
  minOrderNote?: string;
  /** Extra remarks shown to the client on the quote (e.g. "Printing only — installation excluded") */
  remarks?: string;
}

export interface PriceResult {
  total: number;
  breakdown: { label: string; value: string }[];
  unit: string;
}

const fmt = (n: number) =>
  n.toLocaleString("en-AE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

// Standard spec fields shared by per-sqm services
const sqmSpecs = (
  defWidth = "2",
  defHeight = "1.5",
): SpecField[] => [
  {
    key: "width",
    label: "Width",
    type: "number",
    unit: "m",
    placeholder: defWidth,
    min: 0.1,
    max: 200,
    required: true,
  },
  {
    key: "height",
    label: "Height",
    type: "number",
    unit: "m",
    placeholder: defHeight,
    min: 0.1,
    max: 100,
    required: true,
  },
  {
    key: "quantity",
    label: "Quantity",
    type: "number",
    unit: "pcs",
    placeholder: "1",
    min: 1,
    max: 1000,
    required: true,
  },
];

// Per-sqm price calculator (handles unit / meter materials too)
function sqmCalculator(
  specs: Record<string, number | string>,
  material: MaterialOption,
): PriceResult {
  const width = Number(specs.width) || 0;
  const height = Number(specs.height) || 0;
  const qty = Number(specs.quantity) || 1;

  // Per-unit pricing (e.g. roller banner stand, direction sign with pole)
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

  // Per-meter pricing (e.g. pylon sign height)
  if (material.unit === "meter") {
    const total = height * material.ratePerUnit * qty;
    return {
      total,
      unit: "AED",
      breakdown: [
        { label: "Height", value: `${fmt(height)} m` },
        { label: "Rate", value: `AED ${fmt(material.ratePerUnit)} / m` },
        { label: "Quantity", value: `× ${qty}` },
        { label: "Total", value: `AED ${fmt(total)}` },
      ],
    };
  }

  // Per-sqm pricing
  const sqm = width * height;
  const perUnit = sqm * material.ratePerUnit;
  const total = perUnit * qty;
  return {
    total,
    unit: "AED",
    breakdown: [
      { label: "Area", value: `${fmt(sqm)} sq m` },
      { label: "Rate", value: `AED ${fmt(material.ratePerUnit)} / sq m` },
      { label: "Cost per piece", value: `AED ${fmt(perUnit)}` },
      { label: "Quantity", value: `× ${qty}` },
      { label: "Total", value: `AED ${fmt(total)}` },
    ],
  };
}

// ============================================================
// SERVICE DEFINITIONS
// ============================================================
export const servicePricingList: ServicePricing[] = [
  // ----------------------------------------------------------
  // 1. VEHICLE BRANDING (AED / m²)
  // ----------------------------------------------------------
  {
    id: "vehicle-branding",
    name: "Vehicle Branding",
    slug: "vehicle-branding",
    tagline: "Turn your fleet into a moving billboard",
    description:
      "Full and partial vehicle wraps plus plotter-cut graphics for cars, vans, trucks and buses.",
    emoji: "🚗",
    accentColor: "#FF6A1A",
    materials: [
      {
        key: "full-wrap-cast",
        label: "Full Wrap — Cast Vinyl",
        ratePerUnit: 220,
        unit: "sqm",
        description: "Premium cast vinyl, desert-grade lamination",
      },
      {
        key: "full-wrap-semi-vire",
        label: "Full Wrap — Semi Vire",
        ratePerUnit: 160,
        unit: "sqm",
        description: "Mid-grade semi-cast vinyl for flat & light curves",
      },
      {
        key: "full-wrap-truck-flat",
        label: "Full Wrap for Truck — Flat Vinyl",
        ratePerUnit: 120,
        unit: "sqm",
        description: "Economy flat vinyl ideal for trucks and trailers",
      },
      {
        key: "partial-wrap-semi-vire",
        label: "Partial Wrap — Semi Vire",
        ratePerUnit: 160,
        unit: "sqm",
        description: "Spot coverage with precision plotter cut",
      },
      {
        key: "plotter-cut",
        label: "Plotter Cut Graphics",
        ratePerUnit: 80,
        unit: "sqm",
        description: "Single-colour die-cut vinyl lettering & shapes",
      },
    ],
    specs: sqmSpecs("2", "1.5"),
    calculatePrice: sqmCalculator,
    minOrderNote: "Minimum order: 1 vehicle",
  },

  // ----------------------------------------------------------
  // 2. BANNER PRINTING (AED / m², printing only)
  // ----------------------------------------------------------
  {
    id: "banner-printing",
    name: "Banner Printing",
    slug: "banner-printing",
    tagline: "High-impact banners for every space",
    description:
      "PVC flex, fabric, mesh and roller banners — printed fast on premium media.",
    emoji: "🖨️",
    accentColor: "#db016e",
    remarks:
      "Prices shown are for printing only — installation is not included.",
    materials: [
      {
        key: "pvc-flex-outdoor",
        label: "PVC Flex — Outdoor",
        ratePerUnit: 55,
        unit: "sqm",
        description: "UV-resistant outdoor flex banner",
      },
      {
        key: "pvc-flex-indoor",
        label: "PVC Flex — Indoor",
        ratePerUnit: 65,
        unit: "sqm",
        description: "Backlit or frontlit indoor flex",
      },
      {
        key: "fabric-dyesub",
        label: "Fabric — Tension / Dye Sublimation",
        ratePerUnit: 65,
        unit: "sqm",
        description: "Premium fabric for exhibitions and frames",
      },
      {
        key: "mesh-banner",
        label: "Mesh Banner (Wind-through)",
        ratePerUnit: 55,
        unit: "sqm",
        description: "Wind-permeable for high-rise or scaffolding",
      },
      {
        key: "roller-banner",
        label: "Roller Banner Stand",
        ratePerUnit: 280,
        unit: "unit",
        description: "Complete stand + print (800×2000mm standard)",
      },
    ],
    specs: sqmSpecs("3", "1.5"),
    calculatePrice: sqmCalculator,
    minOrderNote: "Minimum print area: 1 sq m",
  },

  // ----------------------------------------------------------
  // 3. LED SCREENS (AED / m²)
  // ----------------------------------------------------------
  {
    id: "led-screens",
    name: "LED Screens",
    slug: "led-screens",
    tagline: "Bright, dynamic displays that grab attention",
    description:
      "Indoor and outdoor LED video walls with fine pitch options from P1.8 to P4.",
    emoji: "📺",
    accentColor: "#038CE3",
    materials: [
      {
        key: "indoor-p18",
        label: "Indoor LED — P1.8",
        ratePerUnit: 6000,
        unit: "sqm",
        description: "Ultra fine-pitch indoor — close-up viewing",
      },
      {
        key: "indoor-p185",
        label: "Indoor LED — P1.85",
        ratePerUnit: 8000,
        unit: "sqm",
        description: "Premium fine-pitch for boardrooms & broadcast",
      },
      {
        key: "indoor-p25",
        label: "Indoor LED — P2.5",
        ratePerUnit: 4000,
        unit: "sqm",
        description: "Standard fine-pitch for retail & lobbies",
      },
      {
        key: "outdoor-p25",
        label: "Outdoor LED — P2.5",
        ratePerUnit: 7000,
        unit: "sqm",
        description: "Weatherproof fine-pitch outdoor display",
      },
      {
        key: "indoor-p4",
        label: "Indoor LED — P4",
        ratePerUnit: 4500,
        unit: "sqm",
        description: "Standard indoor LED, ideal for malls & events",
      },
    ],
    specs: sqmSpecs("3", "2"),
    calculatePrice: sqmCalculator,
    minOrderNote: "Minimum screen area: 1 sq m",
  },

  // ----------------------------------------------------------
  // 4. INDOOR SIGNAGE (AED / m² or per unit)
  // ----------------------------------------------------------
  {
    id: "indoor-signage",
    name: "Indoor Signage",
    slug: "indoor-signage",
    tagline: "Reception, wayfinding & brand environments",
    description:
      "Light box panels, totems, gypsum hoardings and directional signs for offices, malls and hotels.",
    emoji: "✨",
    accentColor: "#FF6A1A",
    materials: [
      {
        key: "light-box-panel",
        label: "Light Box Panel",
        ratePerUnit: 320,
        unit: "sqm",
        description: "Backlit fabric or acrylic lightbox",
      },
      {
        key: "direction-sign-pole",
        label: "Traffic / Direction Sign with Pole",
        ratePerUnit: 950,
        unit: "unit",
        description: "Aluminium sign mounted on standard pole",
      },
      {
        key: "totem-sign",
        label: "Totem Sign",
        ratePerUnit: 2300,
        unit: "sqm",
        description: "Freestanding aluminium totem signage",
      },
      {
        key: "indoor-gypsum-hoarding",
        label: "Indoor Gypsum Hoarding",
        ratePerUnit: 1010,
        unit: "sqm",
        description: "Gypsum-built indoor hoarding with finish",
      },
    ],
    specs: sqmSpecs("2", "1.5"),
    calculatePrice: sqmCalculator,
    minOrderNote: "Site survey recommended for totem signs",
  },

  // ----------------------------------------------------------
  // 5. OUTDOOR SIGNAGE (AED / m² or per meter)
  // ----------------------------------------------------------
  {
    id: "outdoor-signage",
    name: "Outdoor Signage",
    slug: "outdoor-signage",
    tagline: "Facades, pylons & illuminated structures",
    description:
      "Hoardings, pylon/totem signs, outdoor LED boxes and aluminium light boxes for facades and entrances.",
    emoji: "🏗️",
    accentColor: "#FF6A1A",
    materials: [
      {
        key: "hoarding",
        label: "Hoarding",
        ratePerUnit: 1030,
        unit: "sqm",
        description: "Large-format outdoor hoarding panel",
      },
      {
        key: "outdoor-led-box",
        label: "Outdoor LED Box",
        ratePerUnit: 650,
        unit: "sqm",
        description: "Weatherproof backlit outdoor LED box",
      },
      {
        key: "pylon-totem",
        label: "Pylon / Totem Sign (per meter)",
        ratePerUnit: 2800,
        unit: "meter",
        description: "Freestanding aluminium pylon — priced per meter height",
      },
      {
        key: "aluminium-light-box",
        label: "Aluminium Light Box",
        ratePerUnit: 320,
        unit: "sqm",
        description: "Aluminium-framed backlit light box",
      },
    ],
    specs: sqmSpecs("3", "2"),
    calculatePrice: sqmCalculator,
    minOrderNote: "Permit handling available for pylon signs",
  },
];

// ============================================================
// HELPERS
// ============================================================
export const getPricingById = (id: string): ServicePricing | undefined =>
  servicePricingList.find((s) => s.id === id);

export const getPricingBySlug = (slug: string): ServicePricing | undefined =>
  servicePricingList.find((s) => s.slug === slug);
