import { Link } from "react-router-dom";
import { services } from "../data/services";
import Icon from "../components/Icon";

const pillars = [
  {
    icon: "verified",
    title: "ISO 9001:2015",
    description:
      "Every service procedure is documented, audited, and traceable under our certified quality management system.",
  },
  {
    icon: "engineering",
    title: "Qualified Riggers",
    description:
      "Our field teams hold LEEA, ASME B30, and OSHA rigging certifications, updated annually.",
  },
  {
    icon: "support_agent",
    title: "24/7 Response",
    description:
      "Dedicated emergency lines with maximum 4-hour on-site response for critical failures.",
  },
  {
    icon: "language",
    title: "Global Coverage",
    description:
      "Service offices in Houston, Aberdeen, Dubai, and Singapore ensure local support worldwide.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-on-background py-16 md:py-20 px-4 md:px-16 border-b-4 border-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono-spec text-utility-sm text-primary-fixed tracking-[0.3em] uppercase mb-3">
            What We Do
          </div>
          <h1 className="font-display text-display-lg text-inverse-on-surface mb-4">
            Our Services
          </h1>
          <p className="font-body text-body-lg text-surface-variant max-w-2xl">
            End-to-end lifting equipment management — from inspection and
            testing to custom engineering and emergency support.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-20 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-10">
            Why Choose Prolift Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-surface border border-outline-variant p-6 flex flex-col gap-4 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                  <Icon name={p.icon} className="text-on-primary" />
                </div>
                <h3 className="font-headline font-bold text-on-surface text-body-md">
                  {p.title}
                </h3>
                <p className="font-body text-body-md text-secondary leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-10">
            Service Offerings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="group flex gap-5 p-6 border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all"
              >
                <div className="w-11 h-11 bg-surface-container-highest group-hover:bg-primary flex items-center justify-center shrink-0 transition-colors border border-outline-variant group-hover:border-primary">
                  <Icon
                    name={svc.icon}
                    className="text-primary group-hover:text-on-primary transition-colors"
                  />
                </div>
                <div>
                  <div className="font-mono-spec text-label-caps text-outline uppercase tracking-wider mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-headline font-bold text-on-surface mb-2 text-body-md group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="font-body text-body-md text-secondary leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-20 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-12">
            Our Inspection Process
          </h2>
          <div className="flex flex-col md:flex-row gap-0">
            {[
              {
                step: "01",
                icon: "assignment",
                title: "Initial Assessment",
                desc: "We review your existing lifting registers, equipment history, and operational context.",
              },
              {
                step: "02",
                icon: "search",
                title: "Physical Inspection",
                desc: "Qualified inspectors apply visual, NDT, and dimensional checks against applicable standards.",
              },
              {
                step: "03",
                icon: "scale",
                title: "Proof Load Testing",
                desc: "Where required, we apply certified test loads using calibrated hydraulic test beds.",
              },
              {
                step: "04",
                icon: "description",
                title: "Certification Issue",
                desc: "Full documentation package: inspection report, test certificates, and updated lifting register.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="flex-1 flex flex-col md:items-start relative"
              >
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-outline-variant z-0" />
                )}
                <div className="relative z-10 flex flex-col items-start gap-4 p-6 border border-outline-variant bg-surface mb-0 md:mb-0">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary w-10 h-10 flex items-center justify-center">
                      <Icon
                        name={item.icon}
                        className="text-on-primary"
                        size="sm"
                      />
                    </div>
                    <span
                      className="font-mono-spec font-bold text-primary"
                      style={{ fontSize: "28px" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-on-surface text-body-md">
                    {item.title}
                  </h3>
                  <p className="font-body text-body-md text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="md:hidden h-6 w-0.5 bg-outline-variant ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-primary py-14 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-on-primary" style={{ fontSize: "28px", lineHeight: "36px" }}>
              Schedule an Inspection
            </h2>
            <p className="text-on-primary-container font-body text-body-md mt-2 max-w-lg">
              Our certified inspection teams are available globally. Get your lifting register audited by experts.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-on-background text-primary-fixed px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:bg-inverse-surface transition-all border-b-4 border-on-primary-fixed text-center shrink-0 active:translate-y-1"
          >
            Book a Service Call
          </Link>
        </div>
      </section> */}
    </>
  );
}
