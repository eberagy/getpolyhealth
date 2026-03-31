const agents = [
  {
    name: "Atlas",
    role: "Clinic Launch Agent",
    icon: "🚀",
    description:
      "Configure your practice, set up your availability, and go live in days — not months. Atlas handles onboarding end-to-end so you can focus on patients from day one.",
    tag: null,
  },
  {
    name: "Iris",
    role: "Pre-Visit Intake Agent",
    icon: "📋",
    description:
      "Calls or texts your patients before every appointment. Collects symptoms, medications, and chief complaints. Arrives pre-filled in your notes before you say hello.",
    tag: null,
  },
  {
    name: "Nova",
    role: "Triage & Results Agent",
    icon: "🔬",
    description:
      "Delivers lab results, imaging reports, and follow-up instructions directly to patients via phone or message. Escalates anything that needs your immediate attention.",
    tag: null,
  },
  {
    name: "Dex",
    role: "Discharge Agent",
    icon: "📤",
    description:
      "After every visit, Dex sends care instructions, medication reminders, and follow-up scheduling to your patients — automatically, the moment you mark the visit complete.",
    tag: null,
  },
  {
    name: "Pip",
    role: "Pharmacy Coordination Agent",
    icon: "💊",
    description:
      "Handles prior authorizations, refill requests, and pharmacy calls on your behalf. e-Prescription integration coming soon.",
    tag: "e-Rx Coming Soon",
  },
  {
    name: "Sage",
    role: "Clinical Notes Agent",
    icon: "📝",
    description:
      "Generates SOAP notes from each visit with accuracy that matches your best medical assistant. Review, edit, and sign in seconds — not minutes.",
    tag: null,
  },
];

export default function Agents() {
  return (
    <section id="agents" className="py-28 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            The Agent Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Six agents. One clinic OS.
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Each agent owns a specific part of the patient journey — from first
            contact to final note. Together, they run the parts of your practice
            that shouldn&apos;t need you.
          </p>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="relative bg-card rounded-2xl p-7 glow-border transition-all duration-300 group cursor-default"
            >
              {/* Coming soon badge */}
              {agent.tag && (
                <span className="absolute top-5 right-5 text-xs px-2.5 py-0.5 rounded-full border border-primary/30 text-primary bg-primary/5 font-medium">
                  {agent.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl mb-5">
                {agent.icon}
              </div>

              {/* Name + role */}
              <div className="mb-3">
                <span className="text-white font-bold text-lg">{agent.name}</span>
                <span className="text-muted text-sm ml-2">·</span>
                <span className="text-primary text-sm ml-2">{agent.role}</span>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
