const features = [
  { label: "All 6 fully customizable AI agents", hot: true },
  { label: "Unlimited patient visits", hot: false },
  { label: "SOAP notes ready in under 60 seconds", hot: false },
  { label: "Custom intake calls, messages, and uploaded forms", hot: false },
  { label: "Results delivery and triage workflows", hot: false },
  { label: "Automated discharge and follow-up instructions", hot: false },
  { label: "Pharmacy coordination and prior auth workflows", hot: false },
  { label: "Integrated video visit rooms", hot: false },
  { label: "HIPAA-compliant infrastructure + BAA", hot: false },
  { label: "e-Prescription integration — coming soon", hot: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-base">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="section-label">Pricing</p>
          <h2 className="section-heading mb-5">
            One price.{" "}
            <span className="gradient-text">Everything included.</span>
          </h2>
          <p className="max-w-xl text-lg text-slate-muted">
            No per-agent fees. No patient caps. No surprise add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="fade-up rounded-[2rem] border border-white/[0.08] bg-[#f6f0e7] p-8 text-[#27343d]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6a47]">
              Simple pricing
            </p>
            <div className="mb-2 flex items-end gap-2">
              <span className="text-[3.5rem] font-extrabold leading-none">$299</span>
              <span className="mb-2 text-base text-[#6d7276]">/week</span>
            </div>
            <p className="mb-8 text-sm text-[#6d7276]">Per clinic · Cancel anytime</p>
            <p className="mb-8 text-base leading-relaxed text-[#44525d]">
              PolyHealth gives a small clinic operational leverage without pushing you
              into a multi-tool stack or enterprise pricing model before you are ready.
            </p>
            <a href="#demo" className="btn-primary inline-flex text-white">
              Request Demo
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, index) => (
              <div
                key={f.label}
                className={`fade-up rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] px-5 py-5 ${index < 2 ? "fade-delay-1" : index < 4 ? "fade-delay-2" : index < 6 ? "fade-delay-3" : index < 8 ? "fade-delay-4" : "fade-delay-5"}`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  {f.hot ? (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      Included
                    </span>
                  ) : null}
                </div>
                <p className="text-sm leading-relaxed text-slate-text">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
