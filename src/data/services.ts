import type { Service, OfficeLocation } from "../types";

export const services: Service[] = [
  {
    icon: "engineering",
    title: "Lifting Operation Management & Supervision",
    description:
      "Expert oversight and on-site supervision of lifting operations to ensure safety and compliance.",
  },
  {
    icon: "assignment",
    title: "Lifting Plan Preparation & Application",
    description:
      "Detailed lift planning and execution support tailored to each project's requirements.",
  },
  {
    icon: "search",
    title: "Lifting Gears & Cranes Inspection",
    description:
      "Thorough inspection of lifting gears and cranes to guarantee safe operating condition.",
  },
  {
    icon: "precision_manufacturing",
    title: "Wire Rope Slings Manufacturing",
    description:
      "In-house manufacturing of wire rope slings built to exacting safety standards.",
  },
  {
    icon: "science",
    title: "Non-Destructive Testing (NDT)",
    description:
      "Advanced NDT methods to detect flaws and verify the integrity of lifting components.",
  },
  {
    icon: "shopping_cart",
    title: "Heavy Lifting Sling Rental (up to 1000 Ton)",
    description:
      "Certified heavy-duty sling rental for lifts of up to 1000 tons capacity.",
  },
  {
    icon: "school",
    title: "Rigger & Supervisor Training",
    description:
      "Structured training programs for riggers and supervisors to build safe, competent teams.",
  },
  {
    icon: "verified",
    title: "Rig Inspection & Certification",
    description:
      "Full inspection and certification services for all rigs, both offshore and onshore.",
  },
  {
    icon: "assignment_turned_in",
    title: "Inspection Report Management",
    description:
      "Preparing, submitting, and managing certification reports on-site to prevent client delays.",
  },
  {
    icon: "elevator",
    title: "MEWP Verification & Examination",
    description:
      "Thorough examination of all MEWP equipment, including scissor lifts and man lifts.",
  },
  {
    icon: "local_shipping",
    title: "Earth Moving Equipment Examination",
    description:
      "Verification and thorough examination of wheel loaders, excavators, skid steer loaders, and more.",
  },
  {
    icon: "assignment_ind",
    title: "Operator Assessment",
    description:
      "Competency assessment for operators of different machines and cranes.",
  },
];

export const offices: OfficeLocation[] = [
  {
    region: "Egypt HQ",
    address: ["12 C Hadayek Al Ahram", "Giza, Egypt"],
    phone: "+2 012 0003 0033",
    phone2: "+2 012 2275 5456",
    isHQ: true,
  },
];