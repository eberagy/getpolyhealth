import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | GetPolyHealth",
  description: "Privacy policy for the GetPolyHealth landing page.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-primary hover:text-white transition-colors">
          ← Back to home
        </Link>
        <h1 className="section-heading mt-8 mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-muted">
          <p>
            GetPolyHealth collects information you submit through the demo request form,
            including your name, email address, clinic name, specialty, visit volume,
            and any notes you provide.
          </p>
          <p>
            We use this information to respond to demo requests, evaluate interest in
            PolyHealth, improve our marketing site, and communicate about the product.
            We do not sell your information.
          </p>
          <p>
            We may use service providers to help us process form submissions, send
            notifications, and analyze website traffic. Those providers only receive
            the information needed to perform their services.
          </p>
          <p>
            This website is a marketing site and is not intended for the submission of
            patient data or protected health information. Please do not submit PHI
            through the demo form.
          </p>
          <p>
            To request deletion of your submitted information or ask a privacy
            question, contact <a className="text-primary hover:text-white" href="mailto:founder@telemd.app">founder@telemd.app</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
