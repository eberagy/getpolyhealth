import Link from "next/link";
import { Logo } from "@/components/nav";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/54">
            A no-code operating layer for launching and running a unified
            telehealth clinic.
          </p>
        </div>

        <div className="flex flex-col gap-5 text-sm text-white/56 md:items-end">
          <div className="flex flex-wrap gap-5">
            <a href="#workflow" className="transition-colors hover:text-white">Workflow</a>
            <a href="#platform" className="transition-colors hover:text-white">Agent Library</a>
            <a href="#proof" className="transition-colors hover:text-white">Testimonials</a>
            <a href="#security" className="transition-colors hover:text-white">Security</a>
            <a href="#team" className="transition-colors hover:text-white">Team</a>
            <a href="#demo" className="transition-colors hover:text-white">Request Demo</a>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
          </div>
          <a href={`mailto:${siteConfig.supportEmail}`} className="transition-colors hover:text-white">
            {siteConfig.supportEmail}
          </a>
          <p className="text-xs uppercase tracking-[0.16em] text-white/34">
            © {new Date().getFullYear()} PolyHealth Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
