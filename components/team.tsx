const team = [
  {
    name: "Ragy Ebeid",
    title: "Co-Founder",
    bio: "Former BCG consultant. Got into and deferred medical school at 19. Building the clinic he never got to run.",
    linkedin: "https://www.linkedin.com/in/ragy-ebeid-2046a9205/",
    initials: "RE",
    gradient: "linear-gradient(135deg, #2DD4BF, #6366F1)",
  },
  {
    name: "Daniel Cha",
    title: "Co-Founder",
    bio: "Former TikTok engineer. Fielded offers from Google and Dropbox. Chose to build something that matters.",
    linkedin: "https://www.linkedin.com/in/danielcha0131/",
    initials: "DC",
    gradient: "linear-gradient(135deg, #6366F1, #A78BFA)",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-base">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">The Team</p>
          <h2 className="section-heading mb-5">
            Healthcare expertise.{" "}
            <span className="gradient-text">World-class engineering.</span>
          </h2>
          <p className="text-slate-muted text-lg max-w-xl mx-auto">
            We built PolyHealth because we understood both sides of the problem — and knew exactly what was missing.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-2xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card rounded-2xl p-8 flex-1"
            >
              {/* Gradient avatar */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg"
                style={{ background: member.gradient }}
              >
                {member.initials}
              </div>

              <h3 className="text-white font-bold text-lg mb-0.5">{member.name}</h3>
              <p className="section-label text-xs mb-4">{member.title}</p>

              <p className="text-slate-muted text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-muted hover:text-primary transition-colors duration-200 font-medium"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
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
