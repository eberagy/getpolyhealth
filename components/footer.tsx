export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <span className="text-[#020C18] font-black text-xs">P</span>
          </div>
          <span className="font-bold text-white tracking-tight">
            Poly<span className="text-primary">Health</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-muted">
          <a href="#agents" className="hover:text-white transition-colors">Agents</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="mailto:team@getpolyhealth.com" className="hover:text-white transition-colors">
            team@getpolyhealth.com
          </a>
        </div>

        {/* Legal */}
        <p className="text-xs text-muted/50">
          © {new Date().getFullYear()} PolyHealth Inc. HIPAA Compliant.
        </p>
      </div>
    </footer>
  );
}
