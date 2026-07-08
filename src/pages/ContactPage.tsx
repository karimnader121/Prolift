import { useState } from "react";
import Icon from "../components/Icon";
import { offices } from "../data/services";

type FormState = "idle" | "submitting" | "success";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", region: "", subject: "", message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    setState("submitting");
    setTimeout(() => setState("success"), 1200);
  }

  const inputClass =
    "w-full bg-surface border border-outline-variant px-4 py-3 font-body text-body-md text-on-surface placeholder-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  return (
    <>
      {/* Page Header */}
      <section className="bg-on-background py-16 md:py-20 px-4 md:px-16 border-b-4 border-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono-spec text-utility-sm text-primary-fixed tracking-[0.3em] uppercase mb-3">
            Talk to Us
          </div>
          <h1 className="font-display text-display-lg text-inverse-on-surface mb-4">Contact &amp; Support</h1>
          <p className="font-body text-body-lg text-surface-variant max-w-2xl">
            Our engineering support team operates 24 hours a day, 7 days a week from four global offices. Emergency response guaranteed within 4 hours.
          </p>
        </div>
      </section>

      {/* Emergency bar */}
      <div className="bg-[#f97316] py-4 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-center gap-3">
          <Icon name="warning" className="text-white shrink-0" />
          <p className="font-mono-spec text-utility-sm text-white font-bold uppercase tracking-wider">
            24/7 Emergency Hotline:&nbsp;
          </p>
          <a
            href="tel:+18007443672"
            className="font-mono-spec text-utility-sm text-white underline hover:no-underline"
          >
            +1 (800) RIG-FORCE
          </a>
          <span className="hidden sm:block text-white/60 mx-2">|</span>
          <p className="font-body text-body-md text-white/90">
            For critical field failures requiring immediate engineering response.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-8">
              Send an Enquiry
            </h2>

            {state === "success" ? (
              <div className="border border-primary bg-surface-container-low p-10 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <Icon name="check_circle" className="text-on-primary" size="xl" />
                </div>
                <h3 className="font-display text-headline-md text-on-surface">Message Received</h3>
                <p className="font-body text-body-lg text-secondary max-w-md">
                  A Prolift engineer will review your enquiry and respond within 4 business hours. For urgent matters, please call the emergency hotline.
                </p>
                <button
                  onClick={() => { setState("idle"); setForm({ name: "", company: "", email: "", phone: "", region: "", subject: "", message: "" }); }}
                  className="mt-2 bg-primary text-on-primary px-6 py-3 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Company *
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company or organisation"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000 0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Region
                    </label>
                    <select
                      name="region"
                      value={form.region}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select your region</option>
                      <option>Americas</option>
                      <option>Europe / North Sea</option>
                      <option>Middle East &amp; Africa</option>
                      <option>Asia Pacific</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a subject</option>
                      <option>Product Enquiry</option>
                      <option>Request a Quote</option>
                      <option>Technical Support</option>
                      <option>Inspection / Certification</option>
                      <option>Custom Engineering</option>
                      <option>Emergency Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your lifting requirement, project context, or question…"
                    className={inputClass + " resize-y"}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={state === "submitting"}
                  className="bg-primary text-on-primary px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all border-b-4 border-on-primary-fixed-variant active:translate-y-1 active:border-b-0 disabled:opacity-60 self-start flex items-center gap-3"
                >
                  {state === "submitting" ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Icon name="send" size="sm" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider">
              Our Offices
            </h2>
            {offices.map((office) => (
              <div
                key={office.region}
                className={`p-5 border flex flex-col gap-3 ${
                  office.isHQ ? "bg-on-background border-primary" : "bg-surface-container-low border-outline-variant"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono-spec text-utility-sm uppercase tracking-widest font-bold ${
                      office.isHQ ? "text-primary-fixed" : "text-on-surface"
                    }`}
                  >
                    {office.region}
                  </span>
                  {office.isHQ && (
                    <span className="bg-primary px-2 py-0.5 font-mono-spec text-label-caps text-on-primary uppercase tracking-wider">
                      HQ
                    </span>
                  )}
                </div>
                <div>
                  {office.address.map((line) => (
                    <p key={line} className={`font-body text-body-md ${office.isHQ ? "text-surface-variant" : "text-secondary"}`}>
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="phone" className={office.isHQ ? "text-primary-fixed-dim" : "text-outline"} size="sm" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className={`font-mono-spec text-utility-sm hover:underline ${office.isHQ ? "text-primary-fixed-dim" : "text-secondary"}`}
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}

            {/* Response SLA */}
            <div className="bg-surface-container border border-outline-variant p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="schedule" className="text-primary" size="sm" />
                <span className="font-mono-spec text-utility-sm text-on-surface uppercase tracking-wider font-bold">Response Times</span>
              </div>
              {[
                { label: "Emergency Hotline", value: "Immediate" },
                { label: "Email Enquiry", value: "≤ 4 business hours" },
                { label: "Quote Request", value: "≤ 24 hours" },
                { label: "Custom Engineering", value: "2–5 business days" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-outline-variant last:border-0">
                  <span className="font-body text-body-md text-secondary">{item.label}</span>
                  <span className="font-mono-spec text-utility-sm font-bold text-on-surface">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
