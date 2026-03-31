export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden grid-bg">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Waitlist badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          13 physicians already on the waitlist
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6">
          Your Clinic,{" "}
          <span className="gradient-text">Fully Automated.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          PolyHealth gives independent physicians 6 AI agents that handle
          intake, triage, discharge, pharmacy coordination, and clinical notes —
          so you can see more patients and run less paperwork.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-[#020C18] font-bold text-base hover:bg-primary-dim transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/20"
          >
            Book a Demo
          </a>
          <a
            href="#agents"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/10 text-white font-medium text-base hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            See the Agents →
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {[
            { icon: "🔒", label: "HIPAA Compliant" },
            { icon: "⚡", label: "Launch in Days" },
            { icon: "🤖", label: "6 Specialized AI Agents" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-muted text-sm">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted/40 animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
