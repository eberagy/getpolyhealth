const testimonials = [
  {
    quote:
      "The SOAP notes are as accurate as my best medical assistant — honestly more consistent. I sign off in under a minute now. This alone is worth the subscription.",
    name: "Dr. M. Okafor",
    title: "Internal Medicine · Philadelphia, PA",
    initials: "MO",
  },
  {
    quote:
      "I launched my telehealth practice in less than a week. The intake and discharge agents handle everything I used to need three staff members for. At $299 a week, it paid for itself after my second patient.",
    name: "Dr. S. Patel",
    title: "Family Medicine · Pittsburgh, PA",
    initials: "SP",
  },
  {
    quote:
      "My patients love getting a call before their appointment to go through their symptoms. By the time we connect, I already know why they're there. Iris alone changed how I practice.",
    name: "Dr. A. Reyes",
    title: "Urgent Care · Allentown, PA",
    initials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Early Physicians
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Built for how you actually practice.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            From our waitlist — physicians who&apos;ve seen PolyHealth in action.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-white/5 flex flex-col gap-6"
            >
              {/* Quote marks */}
              <div className="text-primary/30 text-5xl font-serif leading-none select-none">
                &ldquo;
              </div>

              <p className="text-[#C8DDF0] text-sm leading-relaxed -mt-4">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-muted text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
