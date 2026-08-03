export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
  featured?: boolean;
  tags: string[];
  content: ContentBlock[];
};

export const blogCategories = [
  "All",
  "Industry Insights",
  "Design Tips",
  "Case Studies",
  "Safety & Compliance",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "complete-guide-3d-signage-dubai",
    title: "The Complete Guide to 3D Signage in Dubai",
    excerpt:
      "From frontlit to backlit, acrylic to metal — discover every dimension of 3D signage and how to choose the right type for your business in Dubai.",
    category: "Industry Insights",
    image: "/images/3D-Signage-25.jpg",
    author: "Emirads Team",
    date: "2024-11-15",
    readTime: 8,
    featured: true,
    tags: ["3D Signage", "Dubai", "Brand Identity", "Illuminated Signs"],
    content: [
      {
        type: "paragraph",
        text: "In Dubai's hyper-competitive commercial landscape, your signage is often the first interaction a potential customer has with your brand. Three-dimensional signage — letters, logos, and shapes that physically project from a surface — creates a depth and dimension that flat graphics simply cannot match.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why 3D Signage Outperforms Flat Alternatives",
      },
      {
        type: "paragraph",
        text: "The psychology is simple: volume commands attention. When light hits a dimensional letter, it creates natural shadows and highlights that shift throughout the day, making your sign dynamic even when static. Studies in retail environments consistently show that 3D signage increases dwell time by 30–40% compared to flat vinyl alternatives.",
      },
      {
        type: "quote",
        text: "Your sign is the silent salesperson that never clocks out. Invest in it accordingly.",
        author: "Emirads Design Team",
      },
      {
        type: "heading",
        level: 2,
        text: "The Main Types of 3D Signage",
      },
      {
        type: "heading",
        level: 3,
        text: "Frontlit 3D Letters",
      },
      {
        type: "paragraph",
        text: "Also called face-lit letters, frontlit 3D letters have LED modules installed inside the letter form, illuminating through a translucent acrylic face. The result is bold, vivid colour that is highly visible even in direct sunlight — ideal for busy road frontage and busy commercial streets.",
      },
      {
        type: "heading",
        level: 3,
        text: "Backlit / Halo-Lit 3D Letters",
      },
      {
        type: "paragraph",
        text: "Backlit letters are mounted slightly away from the wall, with LEDs pointing backward. This creates a glowing halo effect around each letter, producing a sophisticated, premium aesthetic that works particularly well against dark-coloured wall finishes.",
      },
      {
        type: "image",
        src: "/images/BACKLIT 3D LETTERS 01.webp",
        alt: "Backlit 3D letters example",
        caption: "Backlit 3D letters create a sophisticated halo glow — ideal for premium retail and hospitality",
      },
      {
        type: "heading",
        level: 3,
        text: "Cutout Letters",
      },
      {
        type: "paragraph",
        text: "Cutout metal or acrylic letters without internal illumination offer a clean, architectural look during the day and can be combined with external spotlights for nighttime visibility. These are popular for reception areas, corporate lobbies, and premium retail environments.",
      },
      {
        type: "heading",
        level: 2,
        text: "Choosing the Right Material",
      },
      {
        type: "list",
        items: [
          "Aluminium: Lightweight, weather-resistant, ideal for outdoor signs. Excellent powder-coat adhesion.",
          "Stainless Steel: Premium finish options including brushed, mirror, and gold-effect. Long lifespan.",
          "Acrylic: Cost-effective, available in hundreds of colours, great for indoor signage.",
          "PVC Foam Board: Budget-friendly option for temporary or indoor-only applications.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Regulatory Considerations in Dubai",
      },
      {
        type: "paragraph",
        text: "All outdoor signage in Dubai requires a permit from the relevant municipality — Dubai Economy and Tourism (DET) for commercial signage within Dubai Municipality's jurisdiction, and Trakhees for Dubai Production City, IMPZ, and other free zones. Emirads handles all permit applications as part of our end-to-end service, ensuring your sign is fully compliant from day one.",
      },
      {
        type: "quote",
        text: "We've handled permit applications across every major Dubai authority. Our clients have never had a rejection due to non-compliance.",
      },
      {
        type: "heading",
        level: 2,
        text: "Installation & Maintenance",
      },
      {
        type: "paragraph",
        text: "Unlike flat vinyl graphics, 3D signs require structural mounting consideration. For heavy aluminium or steel letters, wall anchors, backing plates, or a support frame may be needed. LED components typically have a rated life of 50,000+ hours — roughly 11 years of continuous operation — making maintenance minimal after installation.",
      },
      {
        type: "paragraph",
        text: "Regular cleaning with a soft microfibre cloth and mild soap preserves the finish. Annual inspection of LED drivers is recommended for illuminated signs.",
      },
    ],
  },
  {
    id: "2",
    slug: "frontlit-vs-backlit-illuminated-signs",
    title: "Frontlit vs Backlit: Choosing the Right Illuminated Sign",
    excerpt:
      "Both look stunning at night, but frontlit and backlit signs serve very different purposes. Here's how to pick the right one for your space.",
    category: "Design Tips",
    image: "/images/FRONTLIT 3D LETTERS 01.jpg",
    author: "Emirads Team",
    date: "2024-10-28",
    readTime: 5,
    tags: ["Illuminated Signs", "Design", "LED", "3D Letters"],
    content: [
      {
        type: "paragraph",
        text: "When clients come to us wanting illuminated 3D signage, one of the most common questions is: frontlit or backlit? Both options look spectacular at night, but the right choice depends on your wall colour, your brand aesthetic, and the environment your sign will live in.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frontlit Signs: Bold Colour for High-Traffic Locations",
      },
      {
        type: "paragraph",
        text: "Frontlit (face-lit) signs illuminate through the face of the letter. Light shines forward, making the face glow in your brand colour. They're the best choice for high-ambient-light environments where maximum brightness is needed, brands that want bold, saturated colour at night, and locations with lighter wall colours.",
      },
      {
        type: "image",
        src: "/images/FRONTLIT 3D LETTERS 02.avif",
        alt: "Frontlit 3D letters",
        caption: "Frontlit letters create bold, vivid illumination through the acrylic face — perfect for daytime and night",
      },
      {
        type: "heading",
        level: 2,
        text: "Backlit (Halo) Signs: Sophistication After Dark",
      },
      {
        type: "paragraph",
        text: "Backlit signs stand proud of the wall, with LEDs facing backward to create a luminous glow behind each letter. They excel on dark or textured wall finishes, in premium retail and hospitality environments, and for brands seeking a softer, more sophisticated nighttime aesthetic.",
      },
      {
        type: "quote",
        text: "Backlit letters turn any wall into a canvas. The halo effect creates depth that frontlit simply can't replicate against a dark background.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Comparison at a Glance",
      },
      {
        type: "list",
        items: [
          "Brightness: Frontlit wins for raw output — ideal for bright, competitive street-level locations.",
          "Aesthetics: Backlit offers a more upscale, refined look — popular with hotels and luxury retail.",
          "Wall requirements: Backlit letters need structural fixing points and minimum 30mm standoff; frontlit can flush-mount.",
          "Energy: Both use LEDs, so running costs are comparable.",
          "Best on dark walls: Backlit hands down. On white or cream walls, frontlit typically looks better.",
        ],
      },
      {
        type: "paragraph",
        text: "Our recommendation: if your wall is white or cream and you need maximum impact — go frontlit. If your wall is dark, or you're in hospitality or luxury retail — go backlit. For both, Emirads will provide a digital CGI mockup before production begins.",
      },
    ],
  },
  {
    id: "3",
    slug: "led-neon-signs-dubai-retail",
    title: "LED Neon Signs: The Aesthetic Revolution Hitting Dubai Retail",
    excerpt:
      "Glass neon is dead. LED neon is cheaper, safer, and more versatile — and Dubai's trendiest venues have already made the switch.",
    category: "Industry Insights",
    image: "/images/LED NEON INDOOR SIGNS.webp",
    author: "Emirads Team",
    date: "2024-10-05",
    readTime: 6,
    tags: ["LED Neon", "Retail", "Interior Design", "Brand"],
    content: [
      {
        type: "paragraph",
        text: "Walk into any hip café, boutique hotel, or Instagram-worthy retail store in Dubai today and you'll spot one instantly: a glowing LED neon sign, custom-bent into a slogan, logo, or illustration that begs to be photographed. This isn't a passing trend — it's a fundamental shift in how brands use light as a design element.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Businesses Are Switching from Glass Neon",
      },
      {
        type: "paragraph",
        text: "Traditional neon signs — made from glass tubes filled with noble gases — are fragile, heavy, contain mercury, and consume 3–5× more power than LED equivalents. They're also expensive to repair when a tube breaks. LED neon replicates the warm, continuous glow of glass neon using flexible LED strip encased in silicone tubing. The result is virtually indistinguishable to the eye, but dramatically better on every practical metric.",
      },
      {
        type: "list",
        items: [
          "Energy consumption: 70–80% less than glass neon",
          "Lifespan: 50,000+ hours vs. ~15,000 for glass neon",
          "Weight: LED neon weighs a fraction of glass tubes — ideal for suspended and ceiling installations",
          "Safety: No fragile glass, no mercury — safe for children's spaces and high-traffic retail",
          "Flexibility: Can be bent into complex curves, tight angles, and fully custom shapes",
        ],
      },
      {
        type: "image",
        src: "/images/LED NEON INDOOR SIGNS.jpeg",
        alt: "LED Neon sign interior",
        caption: "Custom LED neon creates instant brand personality for retail and hospitality spaces",
      },
      {
        type: "heading",
        level: 2,
        text: "Design Possibilities Are Virtually Limitless",
      },
      {
        type: "paragraph",
        text: "Because LED neon is flexible and available in 32+ colours — including warm white, cool white, and true RGB addressable strips — the design possibilities are virtually limitless. We've produced LED neon signs for reception desks, restaurant feature walls, hotel lobbies, photobooth backdrops, and window displays throughout the UAE.",
      },
      {
        type: "quote",
        text: "The best LED neon sign is one that people photograph before they've even sat down. It's free marketing every time.",
      },
      {
        type: "heading",
        level: 2,
        text: "What to Ask Your Sign Maker",
      },
      {
        type: "list",
        items: [
          "What silicone profile do they use? Thicker profiles mean more durability and better light diffusion.",
          "Do they use a single LED strip or multiple? Single-run signs have no visible colour breaks.",
          "What's the power supply specification? Always ask for a CE/UL-certified transformer.",
          "Do they offer a dimmer option? Essential for restaurants and hospitality environments.",
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "fire-safety-signage-uae-regulations",
    title: "Fire Safety Signage Requirements Every UAE Business Must Know",
    excerpt:
      "Non-compliant fire safety signage can invalidate your insurance and result in heavy fines. Here's a complete breakdown of UAE Civil Defence requirements.",
    category: "Safety & Compliance",
    image: "/images/FIRE SAFETY SIGNBOARDS.webp",
    author: "Emirads Team",
    date: "2024-09-20",
    readTime: 7,
    tags: ["Fire Safety", "UAE Regulations", "Compliance", "Civil Defence"],
    content: [
      {
        type: "paragraph",
        text: "Fire safety signage in the UAE is governed by Dubai Civil Defence (DCD) — and unlike marketing signage, compliance here isn't optional. Every commercial building, office, and retail space must display specific signs in specific locations. Getting this wrong doesn't just risk a fine — it can invalidate your insurance policy in the event of an incident.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mandatory Signs Under DCD Regulations",
      },
      {
        type: "list",
        items: [
          "Emergency Exit Signs: Required above every fire exit door. Must be illuminated (self-luminous or LED backlit) per NFPA 101.",
          "Fire Extinguisher Location Signs: Must mark every extinguisher point. Red pictogram on white background.",
          "Assembly Point Signs: Required at all evacuation assembly points outside the building.",
          "Fire Hose Reel Signs: Red background, white pictogram — required above every hose reel cabinet.",
          "No Smoking Signs: Required in all fire-risk areas and where flammable materials are stored.",
          "Fire Action Notices: Text-based notices detailing what to do in the event of a fire — required at every floor.",
        ],
      },
      {
        type: "image",
        src: "/images/EMERGENCY EXIT SIGNS 01.webp",
        alt: "Emergency exit sign",
        caption: "Illuminated emergency exit signs must remain visible during a power failure for a minimum of 90 minutes",
      },
      {
        type: "heading",
        level: 2,
        text: "Material and Illumination Requirements",
      },
      {
        type: "paragraph",
        text: "DCD requires that emergency exit signs maintain visibility during a power failure. This is achieved via one of two methods: photoluminescent (glow-in-the-dark) material that charges under ambient light and glows for 90+ minutes, or LED signs connected to a maintained or sustained emergency circuit.",
      },
      {
        type: "quote",
        text: "If your fire safety signs are the same ones installed when the building was first fitted out, they need a professional assessment. Standards have evolved significantly.",
      },
      {
        type: "heading",
        level: 2,
        text: "Inspection and Maintenance",
      },
      {
        type: "paragraph",
        text: "DCD inspectors check fire safety signage as part of their routine building inspections. Common deficiencies include obstructed exit signs (covered by storage or décor), faded photoluminescent material that no longer meets minimum luminance standards, and damaged sign cases with cracked faces.",
      },
      {
        type: "heading",
        level: 2,
        text: "How Emirads Can Help",
      },
      {
        type: "paragraph",
        text: "We supply and install the full range of DCD-compliant fire safety signage. Every sign we produce meets the minimum photoluminescence or illumination standards required by NFPA 101 and local DCD codes. We can also conduct a site survey of your existing signage and produce a compliance report — contact us to arrange a free assessment.",
      },
    ],
  },
  {
    id: "5",
    slug: "wayfinding-design-large-buildings",
    title: "Effective Wayfinding Design: Getting People from A to B",
    excerpt:
      "Great wayfinding is invisible — people navigate without thinking. Poor wayfinding costs businesses in lost customers. Here's the difference.",
    category: "Design Tips",
    image: "/images/WAYFINDING AND DIRECTIONAL SIGNS 01.webp",
    author: "Emirads Team",
    date: "2024-09-01",
    readTime: 5,
    tags: ["Wayfinding", "Interior Design", "UX", "Navigation"],
    content: [
      {
        type: "paragraph",
        text: "The goal of a wayfinding system is counterintuitive: when it works perfectly, nobody notices it. Visitors arrive at their destination without hesitation, without backtracking, and without needing to ask for directions. When it fails, you know it — confused looks, wasted minutes, the front desk fielding the same questions on repeat.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Principles of Good Wayfinding",
      },
      {
        type: "list",
        items: [
          "Decision Points First: Place directional signs at every point where a visitor must choose between paths — never mid-corridor.",
          "Hierarchy of Information: Primary destinations (Reception, Emergency Exit, Car Park) must be visually dominant. Secondary information is subordinate.",
          "Consistent Visual Language: One typeface, one icon set, one colour system throughout.",
          "Confirmation Signs: After a turn, confirm the route. This single element dramatically reduces anxiety.",
          "Accessibility: WCAG-compliant contrast ratios (minimum 4.5:1), tactile elements for visually impaired users, and Braille for key signs.",
        ],
      },
      {
        type: "image",
        src: "/images/WAYFINDING AND DIRECTIONAL SIGNS 02.webp",
        alt: "Wayfinding signs in a building",
        caption: "Clear hierarchy and consistent design language are the foundation of effective wayfinding",
      },
      {
        type: "heading",
        level: 2,
        text: "The Most Common Mistakes",
      },
      {
        type: "paragraph",
        text: "The most common wayfinding failure we see during site surveys is sign placement at the wrong height. Eye-level for a standing adult is 1.5–1.6m. Overhead suspended signs should be at a minimum 2.2m clearance. Signs installed at 1.8m are visible to tall adults but awkward for everyone else — and invisible for wheelchair users.",
      },
      {
        type: "quote",
        text: "A building with 50 poorly placed signs is harder to navigate than one with 15 perfectly placed ones. More is not better.",
      },
      {
        type: "heading",
        level: 2,
        text: "Directory Boards: The Anchor of Any Wayfinding System",
      },
      {
        type: "paragraph",
        text: "Every multi-tenant building, hospital, and large commercial facility needs a directory board at its primary entrance. This single sign — showing all tenants, floors, and key destinations — is the first reference point for visitors and reduces directional sign redundancy throughout the rest of the building.",
      },
    ],
  },
  {
    id: "6",
    slug: "shop-front-signs-drive-footfall",
    title: "How Quality Shop Front Signs Drive Foot Traffic and Sales",
    excerpt:
      "Your shop front is your most powerful and most underestimated marketing asset. Here's the science behind why signage drives footfall.",
    category: "Case Studies",
    image: "/images/SHOP FRONT SIGNS 01.webp",
    author: "Emirads Team",
    date: "2024-08-12",
    readTime: 6,
    tags: ["Retail", "Shop Fronts", "Footfall", "ROI"],
    content: [
      {
        type: "paragraph",
        text: "According to research on small business signage, 76% of consumers said they had entered a store they'd never visited before based purely on its sign. And the flip side: 68% said they'd decided not to enter a store because of a poorly made or unclear sign. Your shop front sign doesn't just identify you — it actively converts or repels customers.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Four Functions of a Shop Front Sign",
      },
      {
        type: "list",
        items: [
          "Identification: Tells people you exist and confirms they've found the right place.",
          "Differentiation: Sets you apart from neighbouring businesses at an immediate glance.",
          "Communication: Conveys your brand personality, price point, and category within 3 seconds.",
          "Invitation: A great sign makes passersby feel they belong inside.",
        ],
      },
      {
        type: "image",
        src: "/images/SHOP FRONT SIGNS 02.jpg",
        alt: "Shop front sign",
        caption: "Well-designed shop front signage communicates brand positioning before a customer steps inside",
      },
      {
        type: "heading",
        level: 2,
        text: "Legibility at Distance: The Core Metric",
      },
      {
        type: "paragraph",
        text: "Legibility at distance is paramount. The standard rule of thumb: for every 1 metre of letter height, you gain approximately 30 metres of readability from a moving vehicle. So a 500mm-tall letter set reads clearly at 15 metres — right for pedestrian-speed foot traffic. For vehicle traffic, you need 1m+ letter heights.",
      },
      {
        type: "quote",
        text: "We redesigned a client's shop front from flat vinyl to illuminated 3D letters. In the first month, they reported a 22% increase in new customers who 'just walked past and decided to come in.'",
      },
      {
        type: "heading",
        level: 2,
        text: "Lighting: The After-Dark ROI",
      },
      {
        type: "paragraph",
        text: "In Dubai, businesses trading after sunset — which includes almost every retail, F&B, and service business — must consider their signage in darkness. An unlit sign becomes invisible after dark. Illuminated signs extend your marketing hours by 12+ hours per day at a running cost of pennies, making them one of the highest-ROI investments in your entire marketing budget.",
      },
    ],
  },
  {
    id: "7",
    slug: "pylon-totem-signs-high-visibility",
    title: "Pylon & Totem Signs: High-Visibility for Large Sites",
    excerpt:
      "When your premises are set back from the road, or you share a complex with other businesses, pylon and totem signs solve a visibility challenge that nothing else can.",
    category: "Industry Insights",
    image: "/images/PYLON AND TOTEM SIGNS.jpg",
    author: "Emirads Team",
    date: "2024-07-22",
    readTime: 4,
    tags: ["Pylon Signs", "Totem Signs", "Outdoor Signage"],
    content: [
      {
        type: "paragraph",
        text: "Any business located more than 50 metres from the nearest road faces a visibility challenge that conventional fascia signage cannot solve. If drivers or pedestrians can't see your sign from the road, they can't turn in — and those are lost customers regardless of what's on your website. Pylon and totem signs exist to solve exactly this problem.",
      },
      {
        type: "heading",
        level: 2,
        text: "Pylon Signs vs. Totem Signs",
      },
      {
        type: "paragraph",
        text: "A pylon sign is a tall, free-standing structure — often 4–15 metres high — mounted on one or two poles, designed to be visible from long distances or fast roads. A totem sign is shorter (typically 2–5m), often single-pole, and designed for pedestrian-speed or low-speed road visibility in plazas, campuses, and commercial complexes.",
      },
      {
        type: "image",
        src: "/images/PYLON AND TOTEM SIGNS 02.avif",
        alt: "Totem sign in a commercial complex",
        caption: "Totem signs in commercial complexes allow multiple tenants to share high-visibility positioning",
      },
      {
        type: "heading",
        level: 2,
        text: "Multi-Tenant Pylons",
      },
      {
        type: "paragraph",
        text: "In Dubai's mixed-use commercial developments, multi-tenant pylon signs allow several businesses to share a single structure. Tenant panels are typically illuminated LED faces with the tenant's branding, and the structure itself carries the development name at the top.",
      },
      {
        type: "list",
        items: [
          "Placement: Typically at the driveway entrance, perpendicular to the road for maximum driver visibility.",
          "Height: Governed by DET/municipality guidelines — typically limited to 10m in residential areas, up to 20m+ in commercial zones.",
          "Illumination: LED-lit cabinets are standard — bright enough for daylight visibility and striking after dark.",
          "Materials: Aluminium framework with ACP faces, or acrylic faces for illuminated cabinets.",
        ],
      },
    ],
  },
  {
    id: "8",
    slug: "building-signage-brand-identity",
    title: "Building Signage That Speaks Your Brand Identity",
    excerpt:
      "The building you occupy says everything about your business before anyone walks through the door. Here's how to make it speak volumes — silently.",
    category: "Design Tips",
    image: "/images/BUILDING SIGNBOARDS 01.webp",
    author: "Emirads Team",
    date: "2024-07-01",
    readTime: 5,
    tags: ["Building Signage", "Brand Identity", "Corporate", "Architecture"],
    content: [
      {
        type: "paragraph",
        text: "From a 3D logo mounted on a tower facade to an entrance canopy with etched lettering, building-level signage is where brand identity meets architecture. It's the single most visible brand touchpoint for any business with a physical address — and in a city as visually competitive as Dubai, getting it right matters enormously.",
      },
      {
        type: "heading",
        level: 2,
        text: "Scale and Proportion: Where Most Projects Go Wrong",
      },
      {
        type: "paragraph",
        text: "The single most common mistake in building signage is under-scaling. A logo that looks correct on screen becomes almost invisible when installed on a 20-storey facade. Professional signage designers use shadow boarding — large-scale mockups installed temporarily — to verify scale before fabrication. At Emirads, we create scaled CGI visualisations of every building sign proposal, superimposed on a photograph of your actual building.",
      },
      {
        type: "image",
        src: "/images/BUILDING SIGNBOARDS 02.jpg",
        alt: "Building signboard installed",
        caption: "Building signage must be designed at architectural scale — not graphic design scale",
      },
      {
        type: "heading",
        level: 2,
        text: "Material Selection for Buildings",
      },
      {
        type: "list",
        items: [
          "Brushed stainless steel: The premium corporate standard — reflects light without glare, resistant to Dubai's humidity and UV.",
          "Powder-coated aluminium: Lightweight, colourful, and available in any RAL colour — workhorse of mid-range building signage.",
          "Backlit acrylic panels: Maximum visibility in all lighting conditions — ideal for tower identification at height.",
          "Stone and glass etching: Ultra-premium option for reception areas and entrance features.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Working With Building Management",
      },
      {
        type: "paragraph",
        text: "In most Dubai commercial towers, signage must be approved by the building management before permit applications are made to DET or the relevant authority. Specifications often include restrictions on light colour (warm white is commonly mandated for premium developments), maximum cabinet depth, and panel dimensions.",
      },
      {
        type: "quote",
        text: "The most successful building signage projects we've delivered started with a thorough brief — understanding the brand, the building, and the audience all at once.",
      },
    ],
  },
];
