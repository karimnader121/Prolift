import type { Service, OfficeLocation } from "../types";

export const services: Service[] = [
  { icon: "verified", title: "Proof Load Testing", description: "Certified weight testing for all lifting gear to OSHA and EN standards." },
  { icon: "search", title: "Magnetic Particle Inspection", description: "Non-destructive surface crack detection on ferrous lifting components." },
  { icon: "straighten", title: "Ultrasonic Thickness Gauging", description: "Precision measurement of wall thickness and material integrity." },
  { icon: "construction", title: "Wire Rope Splicing & Socketing", description: "Custom termination, re-splicing, and epoxy socketing services." },
  { icon: "visibility", title: "On-site Visual Inspections", description: "Qualified riggers conduct regular safety audits at your facility." },
  { icon: "architecture", title: "Spreader Beam Calibration", description: "Ensuring load distribution accuracy in heavy multi-point lifts." },
  { icon: "inventory", title: "Asset Integrity Management", description: "Lifecycle tracking, maintenance scheduling, and inspection logs." },
  { icon: "design_services", title: "Custom Rigging Design", description: "Engineering solutions for non-standard or first-of-a-kind lifts." },
  { icon: "shopping_cart", title: "Lifting Equipment Rental", description: "Short and long-term hardware leasing from certified stock." },
  { icon: "school", title: "Personnel Safety Training", description: "OSHA-compliant rigging operator and inspector certification courses." },
  { icon: "build", title: "Winch Maintenance & Repair", description: "Full overhaul, recertification, and calibration of mechanical hoist systems." },
  { icon: "support_agent", title: "24/7 Emergency Support", description: "Immediate on-call response for critical field failures." },
];

export const offices: OfficeLocation[] = [
  {
    region: "Americas HQ",
    address: ["7200 Innovation Parkway", "Houston, TX 77002, USA"],
    phone: "+1 (800) 744-3672",
    isHQ: true,
  },
  {
    region: "Europe / North Sea",
    address: ["Harbour Road, Aberdeen", "AB11 5RB, United Kingdom"],
    phone: "+44 (0) 1224 500 400",
  },
  {
    region: "Middle East & Africa",
    address: ["JAFZA, Plot MO-708", "Jebel Ali, Dubai, UAE"],
    phone: "+971 4 886 3200",
  },
  {
    region: "Asia Pacific",
    address: ["16 Tuas Street", "Singapore 638 508"],
    phone: "+65 6265 8800",
  },
];
