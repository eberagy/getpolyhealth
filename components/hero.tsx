import Image from "next/image";

export default function Hero() {
  const proofPoints = [
    "Launch your own telehealth clinic in less than 48 hours",
    "Upload your forms and shape the agents around your workflow",
    "See intake, triage, discharge, pharmacy, and notes in one flow",
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[12%] left-[8%] h-[420px] w-[420px] rounded-full bg-indigo/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[12%] right-[5%] h-[360px] w-[360px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
        <div className="fade-up">
          <div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(45,212,191,0.06)",
              border: "1px solid rgba(45,212,191,0.2)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
            <span className="text-xs font-semibold tracking-wide text-primary">
              Early clinic demos now open
            </span>
            <span className="text-xs text-slate-muted">·</span>
            <span className="text-xs text-slate-muted">Founder-led walkthroughs</span>
          </div>

          <h1 className="display-font mb-6 max-w-3xl text-5xl leading-[0.98] tracking-tight text-white sm:text-6xl md:text-[4.4rem]">
            Launch your telehealth clinic in under 48 hours.
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-muted sm:text-xl">
            PolyHealth gives independent physicians a calmer way to launch and operate:
            six fully customizable agents that handle clinic setup, intake, triage,
            discharge, pharmacy coordination, and notes while following your forms,
            scripts, and workflow.
          </p>

          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <a href="#demo" className="btn-primary w-full text-center text-white sm:w-auto">
              Request Demo
            </a>
            <a href="#agents" className="btn-secondary w-full text-center sm:w-auto">
              Explore the Agent Stack
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
            {proofPoints.map((item, index) => (
              <div
                key={item}
                className={`fade-up rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-slate-muted backdrop-blur-sm ${index === 0 ? "fade-delay-1" : index === 1 ? "fade-delay-2" : "fade-delay-3"}`}
              >
                <span className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative fade-up fade-delay-2">
          <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-3 shadow-[0_30px_80px_rgba(3,10,24,0.35)] backdrop-blur-sm">
            <Image
              src="https://images.unsplash.com/photo-1758691462848-31a39258dbd8?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2200"
              alt="PolyHealth clinic launch and operations overview"
              width={1200}
              height={900}
              className="image-lift h-auto w-full rounded-[1.5rem]"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden max-w-[260px] rounded-3xl border border-white/[0.08] bg-[#0f172a]/90 p-5 text-left shadow-[0_20px_60px_rgba(3,10,24,0.4)] lg:block">
            <p className="section-label mb-3 block">Built For Launch</p>
            <p className="mb-2 text-base font-semibold text-white">
              Clinic setup, forms, scheduling, and follow-up in one system.
            </p>
            <p className="text-sm text-slate-muted">
              Less AI demo energy, more launch-ready operating layer for an independent practice.
            </p>
          </div>

          <div className="absolute -right-6 top-8 hidden rounded-3xl border border-white/[0.08] bg-[#f6f0e7] px-5 py-4 text-left shadow-[0_20px_60px_rgba(3,10,24,0.22)] lg:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d6a47]">
              Operational Focus
            </p>
            <p className="mt-2 text-sm font-medium text-[#2f3b46]">
              Setup, intake, triage, discharge, pharmacy, and notes
            </p>
          </div>
        </div>
      </div>

      <div className="fade-up fade-delay-3 relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-start gap-6 border-t border-white/[0.06] pt-10 text-left sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-subtle">
            Built for independent physicians
          </p>
          <p className="mt-2 max-w-2xl text-base text-slate-muted">
            A launch-first operating system that feels closer to a modern healthcare brand than a generic AI startup page.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-12">
          {[
            { value: "$299", label: "per week, all included" },
            { value: "6", label: "fully customizable agents" },
            { value: "<48 hrs", label: "to launch your clinic" },
          ].map((stat) => (
            <div key={stat.label} className="text-left sm:text-center">
              <div className="mb-0.5 text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
