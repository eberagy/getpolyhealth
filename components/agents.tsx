const agentTemplates = [
  "Clinic launch",
  "Patient intake",
  "Results and triage",
  "Pharmacy coordination",
  "Clinical notes",
  "Discharge and follow-up",
];

export default function Agents() {
  return (
    <section id="platform" className="section-base">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="section-label">Agent Library</p>
            <h2 className="section-heading">
              Start from proven agent templates, then{" "}
              <span className="gradient-text"> tailor them to your clinic.</span>
            </h2>
            <p className="section-copy mt-5 max-w-xl text-lg leading-relaxed">
              PolyHealth is designed to begin with structured templates rather
              than a blank canvas, so teams can launch faster while keeping
              workflows aligned to their operating model.
            </p>
          </div>

          <div className="motion-panel surface relative overflow-hidden p-8 sm:p-9">
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#9ec5ff]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9ec5ff]">
                  Template Library
                </p>
              </div>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                A configurable starting point for every major workflow.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/66">
                Each template can be adjusted to match your care pathways,
                intake logic, language, and operational rules without changing
                the underlying demo request flow.
              </p>

              <div className="mt-8 space-y-3">
                {agentTemplates.map((agent, index) => (
                  <div
                    key={agent}
                    className={`fade-up flex items-center justify-between rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4 ${index < 2 ? "fade-delay-1" : index < 4 ? "fade-delay-2" : "fade-delay-3"}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#9ec5ff]" />
                      <span className="text-sm text-white">{agent}</span>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                      configurable
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
