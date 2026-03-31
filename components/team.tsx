const team = [
  {
    name: "Ragy Ebeid",
    title: "Co-Founder",
    bio: "Former BCG consultant. Got into and deferred medical school at 19. Building the clinic he never got to run.",
    linkedin: "https://www.linkedin.com/in/ragy-ebeid-2046a9205/",
    initials: "RE",
  },
  {
    name: "Daniel Cha",
    title: "Co-Founder",
    bio: "Former TikTok engineer. Fielded offers from Google and Dropbox. Chose to build something that matters.",
    linkedin: "https://www.linkedin.com/in/danielcha0131/",
    initials: "DC",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 px-6 section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            The Team
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Built by people who understand both sides.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Healthcare background meets world-class engineering. We built
            PolyHealth because we saw what independent physicians were dealing
            with — and knew it could be fixed.
          </p>
        </div>

        {/* Team cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex-1 bg-card rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-6">
                {member.initials}
              </div>

              {/* Info */}
              <div className="mb-4">
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-primary text-sm">{member.title}</p>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted hover:text-primary transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
