const agents = [
  {
    name: "Atlas",
    role: "Clinic Launch",
    icon: "⬡",
    iconClass: "agent-icon-indigo",
    iconEmoji: "🚀",
    description:
      "Set up your practice, configure availability, and go live in days. Atlas handles every step of clinic onboarding so your first patient visit is never delayed.",
    tag: null,
    accent: "rgba(99,102,241,0.12)",
    accentBorder: "rgba(99,102,241,0.2)",
  },
  {
    name: "Iris",
    role: "Pre-Visit Intake",
    icon: "⬡",
    iconClass: "agent-icon-teal",
    iconEmoji: "📋",
    description:
      "Calls or messages every patient before their appointment. Collects symptoms, medications, and history — your chart is pre-filled before the visit begins.",
    tag: null,
    accent: "rgba(45,212,191,0.10)",
    accentBorder: "rgba(45,212,191,0.2)",
  },
  {
    name: "Nova",
    role: "Triage & Results",
    icon: "⬡",
    iconClass: "agent-icon-amber",
    iconEmoji: "🔬",
    description:
      "Delivers lab results, imaging reports, and follow-up instructions directly to patients. Escalates anything flagged as urgent to you immediately.",
    tag: null,
    accent: "rgba(251,191,36,0.10)",
    accentBorder: "rgba(251,191,36,0.2)",
  },
  {
    name: "Dex",
    role: "Discharge",
    icon: "⬡",
    iconClass: "agent-icon-emerald",
    iconEmoji: "📤",
    description:
      "Automatically sends discharge instructions, medication reminders, and follow-up scheduling the moment you close a visit. Zero extra steps on your end.",
    tag: null,
    accent: "rgba(16,185,129,0.10)",
    accentBorder: "rgba(16,185,129,0.2)",
  },
  {
    name: "Pip",
    role: "Pharmacy Coordination",
    icon: "⬡",
    iconClass: "agent-icon-violet",
    iconEmoji: "💊",
    description:
      "Handles prior authorizations, refill requests, and pharmacy callbacks. Works across major pharmacy networks. e-Prescription integration launching soon.",
    tag: "e-Rx Coming Soon",
    accent: "rgba(167,139,250,0.10)",
    accentBorder: "rgba(167,139,250,0.2)",
  },
  {
    name: "Sage",
    role: "Clinical Notes",
    icon: "⬡",
    iconClass: "agent-icon-sky",
    iconEmoji: "📝",
    description:
      "Generates complete SOAP notes from every visit with the accuracy of a trained medical assistant. Review, edit, and sign in under 60 seconds.",
    tag: null,
    accent: "rgba(56,189,248,0.10)",
    accentBorder: "rgba(56,189,248,0.2)",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="section-base">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label">The Agent Stack</p>
          <h2 className="section-heading mb-5">
            Six agents.<br />
            <span className="gradient-text">One complete clinic OS.</span>
          </h2>
          <p className="text-slate-muted text-lg leading-relaxed">
            Each agent owns a specific part of the patient journey — from first
            contact to final note. Together, they replace most of what a
            front-office team does.
          </p>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="glass-card rounded-2xl p-7 group relative overflow-hidden"
            >
              {/* Subtle accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse 80% 60% at 0% 0%, ${agent.accent}, transparent)` }}
              />

              {/* Coming soon badge */}
              {agent.tag && (
                <span
                  className="absolute top-5 right-5 text-[10px] px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background: "rgba(167,139,250,0.12)",
                    border: "1px solid rgba(167,139,250,0.25)",
                    color: "#A78BFA",
                  }}
                >
                  {agent.tag}
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-5 border ${agent.iconClass}`}
              >
                {agent.iconEmoji}
              </div>

              {/* Name + role */}
              <div className="mb-3 relative z-10">
                <span className="text-white font-bold text-base">{agent.name}</span>
                <span className="text-slate-subtle mx-2 text-xs">·</span>
                <span className="text-xs font-medium" style={{ color: agent.accentBorder.replace("0.2", "1").replace("rgba(", "rgb(").replace(",0.2)", ")") }}>
                  {agent.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-muted text-sm leading-relaxed relative z-10">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
