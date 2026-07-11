import type { Product } from "../types";
import ONE_LEGGED_WIRE_ROPE_SLING_IMG from "../assets/Wire_rope_slings/1-legged-wire-rope-sling.png";
import TWO_LEGGED_WIRE_ROPE_SLING_IMG from "../assets/Wire_rope_slings/2-legged-wire-rope-sling.png";
import THREE_LEGGED_WIRE_ROPE_SLING_IMG from "../assets/Wire_rope_slings/3-legged-wire-rope-sling.png";
import FOUR_LEGGED_WIRE_ROPE_SLING_IMG from "../assets/Wire_rope_slings/4-legged-wire-rope-sling.png";
import WIRE_ENDS_IMG from "../assets/Wire_rope_slings/wire-ends.png";

const PLACEHOLDER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDP76LWSh8eaTJJfyYqza5a7GPs-n_w1j7QbJQFru9xNV-hgA71dFYLDPwfHNKwYcH6nEga1K8fu50JUKMUwhImjixLQb2YEe9UHPFkKM-PKimnPd7UnVjMKKVf-TAkdai9LcbYUyuB-eeHllVEHBSTqHjkekSS9U9SERdSB9PXNnc0TsSYZcpqIkCeDKAiWDMIK_kEtV-aqwER7UkkeecGdzS9BpHstAvDXoPt0r-FALQKxzwx6ytXosLrj65A8PXR8ouC5ZEtexk";

