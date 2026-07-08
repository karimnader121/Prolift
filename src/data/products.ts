import type { Product } from "../types";

export const products: Product[] = [
  // Wire Rope Slings
  {
    id: "wrs-001",
    categorySlug: "wire-rope-slings",
    name: "6x19 IWRC Standard Eye Sling",
    sku: "WRS-6019-EE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP76LWSh8eaTJJfyYqza5a7GPs-n_w1j7QbJQFru9xNV-hgA71dFYLDPwfHNKwYcH6nEga1K8fu50JUKMUwhImjixLQb2YEe9UHPFkKM-PKimnPd7UnVjMKKVf-TAkdai9LcbYUyuB-eeHllVEHBSTqHjkekSS9U9SERdSB9PXNnc0TsSYZcpqIkCeDKAiWDMIK_kEtV-aqwER7UkkeecGdzS9BpHstAvDXoPt0r-FALQKxzwx6ytXosLrj65A8PXR8ouC5ZEtexk",
    shortDescription:
      "General-purpose eye-and-eye sling for routine lifting on rig floors and laydown yards.",
    description:
      "The workhorse of our sling line. Six-strand, nineteen-wire construction over an independent wire rope core gives this sling excellent crush resistance and fatigue life under repeated cyclic loading. Pressed steel sleeves are swaged to spec and proof-tested at 2x WLL before certification.",
    workingLoadLimit: "12 metric tons (vertical)",
    material: "Galvanized 6x19 IWRC Steel",
    certification: "ISO 9001:2015 / EN 13414-1",
    status: "certified",
    specs: [
      { label: "Diameter", value: "22 mm" },
      { label: "Length", value: "3 m (custom available)" },
      { label: "Construction", value: "6x19 IWRC" },
      { label: "Termination", value: "Flemish eye, swaged sleeve" },
      { label: "Proof Load", value: "24 metric tons" },
      { label: "Minimum Break Strength", value: "36 metric tons" },
    ],
  },
  {
    id: "wrs-002",
    categorySlug: "wire-rope-slings",
    name: "Heavy-Duty Grommet Sling",
    sku: "WRS-GRM-HD",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP76LWSh8eaTJJfyYqza5a7GPs-n_w1j7QbJQFru9xNV-hgA71dFYLDPwfHNKwYcH6nEga1K8fu50JUKMUwhImjixLQb2YEe9UHPFkKM-PKimnPd7UnVjMKKVf-TAkdai9LcbYUyuB-eeHllVEHBSTqHjkekSS9U9SERdSB9PXNnc0TsSYZcpqIkCeDKAiWDMIK_kEtV-aqwER7UkkeecGdzS9BpHstAvDXoPt0r-FALQKxzwx6ytXosLrj65A8PXR8ouC5ZEtexk",
    shortDescription:
      "Endless grommet construction for heavy lift slinging where eye terminations are impractical.",
    description:
      "Wound from a single length of wire rope into a continuous loop, the grommet sling distributes load evenly across its full circumference. Preferred for heavy-lift operations involving spreader bars and multi-point rigging where flexibility and abrasion resistance are critical.",
    workingLoadLimit: "40 metric tons (vertical)",
    material: "Galvanized 6-strand Steel, Endless Wound",
    certification: "ISO 9001:2015 / EN 13414-1",
    status: "certified",
    specs: [
      { label: "Diameter", value: "48 mm" },
      { label: "Circumference", value: "6 m (custom available)" },
      { label: "Construction", value: "Endless wound grommet" },
      { label: "Termination", value: "None — continuous loop" },
      { label: "Proof Load", value: "80 metric tons" },
      { label: "Minimum Break Strength", value: "120 metric tons" },
    ],
  },
  {
    id: "wrs-003",
    categorySlug: "wire-rope-slings",
    name: "Corrosion-Resistant Offshore Sling",
    sku: "WRS-CR-OFS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP76LWSh8eaTJJfyYqza5a7GPs-n_w1j7QbJQFru9xNV-hgA71dFYLDPwfHNKwYcH6nEga1K8fu50JUKMUwhImjixLQb2YEe9UHPFkKM-PKimnPd7UnVjMKKVf-TAkdai9LcbYUyuB-eeHllVEHBSTqHjkekSS9U9SERdSB9PXNnc0TsSYZcpqIkCeDKAiWDMIK_kEtV-aqwER7UkkeecGdzS9BpHstAvDXoPt0r-FALQKxzwx6ytXosLrj65A8PXR8ouC5ZEtexk",
    shortDescription:
      "Type 316 stainless core wire with double galvanized outer strands for splash-zone service.",
    description:
      "Engineered specifically for offshore platforms and marine environments, this sling pairs a stainless-core wire rope with a heavily galvanized outer strand to resist salt-induced corrosion without sacrificing flexibility. Recommended for splash-zone and subsea-adjacent lifting tasks.",
    workingLoadLimit: "18 metric tons (vertical)",
    material: "316 Stainless Core / Galvanized Outer Strands",
    certification: "ISO 9001:2015 / DNV-GL",
    status: "certified",
    specs: [
      { label: "Diameter", value: "26 mm" },
      { label: "Length", value: "4 m (custom available)" },
      { label: "Construction", value: "6x36 IWRC" },
      { label: "Termination", value: "Mechanical splice, thimble eye" },
      { label: "Proof Load", value: "36 metric tons" },
      { label: "Minimum Break Strength", value: "54 metric tons" },
    ],
  },
  {
    id: "wrs-004",
    categorySlug: "wire-rope-slings",
    name: "Compact-Strand Bridle Sling, 4-Leg",
    sku: "WRS-BRD-4L",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP76LWSh8eaTJJfyYqza5a7GPs-n_w1j7QbJQFru9xNV-hgA71dFYLDPwfHNKwYcH6nEga1K8fu50JUKMUwhImjixLQb2YEe9UHPFkKM-PKimnPd7UnVjMKKVf-TAkdai9LcbYUyuB-eeHllVEHBSTqHjkekSS9U9SERdSB9PXNnc0TsSYZcpqIkCeDKAiWDMIK_kEtV-aqwER7UkkeecGdzS9BpHstAvDXoPt0r-FALQKxzwx6ytXosLrj65A8PXR8ouC5ZEtexk",
    shortDescription:
      "Pre-assembled 4-leg bridle for stable multi-point lifts of irregular loads.",
    description:
      "A factory-assembled four-leg bridle using compact-strand wire rope for reduced diameter and improved spooling. Each leg is individually tagged and matched at manufacture, with a forged master link rated to the assembly's full working load limit.",
    workingLoadLimit: "30 metric tons (4-leg, 60° rigging)",
    material: "Compact-Strand Galvanized Steel",
    certification: "ISO 9001:2015 / EN 13414-1",
    status: "maintenance",
    specs: [
      { label: "Diameter (per leg)", value: "20 mm" },
      { label: "Leg Length", value: "5 m" },
      { label: "Construction", value: "Compact strand 6x36" },
      { label: "Termination", value: "Forged master link, swaged legs" },
      { label: "Proof Load", value: "60 metric tons" },
      { label: "Minimum Break Strength", value: "90 metric tons" },
    ],
  },

  // Industrial Shackles
  {
    id: "ish-001",
    categorySlug: "industrial-shackles",
    name: "Bow Shackle, Screw Pin",
    sku: "ISH-BOW-SP",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf3WKssD25hJUosYM9IM5tMzXZMSOrGALKkHOnaMIY_GdjPRQ_iA_uptNWe3tFrJxPf4kEVFGd5E1wZJeWWI3HXhTLNu6GBddLnTxMxwgJ3iZU0NVAkfz06U3Z_jrDYDy5U8tAboHuik2UyS1S68TC6kJ6vxj7Wc7XJWDCDsJFqIVIDcM96Y2fIgzmeRTd7Nd3VMoqVNLwtFcfJi1IonInVtnhsrsbWlVj2tY-9YRAZXFkbI0UrXmzvoSGMJYzSixGsaTZb-XCtYo",
    shortDescription:
      "General rigging shackle with wide bow profile for multi-directional loading.",
    description:
      "Our most-specified shackle for general rigging work. The wide bow accommodates multi-leg sling configurations and angular loading without exceeding rated capacity. Forged in one piece from alloy steel, quenched and tempered, with a hot-dip galvanized finish.",
    workingLoadLimit: "9.5 metric tons",
    material: "Forged Alloy Steel, Galvanized",
    certification: "ISO 9001:2015 / EN 13889",
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
    id: "ish-002",
    categorySlug: "industrial-shackles",
    name: "Dee Shackle, Safety Bolt",
    sku: "ISH-DEE-SB",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf3WKssD25hJUosYM9IM5tMzXZMSOrGALKkHOnaMIY_GdjPRQ_iA_uptNWe3tFrJxPf4kEVFGd5E1wZJeWWI3HXhTLNu6GBddLnTxMxwgJ3iZU0NVAkfz06U3Z_jrDYDy5U8tAboHuik2UyS1S68TC6kJ6vxj7Wc7XJWDCDsJFqIVIDcM96Y2fIgzmeRTd7Nd3VMoqVNLwtFcfJi1IonInVtnhsrsbWlVj2tY-9YRAZXFkbI0UrXmzvoSGMJYzSixGsaTZb-XCtYo",
    shortDescription:
      "Narrow dee profile with safety bolt and locking nut for permanent or semi-permanent installs.",
    description:
      "The dee profile keeps loading in-line for inline rigging applications, while the safety-bolt pin with locking nut and cotter pin prevents accidental loosening under vibration — the standard choice for semi-permanent anchor points on rig structures.",
    workingLoadLimit: "25 metric tons",
    material: "Forged Alloy Steel, Galvanized",
    certification: "ISO 9001:2015 / EN 13889",
    status: "certified",
    specs: [
      { label: "Type", value: "Dee, Safety Bolt" },
      { label: "Pin Diameter", value: "32 mm" },
      { label: "Body Diameter", value: "28 mm" },
      { label: "Finish", value: "Hot-dip galvanized" },
      { label: "Proof Load", value: "4x WLL" },
      { label: "Marking", value: "WLL, batch code, CE" },
    ],
  },
  {
    id: "ish-003",
    categorySlug: "industrial-shackles",
    name: "Heavy-Lift Bolt-Type Shackle",
    sku: "ISH-HL-BT",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf3WKssD25hJUosYM9IM5tMzXZMSOrGALKkHOnaMIY_GdjPRQ_iA_uptNWe3tFrJxPf4kEVFGd5E1wZJeWWI3HXhTLNu6GBddLnTxMxwgJ3iZU0NVAkfz06U3Z_jrDYDy5U8tAboHuik2UyS1S68TC6kJ6vxj7Wc7XJWDCDsJFqIVIDcM96Y2fIgzmeRTd7Nd3VMoqVNLwtFcfJi1IonInVtnhsrsbWlVj2tY-9YRAZXFkbI0UrXmzvoSGMJYzSixGsaTZb-XCtYo",
    shortDescription:
      "Maximum-capacity bow shackle for heavy-lift crane operations up to 500 tons.",
    description:
      "When you're rigging the largest module lifts, this is the shackle that holds the system together. Bolt, nut, and cotter pin assembly resists rotation under dynamic loading, and every unit ships with individual proof-test certification traceable by serial number.",
    workingLoadLimit: "500 metric tons",
    material: "Forged Alloy Steel, Painted Finish",
    certification: "ISO 9001:2015 / DNV 2.7-1",
    status: "certified",
    specs: [
      { label: "Type", value: "Bow, Bolt-Type" },
      { label: "Pin Diameter", value: "180 mm" },
      { label: "Body Diameter", value: "165 mm" },
      { label: "Finish", value: "Red oxide primer + enamel" },
      { label: "Proof Load", value: "2.5x WLL (per DNV)" },
      { label: "Marking", value: "WLL, serial number, DNV cert" },
    ],
  },
  {
    id: "ish-004",
    categorySlug: "industrial-shackles",
    name: "Anchor Shackle, Round Pin",
    sku: "ISH-ANC-RP",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf3WKssD25hJUosYM9IM5tMzXZMSOrGALKkHOnaMIY_GdjPRQ_iA_uptNWe3tFrJxPf4kEVFGd5E1wZJeWWI3HXhTLNu6GBddLnTxMxwgJ3iZU0NVAkfz06U3Z_jrDYDy5U8tAboHuik2UyS1S68TC6kJ6vxj7Wc7XJWDCDsJFqIVIDcM96Y2fIgzmeRTd7Nd3VMoqVNLwtFcfJi1IonInVtnhsrsbWlVj2tY-9YRAZXFkbI0UrXmzvoSGMJYzSixGsaTZb-XCtYo",
    shortDescription:
      "Lightweight round-pin shackle for low-load tie-down and anchoring tasks.",
    description:
      "A lighter-duty shackle for non-critical anchoring and tie-down applications where load direction stays constant. Round pin design allows quick assembly and disassembly without tools, ideal for temporary rigging setups in laydown yards.",
    workingLoadLimit: "3.25 metric tons",
    material: "Forged Carbon Steel, Galvanized",
    certification: "ISO 9001:2015",
    status: "out-of-service",
    specs: [
      { label: "Type", value: "Anchor, Round Pin" },
      { label: "Pin Diameter", value: "14 mm" },
      { label: "Body Diameter", value: "12 mm" },
      { label: "Finish", value: "Hot-dip galvanized" },
      { label: "Proof Load", value: "2x WLL" },
      { label: "Marking", value: "WLL, batch code" },
    ],
  },

  // Hydraulic Hoists
  {
    id: "hyd-001",
    categorySlug: "hydraulic-hoists",
    name: "Compact Hydraulic Hoist, 5T",
    sku: "HYD-CMP-05",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgHPNPJp4TBiX_uMC5h2bOQlEvgmTM3Kcj4EODtJyW4P-eIdKOLyQgjGUCIxMIYAzr6XWChnVmwU0RXc61rw9aKk7j_gFt5LIYBOqzZdofXuXXvXVZ7J8FA6h-6wrT0AZjxDPH5QSxhPdhccBbYGoC2D6QSFb3-EMwMCzpTiIEzXdp1mLqu_ndCE9ZNJCCI0NYUKk38womitKTNYmAF2cyT9VwBZk5qyrUc6WAhFgIciclglLjQQ1UjarwgUW3ENa7MblFcNpEej8",
    shortDescription:
      "Compact-footprint hoist for confined-space vertical lifting on rig floors.",
    description:
      "Designed to fit where electric chain hoists can't, this compact hydraulic unit delivers full lifting force from a remote pump station, keeping ignition sources away from the load zone. A natural fit for wellhead maintenance and BOP-deck lifting tasks.",
    workingLoadLimit: "5 metric tons",
    material: "Steel housing, chromed piston rod",
    certification: "ISO 9001:2015 / ATEX Zone 1",
    status: "certified",
    specs: [
      { label: "Lift Height", value: "1.2 m" },
      { label: "Operating Pressure", value: "210 bar" },
      { label: "Control", value: "Remote pendant, hydraulic" },
      { label: "Housing", value: "Spark-resistant coated steel" },
      { label: "Overload Protection", value: "Integrated relief valve" },
      { label: "Duty Cycle", value: "Continuous" },
    ],
  },
  {
    id: "hyd-002",
    categorySlug: "hydraulic-hoists",
    name: "Heavy Hydraulic Hoist, 50T",
    sku: "HYD-HVY-50",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgHPNPJp4TBiX_uMC5h2bOQlEvgmTM3Kcj4EODtJyW4P-eIdKOLyQgjGUCIxMIYAzr6XWChnVmwU0RXc61rw9aKk7j_gFt5LIYBOqzZdofXuXXvXVZ7J8FA6h-6wrT0AZjxDPH5QSxhPdhccBbYGoC2D6QSFb3-EMwMCzpTiIEzXdp1mLqu_ndCE9ZNJCCI0NYUKk38womitKTNYmAF2cyT9VwBZk5qyrUc6WAhFgIciclglLjQQ1UjarwgUW3ENa7MblFcNpEej8",
    shortDescription:
      "Maximum-capacity hoist for module lifts and heavy equipment installation.",
    description:
      "Our largest hydraulic hoist platform, built for module installation and heavy machinery placement where electric alternatives can't deliver the required force in a compact envelope. Dual-stage cylinder design provides smooth, stall-free lifting through the full stroke.",
    workingLoadLimit: "50 metric tons",
    material: "Steel housing, hardened piston rod",
    certification: "ISO 9001:2015 / ATEX Zone 1",
    status: "certified",
    specs: [
      { label: "Lift Height", value: "2.5 m" },
      { label: "Operating Pressure", value: "350 bar" },
      { label: "Control", value: "Remote pendant, hydraulic" },
      { label: "Housing", value: "Spark-resistant coated steel" },
      { label: "Overload Protection", value: "Dual relief valve system" },
      { label: "Duty Cycle", value: "Continuous" },
    ],
  },
  {
    id: "hyd-003",
    categorySlug: "hydraulic-hoists",
    name: "Subsea-Rated Hoist Unit, 20T",
    sku: "HYD-SUB-20",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgHPNPJp4TBiX_uMC5h2bOQlEvgmTM3Kcj4EODtJyW4P-eIdKOLyQgjGUCIxMIYAzr6XWChnVmwU0RXc61rw9aKk7j_gFt5LIYBOqzZdofXuXXvXVZ7J8FA6h-6wrT0AZjxDPH5QSxhPdhccBbYGoC2D6QSFb3-EMwMCzpTiIEzXdp1mLqu_ndCE9ZNJCCI0NYUKk38womitKTNYmAF2cyT9VwBZk5qyrUc6WAhFgIciclglLjQQ1UjarwgUW3ENa7MblFcNpEej8",
    shortDescription:
      "Pressure-sealed hoist for subsea deployment and splash-zone lifting tasks.",
    description:
      "A fully sealed unit rated for direct seawater exposure, used in subsea module handling and splash-zone lifting where standard hoists would corrode or flood. Pressure-balanced seals maintain function at depth, with corrosion-resistant alloy fasteners throughout.",
    workingLoadLimit: "20 metric tons",
    material: "Marine-grade alloy housing",
    certification: "ISO 9001:2015 / DNV-GL",
    status: "maintenance",
    specs: [
      { label: "Lift Height", value: "1.8 m" },
      { label: "Operating Pressure", value: "280 bar" },
      { label: "Depth Rating", value: "300 m" },
      { label: "Housing", value: "Marine-grade alloy, sealed" },
      { label: "Overload Protection", value: "Integrated relief valve" },
      { label: "Duty Cycle", value: "Continuous" },
    ],
  },
  {
    id: "hyd-004",
    categorySlug: "hydraulic-hoists",
    name: "Portable Hydraulic Hoist, 2T",
    sku: "HYD-PRT-02",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgHPNPJp4TBiX_uMC5h2bOQlEvgmTM3Kcj4EODtJyW4P-eIdKOLyQgjGUCIxMIYAzr6XWChnVmwU0RXc61rw9aKk7j_gFt5LIYBOqzZdofXuXXvXVZ7J8FA6h-6wrT0AZjxDPH5QSxhPdhccBbYGoC2D6QSFb3-EMwMCzpTiIEzXdp1mLqu_ndCE9ZNJCCI0NYUKk38womitKTNYmAF2cyT9VwBZk5qyrUc6WAhFgIciclglLjQQ1UjarwgUW3ENa7MblFcNpEej8",
    shortDescription:
      "Lightweight portable unit for maintenance crews and field service work.",
    description:
      "Built into a rugged carry frame with an integrated hand-pump option, this portable hoist gives maintenance crews full lifting capability without needing a fixed power source — ideal for field service and remote well-pad work.",
    workingLoadLimit: "2 metric tons",
    material: "Aluminum-steel composite housing",
    certification: "ISO 9001:2015",
    status: "certified",
    specs: [
      { label: "Lift Height", value: "0.8 m" },
      { label: "Operating Pressure", value: "180 bar" },
      { label: "Control", value: "Hand pump or pendant" },
      { label: "Weight", value: "38 kg" },
      { label: "Overload Protection", value: "Integrated relief valve" },
      { label: "Duty Cycle", value: "Intermittent" },
    ],
  },

  // Offshore Rigging
  {
    id: "off-001",
    categorySlug: "offshore-rigging",
    name: "Spreader Beam Assembly, 25T",
    sku: "OFF-SPB-25",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCe0MyF_DhOtZ6RWapZ8asr_1V_dukTJIeAVdMqBqLqpSxBgh8KFPCmfwxPKzwxXlwNiX-sbwwv_yFr_iozazasL3XS5WozpL_5iBuZjBINgMfhv9-FSsdfwMqTym1bEY8UXu8ggoYGfZTPOMdI5tSF5O2P4v6xCNfpYhN5mE943GkDQ3cP2TJ_Wq79qFcfWV58iXDAjHVNeRFYPBPqDjqEoKgC0YHfZSEbqIyqIeyuJ9YP8zFX5CqASVJJZa51W9wCQK0EOxvp8Y",
    shortDescription:
      "Modular spreader beam for controlled wide-load lifts on deck and quayside.",
    description:
      "A bolted modular spreader beam system that ships flat-packed and assembles dockside, eliminating the bending moments that come with single-point lifts of long or wide loads. Each module is individually rated and the assembled beam is calibrated as a complete unit.",
    workingLoadLimit: "25 metric tons",
    material: "Structural steel, painted finish",
    certification: "ISO 9001:2015 / DNV-GL",
    status: "certified",
    specs: [
      { label: "Span", value: "6 m (modular, adjustable)" },
      { label: "Configuration", value: "2-point top, 2-point bottom" },
      { label: "Material", value: "Structural steel I-beam" },
      { label: "Finish", value: "Marine-grade primer + enamel" },
      { label: "Proof Load", value: "1.25x WLL" },
      { label: "Calibration", value: "Assembly-level certification" },
    ],
  },
  {
    id: "off-002",
    categorySlug: "offshore-rigging",
    name: "Forged Master Link, 100T",
    sku: "OFF-MLK-100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCe0MyF_DhOtZ6RWapZ8asr_1V_dukTJIeAVdMqBqLqpSxBgh8KFPCmfwxPKzwxXlwNiX-sbwwv_yFr_iozazasL3XS5WozpL_5iBuZjBINgMfhv9-FSsdfwMqTym1bEY8UXu8ggoYGfZTPOMdI5tSF5O2P4v6xCNfpYhN5mE943GkDQ3cP2TJ_Wq79qFcfWV58iXDAjHVNeRFYPBPqDjqEoKgC0YHfZSEbqIyqIeyuJ9YP8zFX5CqASVJJZa51W9wCQK0EOxvp8Y",
    shortDescription:
      "Single-piece forged master link for multi-leg sling and bridle convergence.",
    description:
      "The convergence point for multi-leg slings and bridles on heavy lift assemblies. Forged as a single piece with no welds, this master link is the structural heart of complex rigging setups and is individually serialized for lifecycle tracking.",
    workingLoadLimit: "100 metric tons",
    material: "Forged alloy steel",
    certification: "ISO 9001:2015 / DNV 2.7-1",
    status: "certified",
    specs: [
      { label: "Bore Diameter", value: "120 mm" },
      { label: "Body Diameter", value: "60 mm" },
      { label: "Construction", value: "Single-piece forged, no welds" },
      { label: "Finish", value: "Painted, serialized" },
      { label: "Proof Load", value: "2x WLL" },
      { label: "Marking", value: "Serial number, WLL, DNV cert" },
    ],
  },
  {
    id: "off-003",
    categorySlug: "offshore-rigging",
    name: "Crane Hook Block, Self-Locking, 75T",
    sku: "OFF-HKB-75",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCe0MyF_DhOtZ6RWapZ8asr_1V_dukTJIeAVdMqBqLqpSxBgh8KFPCmfwxPKzwxXlwNiX-sbwwv_yFr_iozazasL3XS5WozpL_5iBuZjBINgMfhv9-FSsdfwMqTym1bEY8UXu8ggoYGfZTPOMdI5tSF5O2P4v6xCNfpYhN5mE943GkDQ3cP2TJ_Wq79qFcfWV58iXDAjHVNeRFYPBPqDjqEoKgC0YHfZSEbqIyqIeyuJ9YP8zFX5CqASVJJZa51W9wCQK0EOxvp8Y",
    shortDescription:
      "Self-locking safety latch hook block for crane and derrick rigging.",
    description:
      "A heavy block-and-hook assembly with a self-locking safety latch that closes automatically under load, preventing accidental disengagement during dynamic lifts in heavy swell conditions. Swivel-mounted for load orientation without twisting the rigging above.",
    workingLoadLimit: "75 metric tons",
    material: "Forged alloy steel, swivel-mounted",
    certification: "ISO 9001:2015 / DNV-GL",
    status: "certified",
    specs: [
      { label: "Throat Opening", value: "180 mm" },
      { label: "Latch Type", value: "Self-locking safety latch" },
      { label: "Swivel", value: "360°, thrust-bearing mounted" },
      { label: "Finish", value: "Painted, serialized" },
      { label: "Proof Load", value: "2x WLL" },
      { label: "Marking", value: "Serial number, WLL, DNV cert" },
    ],
  },
  {
    id: "off-004",
    categorySlug: "offshore-rigging",
    name: "Tidal-Motion Compensator Sling Set",
    sku: "OFF-TMC-SET",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCe0MyF_DhOtZ6RWapZ8asr_1V_dukTJIeAVdMqBqLqpSxBgh8KFPCmfwxPKzwxXlwNiX-sbwwv_yFr_iozazasL3XS5WozpL_5iBuZjBINgMfhv9-FSsdfwMqTym1bEY8UXu8ggoYGfZTPOMdI5tSF5O2P4v6xCNfpYhN5mE943GkDQ3cP2TJ_Wq79qFcfWV58iXDAjHVNeRFYPBPqDjqEoKgC0YHfZSEbqIyqIeyuJ9YP8zFX5CqASVJJZa51W9wCQK0EOxvp8Y",
    shortDescription:
      "Integrated sling and motion-compensation set for vessel-to-platform transfers.",
    description:
      "Purpose-built for personnel and cargo transfer between vessels and fixed platforms in heavy tidal motion, this set integrates energy-absorbing elements into the rigging chain to reduce shock loading as the vessel rises and falls with the swell.",
    workingLoadLimit: "15 metric tons",
    material: "Galvanized steel with elastomer dampers",
    certification: "ISO 9001:2015 / DNV-GL",
    status: "out-of-service",
    specs: [
      { label: "Configuration", value: "4-leg with damper inline" },
      { label: "Damper Travel", value: "400 mm" },
      { label: "Material", value: "Galvanized steel, elastomer core" },
      { label: "Finish", value: "Marine-grade coating" },
      { label: "Proof Load", value: "2x WLL" },
      { label: "Marking", value: "Serial number, WLL, DNV cert" },
    ],
  },
];

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
