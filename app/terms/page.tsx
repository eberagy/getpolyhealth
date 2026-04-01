import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | GetPolyHealth",
  description: "Terms of use for the GetPolyHealth landing page.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-primary hover:text-white transition-colors">
          ← Back to home
        </Link>
        <h1 className="section-heading mt-8 mb-6">Terms of Use</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-muted">
          <p>
            This website is provided for general informational and marketing purposes.
            Nothing on this site constitutes medical advice, legal advice, or a binding
            offer of service.
          </p>
          <p>
            By using this site, you agree not to misuse the demo request form, attempt
            to interfere with the site, or submit unlawful, misleading, or sensitive
            patient information through the website.
          </p>
          <p>
            PolyHealth may update, suspend, or remove site content at any time without
            notice. We make reasonable efforts to keep information current, but we do
            not guarantee completeness or accuracy.
          </p>
          <p>
            All content, branding, design, and software on this site are owned by
            PolyHealth or its licensors and may not be copied or reused without
            permission.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
            <a className="text-primary hover:text-white" href="mailto:founder@telemd.app">
              founder@telemd.app
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
