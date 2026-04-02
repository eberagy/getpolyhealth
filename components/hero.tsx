function HeroVisual() {
  const rows = [
    { label: "Configure clinic experience", status: "Interface defined" },
    { label: "Import forms and workflows", status: "Documents ingested" },
    { label: "Tailor agent templates", status: "Rules synchronized" },
    { label: "Launch unified telehealth suite", status: "Go-live ready" },
  ];

  return (
    <div className="motion-panel surface relative overflow-hidden p-6 sm:p-8">
      <div className="absolute inset-x-8 top-24 h-px bg-white/8" />
      <div className="motion-rail absolute left-10 right-10 top-24 h-px" />
      <div className="motion-orb left-[18%] top-[90px] h-3 w-3" />
      <div className="motion-orb left-[41%] top-[90px] h-3 w-3 [animation-delay:0.5s]" />
      <div className="motion-orb left-[64%] top-[90px] h-3 w-3 [animation-delay:1s]" />
      <div className="motion-orb right-[12%] top-[90px] h-3 w-3 [animation-delay:1.5s]" />

      <div className="relative z-10 mb-20 flex items-start justify-between">
        <div className="-mt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/44">
            Launch Sequence
          </p>
          <p className="mt-2 text-sm text-white/72">One controlled path from setup to go-live.</p>
        </div>
        <div className="rounded-full border border-[rgba(89,146,255,0.35)] bg-[rgba(47,109,246,0.12)] px-3 py-1 text-[11px] font-medium text-[#cddfff]">
          4-stage workflow
        </div>
      </div>

      <div className="space-y-3">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`fade-up flex items-center justify-between rounded-[1.35rem] border border-white/8 bg-white/[0.02] px-4 py-4 ${index === 0 ? "fade-delay-1" : index === 1 ? "fade-delay-2" : index === 2 ? "fade-delay-3" : "fade-delay-4"}`}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(89,146,255,0.35)] bg-[rgba(47,109,246,0.12)] text-xs font-semibold text-[#dce9ff]">
                0{index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-white">{row.label}</p>
                <div className="mt-2 flex gap-2">
                  <div className="blueprint-line w-12" />
                  <div className="blueprint-line w-8 opacity-70" />
                </div>
              </div>
            </div>
            <p className="text-xs text-white/48">{row.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="section-base overflow-hidden pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="fade-up max-w-3xl">
          <p className="section-label">Clinic Launch Platform</p>
          <h1 className="display-font max-w-4xl text-5xl leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl md:text-[4.7rem]">
            Launch a unified telehealth clinic with{" "}
            <span className="gradient-text">AI-native integration.</span>
          </h1>
          <p className="section-copy mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
            Configure the experience, import existing forms and workflows,
            tailor agent templates, and go live with one controlled system for
            integrated practice management and virtual appointments.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#demo" className="btn-primary">
              Request Demo
            </a>
            <a href="#workflow" className="btn-secondary">
              View Workflow
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              "Build the patient experience without code",
              "Import your existing operating logic and forms",
              "Go live with configurable agent templates",
            ].map((item, index) => (
              <div
                key={item}
                className={`fade-up rounded-[1.35rem] border border-white/8 bg-white/[0.02] px-4 py-5 text-sm leading-relaxed text-white/70 ${index === 0 ? "fade-delay-1" : index === 1 ? "fade-delay-2" : "fade-delay-3"}`}
              >
                <span className="mb-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(47,109,246,0.14)] text-xs font-semibold text-[#dce9ff]">
                  {index + 1}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up fade-delay-2">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
