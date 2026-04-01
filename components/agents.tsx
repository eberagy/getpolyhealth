import Image from "next/image";

const agentGroups = [
  {
    label: "Launch",
    heading: "Start with setup and intake that already fit your clinic.",
    body:
      "PolyHealth handles the first operational layer before the visit begins, from launch configuration to patient intake workflows shaped around your forms and messaging.",
    image: "https://images.unsplash.com/photo-1752412145526-98cd9dc29649?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2200",
    tone: "soft",
    agents: [
      {
        name: "Clinic Launch Agent",
        role: "Setup, onboarding, and launch workflows",
      },
      {
        name: "Patient Intake Agent",
        role: "Pre-visit outreach and form completion",
      },
    ],
  },
  {
    label: "Coordinate",
    heading: "Keep results and pharmacy follow-through connected.",
    body:
      "Triage, results delivery, refill workflows, and pharmacy callbacks stay inside one operational system instead of breaking into separate manual threads.",
    image: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2200",
    tone: "dark",
    agents: [
      {
        name: "Results & Triage Agent",
        role: "Results delivery and escalation logic",
      },
      {
        name: "Pharmacy Coordination Agent",
        role: "Refills, prior auth, and pharmacy callbacks",
        tag: "e-Rx Coming Soon",
      },
    ],
  },
  {
    label: "Closeout",
    heading: "End each visit with notes and follow-up already in motion.",
    body:
      "The visit closes with structured documentation, discharge guidance, and next-step communication, so patients and providers leave with clarity.",
    image: "https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2200",
    tone: "warm",
    agents: [
      {
        name: "Clinical Notes Agent",
        role: "SOAP generation shaped to your templates",
      },
      {
        name: "Discharge & Follow-Up Agent",
        role: "Post-visit instructions and next steps",
      },
    ],
  },
];

export default function Agents() {
  return (
    <section id="agents" className="section-base">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="section-label">The Agent Stack</p>
          <h2 className="section-heading mb-5">
            Six fully customizable AI agents.<br />
            <span className="gradient-text">One complete clinic operating system.</span>
          </h2>
          <p className="text-slate-muted text-lg leading-relaxed">
            PolyHealth matches your clinic instead of forcing a rigid template.
            The system is organized around the actual flow of a visit, not a
            grid of disconnected AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {agentGroups.map((group, index) => (
            <div
              key={group.heading}
              className={`fade-up grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] ${index === 1 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""} ${index === 0 ? "fade-delay-1" : index === 1 ? "fade-delay-2" : "fade-delay-3"}`}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-3">
                <Image
                  src={group.image}
                  alt={group.heading}
                  width={1200}
                  height={900}
                  className="image-lift h-auto w-full rounded-[1.5rem]"
                />
              </div>

              <div className="max-w-xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-subtle">
                  {group.label}
                </p>
                <h3 className="display-font mb-4 text-3xl leading-tight text-white sm:text-4xl">
                  {group.heading}
                </h3>
                <p className="mb-8 text-base leading-relaxed text-slate-muted">
                  {group.body}
                </p>

                <div className="space-y-4 border-t border-white/[0.08] pt-6">
                  {group.agents.map((agent) => (
                    <div key={agent.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-white">{agent.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-muted">{agent.role}</p>
                      </div>
                      {agent.tag ? (
                        <span className="shrink-0 rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-muted">
                          {agent.tag}
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
