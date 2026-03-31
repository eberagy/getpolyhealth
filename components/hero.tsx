export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Waitlist badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(45,212,191,0.06)",
            border: "1px solid rgba(45,212,191,0.2)",
          }}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
          <span className="text-primary text-xs font-semibold tracking-wide">
            13 physicians on the waitlist
          </span>
          <span className="text-slate-muted text-xs">·</span>
          <span className="text-slate-muted text-xs">Accepting applications now</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold tracking-tight text-white leading-[1.05] mb-6">
          The AI Operating System
          <br />
          <span className="gradient-text">for Independent Physicians.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl text-slate-muted max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          Six specialized AI agents handle intake, triage, discharge, pharmacy
          coordination, and clinical notes — so you practice medicine, not administration.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#demo" className="btn-primary w-full sm:w-auto text-white">
            Book a Demo
          </a>
          <a href="#agents" className="btn-secondary w-full sm:w-auto">
            Meet the Agents →
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {[
            { value: "$299", label: "per week, all included" },
            { value: "6", label: "specialized AI agents" },
            { value: "<1 min", label: "SOAP note review time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-xs text-slate-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-subtle animate-bounce">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
