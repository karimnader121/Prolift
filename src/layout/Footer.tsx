import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const footerLinks = [
  { to: "/products", label: "Product Catalog" },
  { to: "/certifications", label: "Certifications" },
  { to: "/services", label: "Safety Protocols" },
  { to: "/contact", label: "Emergency Support" },
  { to: "/about", label: "Global Logistics" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-on-background border-t-4 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 py-12 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="font-mono-spec text-label-caps text-surface-variant uppercase tracking-[0.2em]">
              Prolift
            </span>
          </div>
          <p className="text-secondary-fixed-dim font-body text-body-md opacity-80 leading-relaxed max-w-xs">
            Engineering superior lifting solutions for the world's most
            challenging environments. From the North Sea to the Permian Basin,
            we provide the strength that powers global energy.
          </p>
          <div className="flex gap-4 mt-1">
            <Icon
              name="language"
              className="text-surface-variant cursor-pointer hover:text-white transition-colors"
            />
            <Icon
              name="share"
              className="text-surface-variant cursor-pointer hover:text-white transition-colors"
            />
          </div>
        </div>

        {/* Technical Nav */}
        <div className="flex flex-col gap-3 md:pl-8">
          <h4 className="font-mono-spec text-utility-sm text-primary-fixed uppercase tracking-widest mb-2">
            Technical Navigation
          </h4>
          {footerLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-surface-variant hover:text-white transition-colors font-body text-body-md"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Headquarters */}
        <div className="flex flex-col gap-4 md:pl-8">
          <h4 className="font-mono-spec text-utility-sm text-primary-fixed uppercase tracking-widest mb-2">
            Headquarters
          </h4>
          <p className="text-surface-variant font-body text-body-md">
            12 C Hadayek Al Ahram
            <br />
            Giza, Egypt
          </p>
          <p className="text-surface-variant font-body text-body-md mt-2">
            <span className="font-bold text-primary-fixed">Contact :</span> +2
            012 0003 0033 - +2 012 2275 5456
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Icon name="verified" className="text-primary-fixed" size="sm" />
            <span className="text-surface-variant font-mono-spec text-utility-sm">
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-4 md:px-16 py-5 border-t border-outline/20 max-w-[1440px] mx-auto">
        <p className="text-surface-variant font-body text-body-md text-sm opacity-70">
          © {"2023-" + new Date().getFullYear()} Prolift . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
