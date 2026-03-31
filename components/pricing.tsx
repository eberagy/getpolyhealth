const features = [
  "All 6 AI agents — Atlas, Iris, Nova, Dex, Pip, and Sage",
  "Unlimited patient visits",
  "AI-generated SOAP notes (review & sign in seconds)",
  "Pre-visit intake calls & messages",
  "Lab & results delivery to patients",
  "Post-visit discharge instructions",
  "Pharmacy coordination & prior auth",
  "Integrated video visit rooms",
  "HIPAA-compliant infrastructure",
  "e-Prescription integration (coming soon)",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            One price. Everything included.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            No per-agent fees. No patient caps. No surprise add-ons. Just your
            whole clinic, automated — for less than the cost of one day of staff.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-card rounded-3xl p-10 border border-primary/20 shadow-2xl shadow-primary/5">
            {/* Glow */}
            <div className="absolute inset-0 bg-card-glow rounded-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-6xl font-extrabold text-white">$299</span>
                  <span className="text-muted text-lg mb-2">/week</span>
                </div>
                <p className="text-muted text-sm">Per clinic · Cancel anytime</p>
              </div>

              {/* Comparison */}
              <div className="mb-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-primary text-sm font-medium">
                  💡 The average medical assistant costs $800–$1,200/week. PolyHealth handles more.
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#C8DDF0]">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#demo"
                className="block w-full text-center py-4 rounded-xl bg-primary text-[#020C18] font-bold text-base hover:bg-primary-dim transition-all duration-200 hover:scale-[1.01]"
              >
                Book a Demo
              </a>
              <p className="text-center text-muted text-xs mt-4">
                Talk to us first. No commitment required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