export const products: Product[] = [
  // ============================================
  // 1. Wire Rope Slings
  // ============================================
  {
    id: "wrs-001",
    categorySlug: "wire-rope-slings",
    name: "Plain Wire Rope Sling",
    sku: "WRS-PLN-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Single-leg wire rope sling for general-purpose vertical and choker lifts.",
    description:
      "Our standard plain wire rope sling, built from galvanized 6-strand wire rope over an independent wire rope core (IWRC). Suited for routine vertical, choker, and basket-hitch lifting on rig floors and laydown yards. Pressed steel ferrules are swaged to spec and proof-tested at 2x WLL.",
    workingLoadLimit: "12 metric tons (vertical)",
    material: "Galvanized 6x19 IWRC Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Diameter", value: "22 mm" },
      { label: "Length", value: "3 m (custom available)" },
      { label: "Construction", value: "6x19 IWRC" },
      { label: "Termination", value: "Flemish eye, swaged ferrule" },
      { label: "Proof Load", value: "24 metric tons" },
      { label: "Minimum Break Strength", value: "36 metric tons" },
    ],
  },
  {
    id: "wrs-002",
    categorySlug: "wire-rope-slings",
    name: "1-Leg Wire Rope Sling",
    sku: "WRS-LEG-1L",
    image: ONE_LEGGED_WIRE_ROPE_SLING_IMG,
    shortDescription:
      "Single-leg sling with eye terminations for straightforward vertical lifts.",
    description:
      "A single-leg wire rope assembly finished with soft eyes or thimble eyes at each end. Ideal for direct vertical lifting or where the load features a single lifting point. Manufactured to order with tagged capacity ratings for full traceability.",
    workingLoadLimit: "10 metric tons (vertical)",
    material: "Galvanized 6x36 IWRC Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Diameter", value: "20 mm" },
      { label: "Leg Length", value: "3 m (custom available)" },
      { label: "Construction", value: "6x36 IWRC" },
      { label: "Termination", value: "Thimble eye, swaged ferrule" },
      { label: "Proof Load", value: "20 metric tons" },
      { label: "Minimum Break Strength", value: "30 metric tons" },
    ],
  },
  {
    id: "wrs-003",
    categorySlug: "wire-rope-slings",
    name: "2-Leg Wire Rope Sling",
    sku: "WRS-LEG-2L",
    image: TWO_LEGGED_WIRE_ROPE_SLING_IMG,
    shortDescription:
      "Two-leg bridle assembly for balanced lifts on loads with dual lift points.",
    description:
      "A pre-assembled two-leg sling with a forged master link at the apex and matched legs at manufacture. Distributes load across two pick points, reducing sway and improving control during crane lifts of elongated or asymmetric loads.",
    workingLoadLimit: "16 metric tons (2-leg, 60° rigging)",
    material: "Galvanized 6x36 IWRC Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Diameter (per leg)", value: "20 mm" },
      { label: "Leg Length", value: "4 m" },
      { label: "Construction", value: "6x36 IWRC" },
      { label: "Termination", value: "Forged master link, swaged legs" },
      { label: "Proof Load", value: "32 metric tons" },
      { label: "Minimum Break Strength", value: "48 metric tons" },
    ],
  },
  {
    id: "wrs-004",
    categorySlug: "wire-rope-slings",
    name: "3-Leg Wire Rope Sling",
    sku: "WRS-LEG-3L",
    image: THREE_LEGGED_WIRE_ROPE_SLING_IMG,
    shortDescription:
      "Three-leg bridle for stable multi-point lifts of irregular or bulky loads.",
    description:
      "A factory-assembled three-leg bridle using galvanized wire rope legs, individually tagged and matched at manufacture. A forged master link at the top rated to the assembly's full working load limit keeps rigging convergence clean on multi-point lifts.",
    workingLoadLimit: "22 metric tons (3-leg, 60° rigging)",
    material: "Galvanized 6x36 IWRC Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Diameter (per leg)", value: "22 mm" },
      { label: "Leg Length", value: "5 m" },
      { label: "Construction", value: "6x36 IWRC" },
      { label: "Termination", value: "Forged master link, swaged legs" },
      { label: "Proof Load", value: "44 metric tons" },
      { label: "Minimum Break Strength", value: "66 metric tons" },
    ],
  },
  {
    id: "wrs-005",
    categorySlug: "wire-rope-slings",
    name: "4-Leg Wire Rope Sling",
    sku: "WRS-LEG-4L",
    image: FOUR_LEGGED_WIRE_ROPE_SLING_IMG,
    shortDescription:
      "Four-leg bridle for maximum stability on wide or heavy multi-point lifts.",
    description:
      "A pre-assembled four-leg bridle using compact-strand wire rope for reduced diameter and improved spooling. Each leg is individually tagged and matched at manufacture, with a forged master link rated to the assembly's full working load limit.",
    workingLoadLimit: "30 metric tons (4-leg, 60° rigging)",
    material: "Compact-Strand Galvanized Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Diameter (per leg)", value: "20 mm" },
      { label: "Leg Length", value: "5 m" },
      { label: "Construction", value: "Compact strand 6x36" },
      { label: "Termination", value: "Forged master link, swaged legs" },
      { label: "Proof Load", value: "60 metric tons" },
      { label: "Minimum Break Strength", value: "90 metric tons" },
    ],
  },
  {
    id: "wrs-006",
    categorySlug: "wire-rope-slings",
    name: "Wire Rope Ends",
    sku: "WRS-END-STD",
    image: WIRE_ENDS_IMG,
    shortDescription:
      "Pre-terminated wire rope ends for splicing, extension, or field assembly.",
    description:
      "Cut-to-length wire rope sections with factory-swaged end terminations, ready for field splicing or incorporation into custom rigging assemblies.",
    workingLoadLimit: "Varies by diameter (see spec sheet)",
    material: "Galvanized Steel Wire Rope",
    certification: "",
    status: "certified",
    specs: [
      { label: "Diameter Range", value: "8 mm – 32 mm" },
      { label: "Length", value: "Cut to order" },
      { label: "Construction", value: "6x19 / 6x36 IWRC" },
      { label: "Termination", value: "Swaged ferrule or thimble eye" },
      { label: "Proof Load", value: "2x rated WLL" },
      { label: "Marking", value: "Batch code, diameter, WLL tag" },
    ],
  },

  // ============================================
  // 2. Lifting Accessories
  // ============================================
  {
    id: "acc-001",
    categorySlug: "lifting-accessories",
    name: "Wirelock Resin Socketing System",
    sku: "ACC-WLK-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Cold-pour resin socketing compound for wire rope terminations.",
    description:
      "A two-part resin compound used to secure wire rope ends inside open or closed spelter sockets without the heat risk of molten zinc. Provides a termination efficiency of 100% of the rope's minimum breaking load when applied per manufacturer procedure.",
    workingLoadLimit: "N/A — termination compound",
    material: "Two-part epoxy resin",
    certification: "",
    status: "certified",
    specs: [
      { label: "Termination Efficiency", value: "100% of rope MBL" },
      { label: "Cure Time", value: "~20 minutes (ambient)" },
      { label: "Application", value: "Open & closed spelter sockets" },
      { label: "Shelf Life", value: "12 months, sealed" },
      { label: "Working Temp. Range", value: "-20°C to +60°C" },
    ],
  },
  {
    id: "acc-002",
    categorySlug: "lifting-accessories",
    name: "Open Spelter Socket",
    sku: "ACC-OSS-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Open-throat socket termination for wire rope, resin or white-metal poured.",
    description:
      "Forged open spelter sockets provide a compact, high-efficiency termination for wire rope ends, accepting a clevis pin for direct connection to shackles or fittings. Compatible with both resin and traditional white-metal socketing methods.",
    workingLoadLimit: "Up to 80 metric tons (size dependent)",
    material: "Forged Alloy Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Type", value: "Open (clevis) socket" },
      { label: "Rope Diameter Range", value: "10 mm – 60 mm" },
      { label: "Finish", value: "Hot-dip galvanized" },
      { label: "Termination Efficiency", value: "100% of rope MBL" },
      { label: "Marking", value: "WLL, batch code, CE" },
    ],
  },
  {
    id: "acc-003",
    categorySlug: "lifting-accessories",
    name: "Closed Spelter Socket",
    sku: "ACC-CSS-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Closed-loop socket termination for direct pin or shackle connection.",
    description:
      "A fully enclosed spelter socket providing a rounded bearing surface for direct connection to a pin, hook, or shackle bow without an intermediate clevis pin. Preferred where a smoother load path or reduced fitting count is required.",
    workingLoadLimit: "Up to 100 metric tons (size dependent)",
    material: "Forged Alloy Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Type", value: "Closed socket" },
      { label: "Rope Diameter Range", value: "10 mm – 64 mm" },
      { label: "Finish", value: "Hot-dip galvanized" },
      { label: "Termination Efficiency", value: "100% of rope MBL" },
      { label: "Marking", value: "WLL, batch code, CE" },
    ],
  },
  {
    id: "acc-004",
    categorySlug: "lifting-accessories",
    name: "Bow Shackle, Screw Pin",
    sku: "ACC-SHK-BOW",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "General rigging shackle with wide bow profile for multi-directional loading.",
    description:
      "Our most-specified shackle for general rigging work. The wide bow accommodates multi-leg sling configurations and angular loading without exceeding rated capacity. Forged in one piece from alloy steel, quenched and tempered, with a hot-dip galvanized finish.",
    workingLoadLimit: "9.5 metric tons",
    material: "Forged Alloy Steel, Galvanized",
    certification: "",
    status: "certified",
    specs: [
      { label: "Type", value: "Bow, Screw Pin" },
      { label: "Pin Diameter", value: "22 mm" },
      { label: "Body Diameter", value: "19 mm" },
      { label: "Finish", value: "Hot-dip galvanized" },
      { label: "Proof Load", value: "4x WLL" },
      { label: "Marking", value: "WLL, batch code, CE" },
    ],
  },
  {
    id: "acc-005",
    categorySlug: "lifting-accessories",
    name: "Wire Rope Clips (U-Bolt Grips)",
    sku: "ACC-CLP-UBT",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Drop-forged U-bolt clips for field termination of wire rope ends.",
    description:
      "Drop-forged wire rope clips used to form eyes or secure rope ends in field assemblies. Sold individually or in matched sets, with saddle and U-bolt design to minimize rope damage while maintaining strong mechanical grip.",
    workingLoadLimit: "Varies by rope diameter",
    material: "Drop-forged Carbon Steel, Galvanized",
    certification: "",
    status: "certified",
    specs: [
      { label: "Rope Diameter Range", value: "6 mm – 40 mm" },
      { label: "Finish", value: "Hot-dip galvanized" },
      { label: "Termination Efficiency", value: "~80% of rope MBL (3+ clips)" },
      { label: "Standard", value: "DIN 1142 / US Fed. Spec" },
    ],
  },
  {
    id: "acc-006",
    categorySlug: "lifting-accessories",
    name: "Alloy Master Link",
    sku: "ACC-MLK-ALY",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Single-piece forged master link for multi-leg sling and bridle convergence.",
    description:
      "The convergence point for multi-leg slings and bridles. Forged as a single piece with no welds, this master link is the structural heart of complex rigging setups and is individually serialized for lifecycle tracking.",
    workingLoadLimit: "Up to 100 metric tons (size dependent)",
    material: "Forged Alloy Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Bore Diameter", value: "80 mm – 150 mm" },
      { label: "Construction", value: "Single-piece forged, no welds" },
      { label: "Finish", value: "Painted or galvanized" },
      { label: "Proof Load", value: "2x WLL" },
      { label: "Marking", value: "Serial number, WLL, CE" },
    ],
  },
  {
    id: "acc-007",
    categorySlug: "lifting-accessories",
    name: "Swivel Hoist Hook, Safety Latch",
    sku: "ACC-HK-SWV",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Swivel-mounted hook with spring safety latch for general lifting duties.",
    description:
      "A forged hoist hook with 360° swivel and integrated spring-loaded safety latch to prevent accidental load disengagement. Suitable for chain blocks, wire rope assemblies, and crane end-fittings across general rigging applications.",
    workingLoadLimit: "8 metric tons",
    material: "Forged Alloy Steel",
    certification: "",
    status: "certified",
    specs: [
      { label: "Throat Opening", value: "40 mm" },
      { label: "Latch Type", value: "Spring safety latch" },
      { label: "Swivel", value: "360°, ball-bearing mounted" },
      { label: "Finish", value: "Zinc plated" },
      { label: "Proof Load", value: "2x WLL" },
    ],
  },
  {
    id: "acc-008",
    categorySlug: "lifting-accessories",
    name: "Hand Chain Block",
    sku: "ACC-CHB-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Manually operated chain hoist for workshop and field lifting tasks.",
    description:
      "A compact hand chain block with load-limiting brake mechanism, used for manual vertical lifting in workshops, laydown yards, and field maintenance work where powered hoisting isn't available or practical.",
    workingLoadLimit: "5 metric tons",
    material: "Steel housing, hardened load chain",
    certification: "",
    status: "certified",
    specs: [
      { label: "Lift Height", value: "3 m (standard, custom available)" },
      { label: "Chain Falls", value: "Single or double, size dependent" },
      { label: "Brake Type", value: "Automatic load brake" },
      { label: "Housing", value: "Powder-coated steel" },
      { label: "Overload Protection", value: "Friction disc brake" },
    ],
  },
  {
    id: "acc-009",
    categorySlug: "lifting-accessories",
    name: "Beam Trolley, Push Type",
    sku: "ACC-TRL-PSH",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Manually pushed trolley for mounting chain blocks on I-beam runways.",
    description:
      "A geared or push-type trolley designed to run along the bottom flange of an I-beam, carrying a chain block or hoist along the length of a runway beam. Adjustable wheelbase accommodates a range of beam flange widths.",
    workingLoadLimit: "5 metric tons",
    material: "Steel frame, hardened steel wheels",
    certification: "",
    status: "certified",
    specs: [
      { label: "Beam Flange Width", value: "82 mm – 300 mm (adjustable)" },
      { label: "Wheel Type", value: "Hardened steel, flanged" },
      { label: "Operation", value: "Manual push" },
      { label: "Finish", value: "Powder-coated steel" },
    ],
  },

  // ============================================
  // 3. Webbing Slings
  // ============================================
  {
    id: "web-001",
    categorySlug: "webbing-slings",
    name: "Flat Webbing Sling",
    sku: "WEB-FLT-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Flat woven polyester sling for load-friendly, mark-free lifting.",
    description:
      "A flat, high-tenacity polyester webbing sling designed to protect delicate or coated load surfaces from the marking and abrasion that chain or wire rope can cause. Color-coded by capacity for quick visual identification on site.",
    workingLoadLimit: "3 metric tons (vertical)",
    material: "High-tenacity Polyester Webbing",
    certification: "",
    status: "certified",
    specs: [
      { label: "Width", value: "90 mm" },
      { label: "Length", value: "3 m (custom available)" },
      { label: "Construction", value: "Duplex flat weave" },
      { label: "Termination", value: "Soft eye, reinforced" },
      { label: "Elongation at WLL", value: "≤ 3%" },
      { label: "Color Code", value: "Green (per EN 1492-1)" },
    ],
  },
  {
    id: "web-002",
    categorySlug: "webbing-slings",
    name: "Round Webbing Sling",
    sku: "WEB-RND-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Endless round sling with protective outer sleeve over load-bearing core yarns.",
    description:
      "An endless round sling constructed from continuous polyester yarns encased in a durable woven sleeve. The circular form allows the sling to rotate freely under load, distributing wear and extending service life compared to flat slings in choker configurations.",
    workingLoadLimit: "5 metric tons (vertical)",
    material: "Polyester Core Yarns, Polyester Sleeve",
    certification: "",
    status: "certified",
    specs: [
      { label: "Circumference", value: "3 m (custom available)" },
      { label: "Construction", value: "Endless round, protective sleeve" },
      { label: "Elongation at WLL", value: "≤ 3%" },
      { label: "Color Code", value: "Brown (per EN 1492-2)" },
      { label: "Working Temp. Range", value: "-40°C to +100°C" },
    ],
  },
  {
    id: "web-003",
    categorySlug: "webbing-slings",
    name: "Ratchet Strap Tie-Down",
    sku: "WEB-RCH-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Ratchet-tensioned webbing strap for load securing and cargo tie-down.",
    description:
      "A polyester webbing strap fitted with a ratchet tensioning mechanism for securing cargo during transport. Available with a variety of end fittings (flat hook, J-hook, ring) to suit different anchor points on flatbeds and transport frames.",
    workingLoadLimit: "2.5 metric tons (lashing capacity, LC)",
    material: "Polyester Webbing, Steel Ratchet",
    certification: "",
    status: "certified",
    specs: [
      { label: "Width", value: "50 mm" },
      { label: "Length", value: "6 m (custom available)" },
      { label: "Ratchet Type", value: "Long-handle, over-center" },
      { label: "End Fitting", value: "Flat hook / J-hook / ring" },
      { label: "Lashing Capacity (LC)", value: "2.5 metric tons" },
    ],
  },

  // ============================================
  // 4. Offshore Containers
  // ============================================
  {
    id: "ofc-001",
    categorySlug: "offshore-containers",
    name: "Offshore Cargo Container",
    sku: "OFC-CRG-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "DNV-certified enclosed cargo container for offshore supply vessel transport.",
    description:
      "A fully enclosed offshore cargo container built for repeated crane lifts between supply vessels and platforms. Weatherproof construction protects contents from splash and spray, with corner-post lifting sets rated for the container's full gross weight.",
    workingLoadLimit: "10 metric tons (gross)",
    material: "Structural steel, marine-grade coating",
    certification: "",
    status: "certified",
    specs: [
      { label: "External Dimensions", value: "6.06 x 2.44 x 2.59 m" },
      { label: "Tare Weight", value: "2.2 metric tons" },
      { label: "Lifting Points", value: "4x corner lift sets" },
      { label: "Finish", value: "Marine-grade primer + enamel" },
      { label: "Certification", value: "DNV 2.7-1 / EN 12079" },
    ],
  },
  {
    id: "ofc-002",
    categorySlug: "offshore-containers",
    name: "Open Top Container",
    sku: "OFC-OPT-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Open-top offshore container for oversized or top-loaded cargo.",
    description:
      "An open-top variant of our offshore container range, suited for cargo that exceeds standard enclosed container height or requires top-loading access by crane. Removable tarpaulin cover available for weather protection during transit.",
    workingLoadLimit: "8 metric tons (gross)",
    material: "Structural steel, marine-grade coating",
    certification: "",
    status: "certified",
    specs: [
      { label: "External Dimensions", value: "6.06 x 2.44 x 2.20 m" },
      { label: "Tare Weight", value: "2.0 metric tons" },
      { label: "Lifting Points", value: "4x corner lift sets" },
      { label: "Cover", value: "Removable tarpaulin (optional)" },
      { label: "Certification", value: "DNV 2.7-1 / EN 12079" },
    ],
  },
  {
    id: "ofc-003",
    categorySlug: "offshore-containers",
    name: "Offshore Lifting Frame",
    sku: "OFC-FRM-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Purpose-built structural frame for lifting irregular or unpackaged equipment.",
    description:
      "A custom-engineered lifting frame for equipment that doesn't fit standard container dimensions or requires a dedicated rigid lifting structure. Designed and certified per DNV standards for offshore crane operations.",
    workingLoadLimit: "15 metric tons",
    material: "Structural steel, marine-grade coating",
    certification: "",
    status: "certified",
    specs: [
      { label: "Configuration", value: "4-point lift, custom dimensions" },
      { label: "Design", value: "Engineered to load specification" },
      { label: "Finish", value: "Marine-grade primer + enamel" },
      { label: "Proof Load", value: "1.25x WLL" },
      { label: "Certification", value: "DNV 2.7-1" },
    ],
  },
  {
    id: "ofc-004",
    categorySlug: "offshore-containers",
    name: "Personnel Transfer Basket",
    sku: "OFC-PBK-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Certified personnel basket for safe crane transfer of crew offshore.",
    description:
      "A DNV-certified personnel basket for transferring crew between vessels and offshore platforms by crane. Features perimeter safety netting, non-slip deck, and grab rails, with a rated safe working load calculated for personnel plus equipment.",
    workingLoadLimit: "12 personnel (rated safe working load)",
    material: "Structural steel frame, safety netting",
    certification: "",
    status: "certified",
    specs: [
      { label: "Capacity", value: "12 personnel" },
      { label: "Deck", value: "Non-slip perforated steel" },
      { label: "Perimeter", value: "Safety netting + grab rails" },
      { label: "Suspension", value: "4-point bridle, swivel" },
      { label: "Certification", value: "DNV 2.13" },
    ],
  },
  {
    id: "ofc-005",
    categorySlug: "offshore-containers",
    name: "Spreader Beam",
    sku: "OFC-SPB-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Structural spreader beam for controlled wide-load lifts on deck and quayside.",
    description:
      "A fabricated spreader beam that eliminates the bending moments and sling-angle penalties that come with single-point lifts of long or wide loads. Each beam is individually rated and calibrated as a complete assembly.",
    workingLoadLimit: "25 metric tons",
    material: "Structural steel, painted finish",
    certification: "",
    status: "certified",
    specs: [
      { label: "Span", value: "6 m (custom available)" },
      { label: "Configuration", value: "2-point top, 2-point bottom" },
      { label: "Material", value: "Structural steel I-beam" },
      { label: "Finish", value: "Marine-grade primer + enamel" },
      { label: "Proof Load", value: "1.25x WLL" },
    ],
  },
  {
    id: "ofc-006",
    categorySlug: "offshore-containers",
    name: "Pad Eyes",
    sku: "OFC-PDE-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Welded lifting pad eyes for permanent or semi-permanent structural attachment points.",
    description:
      "Engineered pad eyes for welding onto containers, frames, and skids to provide certified lifting or lashing points. Supplied with full weld procedure specifications and load test certification for each batch.",
    workingLoadLimit: "Up to 20 metric tons (size dependent)",
    material: "Structural steel plate",
    certification: "",
    status: "certified",
    specs: [
      { label: "Pin Hole Diameter", value: "As per shackle spec" },
      { label: "Plate Thickness", value: "20 mm – 50 mm" },
      { label: "Attachment", value: "Full-penetration weld" },
      { label: "Finish", value: "Primed, ready to weld" },
      { label: "Certification", value: "DNV 2.7-1 design approval" },
    ],
  },

  // ============================================
  // 5. PPE
  // ============================================
  {
    id: "ppe-001",
    categorySlug: "ppe",
    name: "One-Piece Coverall",
    sku: "PPE-CVL-1PC",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Flame-retardant one-piece coverall for rig floor and workshop personnel.",
    description:
      "A durable, flame-retardant one-piece coverall designed for full-shift wear in rig floor and workshop environments. Reinforced stitching at high-wear points and reflective strips for low-visibility conditions.",
    workingLoadLimit: "N/A",
    material: "Flame-retardant cotton blend",
    certification: "",
    status: "certified",
    specs: [
      { label: "Sizes Available", value: "S – 4XL" },
      { label: "Closure", value: "Concealed zip, snap studs" },
      { label: "Reflective Strips", value: "Chest, arms, legs" },
      { label: "Certification", value: "EN ISO 11612 (heat & flame)" },
      { label: "Additional Rating", value: "EN 1149-5 (antistatic)" },
    ],
  },
  {
    id: "ppe-002",
    categorySlug: "ppe",
    name: "Two-Piece Coverall (Jacket & Trouser)",
    sku: "PPE-CVL-2PC",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Flame-retardant jacket-and-trouser set for flexible layering and mobility.",
    description:
      "A two-piece alternative to the standard coverall, offering separate jacket and trouser components for greater flexibility in hot climates or layered cold-weather wear. Matches the same flame-retardant and antistatic rating as our one-piece coverall.",
    workingLoadLimit: "N/A",
    material: "Flame-retardant cotton blend",
    certification: "",
    status: "certified",
    specs: [
      { label: "Sizes Available", value: "S – 4XL" },
      { label: "Components", value: "Jacket + trouser, sold as set" },
      { label: "Reflective Strips", value: "Chest, arms, legs" },
      { label: "Certification", value: "EN ISO 11612 (heat & flame)" },
      { label: "Additional Rating", value: "EN 1149-5 (antistatic)" },
    ],
  },
  {
    id: "ppe-003",
    categorySlug: "ppe",
    name: "Safety Helmet",
    sku: "PPE-HLM-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Industrial safety helmet with adjustable harness and chin strap.",
    description:
      "An impact- and penetration-resistant safety helmet for general industrial and rig floor use. Adjustable ratchet harness and four-point chin strap ensure secure fit across a full shift, with accessory slots for face shields and ear defenders.",
    workingLoadLimit: "N/A",
    material: "High-density polyethylene (HDPE) shell",
    certification: "",
    status: "certified",
    specs: [
      { label: "Shell Material", value: "HDPE" },
      { label: "Harness", value: "Ratchet, 6-point" },
      { label: "Chin Strap", value: "4-point, quick release" },
      { label: "Accessory Slots", value: "Visor & ear defender mounts" },
      { label: "Certification", value: "EN 397 / ANSI Z89.1" },
    ],
  },
  {
    id: "ppe-004",
    categorySlug: "ppe",
    name: "Safety Shoes / Boots",
    sku: "PPE-SHO-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Steel-toe safety boots with slip-resistant sole for rig floor conditions.",
    description:
      "Steel toe-cap safety boots built for wet, oily, and uneven rig floor surfaces. Puncture-resistant midsole and slip-resistant rubber outsole provide protection against common industrial foot hazards.",
    workingLoadLimit: "N/A",
    material: "Leather upper, steel toe cap, rubber sole",
    certification: "",
    status: "certified",
    specs: [
      { label: "Toe Protection", value: "Steel toe cap (200 J impact)" },
      { label: "Midsole", value: "Puncture-resistant" },
      { label: "Outsole", value: "Slip-resistant rubber, oil-resistant" },
      { label: "Sizes Available", value: "38 – 47 (EU)" },
      { label: "Certification", value: "EN ISO 20345 S3" },
    ],
  },
  {
    id: "ppe-005",
    categorySlug: "ppe",
    name: "Safety Gloves",
    sku: "PPE-GLV-STD",
    image: PLACEHOLDER_IMG,
    shortDescription:
      "Cut- and abrasion-resistant gloves for rigging and general handling tasks.",
    description:
      "General-purpose rigging gloves offering cut, abrasion, and puncture resistance while preserving grip and dexterity for handling wire rope, shackles, and rigging hardware. Reinforced palm and fingertip panels extend service life.",
    workingLoadLimit: "N/A",
    material: "HPPE knit shell, nitrile palm coating",
    certification: "",
    status: "certified",
    specs: [
      { label: "Cut Resistance", value: "EN 388 Level C" },
      { label: "Coating", value: "Nitrile palm & fingertip" },
      { label: "Sizes Available", value: "S – XXL" },
      { label: "Grip", value: "Textured nitrile, wet & dry" },
      { label: "Certification", value: "EN 388" },
    ],
  },
];

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug);

export const getProductById = (id: string) => products.find((p) => p.id === id);





