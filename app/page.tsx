import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Agents from "@/components/agents";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Team from "@/components/team";
import DemoCTA from "@/components/demo-cta";
import Footer from "@/components/footer";

/* ─── Pain Points ────────────────────────────────────────────────────── */
function Problem() {
  const pains = [
    {
      icon: "📞",
      heading: "Your staff spends more time on the phone than your patients do.",
      body: "Appointment reminders, intake calls, lab notifications, pharmacy callbacks — the admin never stops. You hired clinicians. You're running a call center.",
    },
    {
      icon: "📄",
      heading: "SOAP notes are eating your evenings.",
      body: "Charting after every visit adds hours to every day. The documentation burden is a leading cause of physician burnout — and it doesn't have to be.",
    },
    {
      icon: "💸",
      heading: "Staffing a full front office is expensive and fragile.",
      body: "A medical assistant costs $40,000–$60,000 a year. They get sick, they quit, they make mistakes. Independent physicians deserve a better model.",
    },
  ];

  return (
    <section className="py-28 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            The Problem
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Running a clinic shouldn&apos;t require{" "}
            <span className="gradient-text">an army.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div
              key={p.heading}
              className="bg-card rounded-2xl p-8 border border-white/5"
            >
              <div className="text-3xl mb-5">{p.icon}</div>
              <h3 className="text-white font-semibold text-base mb-3 leading-snug">
                {p.heading}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      step: "01",
      heading: "Launch your clinic",
      body: "Atlas walks you through branding, availability, and clinic setup. Go live in days — not months.",
    },
    {
      step: "02",
      heading: "Agents take over the ops",
      body: "Intake, triage, discharge, and pharmacy coordination run automatically from the moment a patient books.",
    },
    {
      step: "03",
      heading: "You see patients. Sage writes the note.",
      body: "Join your video visit. Sage listens and generates a complete SOAP note. You review and sign.",
    },
  ];

  return (
    <section id="how-it-works" className="py-28 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            From setup to seeing patients in three steps.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            PolyHealth is designed to get out of your way. The agents handle the
            workflow so you can handle the medicine.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center md:text-left">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-primary/30 bg-primary/5 text-primary font-bold text-lg mb-6">
                  {s.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {s.heading}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SOAP Quality callout ───────────────────────────────────────────── */
function SoapQuality() {
  return (
    <section className="py-28 px-6 section-divider">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Clinical Notes
            </p>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">
              As accurate as your{" "}
              <span className="gradient-text">best medical assistant.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">
              Sage doesn&apos;t just transcribe — it structures. Subjective,
              Objective, Assessment, Plan. Formatted the way you want, reviewed
              in seconds, signed with a click.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Physicians on our waitlist consistently tell us: &ldquo;The SOAP
              quality is indistinguishable from what my MA produces — and
              it&apos;s ready the moment I finish the visit.&rdquo;
            </p>
          </div>

          {/* Right — mock SOAP note */}
          <div className="bg-card rounded-2xl border border-white/5 p-7 font-mono text-xs leading-6 overflow-hidden">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-muted ml-2 text-[10px]">Sage · SOAP Note · Generated 0:12 after visit</span>
            </div>

            <div className="space-y-4 text-[#C8DDF0]">
              <div>
                <span className="text-primary font-bold">S — Subjective</span>
                <p className="text-muted mt-1">
                  Patient is a 42 y/o male presenting with 5-day hx of productive
                  cough, low-grade fever (max 38.2°C), and mild dyspnea on
                  exertion. Denies chest pain, hemoptysis, or recent travel.
                </p>
              </div>
              <div>
                <span className="text-primary font-bold">O — Objective</span>
                <p className="text-muted mt-1">
                  T: 37.8°C · HR: 88 · RR: 18 · SpO2: 97% RA. Lungs: decreased
                  breath sounds RLL, dullness to percussion.
                </p>
              </div>
              <div>
                <span className="text-primary font-bold">A — Assessment</span>
                <p className="text-muted mt-1">
                  Community-acquired pneumonia, right lower lobe (J18.9).
                </p>
              </div>
              <div>
                <span className="text-primary font-bold">P — Plan</span>
                <p className="text-muted mt-1">
                  Azithromycin 500mg QD × 5 days. CXR ordered. Follow-up in 7
                  days or sooner PRN. Patient educated on return precautions.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-[10px]">Ready for physician review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Security ───────────────────────────────────────────────────────── */
function Security() {
  const pillars = [
    {
      icon: "🔐",
      heading: "HIPAA Compliant Infrastructure",
      body: "End-to-end encryption, BAA included, and audit logs on every PHI access event. Built for healthcare from the ground up.",
    },
    {
      icon: "🚫",
      heading: "Your data never trains our models",
      body: "Patient data is yours. We never use it to train or fine-tune AI models. Zero data retention options available.",
    },
    {
      icon: "🏥",
      heading: "No video recording, ever",
      body: "Video visits are private by design. No cloud recording, no transcripts stored without consent. Full stop.",
    },
    {
      icon: "🔑",
      heading: "Role-based access controls",
      body: "Clinicians see clinical data. Staff see scheduling. Every role scoped to exactly what they need — nothing more.",
    },
  ];

  return (
    <section className="py-28 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Security & Compliance
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Built for medicine. Secured like it.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We hold patient data to the same standard you do. PolyHealth is
            HIPAA-compliant infrastructure from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.heading}
              className="bg-card rounded-2xl p-7 border border-white/5 flex gap-5"
            >
              <span className="text-2xl shrink-0">{p.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  {p.heading}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Founder Vision ─────────────────────────────────────────────────── */
function Vision() {
  return (
    <section className="py-28 px-6 section-divider">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-8">
          Our Vision
        </p>
        <blockquote className="text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-10">
          &ldquo;Independent physicians are the backbone of American healthcare.
          They shouldn&apos;t have to choose between seeing more patients and
          keeping the lights on. We built PolyHealth so that one physician, with
          the right AI behind them, can deliver the same quality of care as a
          full clinic team — without the overhead, the burnout, or the
          compromise.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
            RE
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-semibold">Ragy Ebeid</p>
            <p className="text-muted text-xs">Co-Founder, PolyHealth</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Agents />
      <HowItWorks />
      <SoapQuality />
      <Testimonials />
      <Pricing />
      <Vision />
      <Security />
      <Team />
      <DemoCTA />
      <Footer />
    </main>
  );
}
