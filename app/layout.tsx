import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: "GetPolyHealth | AI Clinic OS for Independent Physicians",
  description:
    "Book a PolyHealth demo and see how six fully customizable AI agents handle intake, triage, discharge, pharmacy coordination, and SOAP notes for independent physicians.",
  metadataBase: new URL("https://www.getpolyhealth.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "telemedicine",
    "AI clinic",
    "telehealth",
    "physician practice management",
    "AI medical intake",
    "SOAP notes AI",
    "independent physician",
  ],
  openGraph: {
    title: "GetPolyHealth | AI Clinic OS for Independent Physicians",
    description:
      "See the founder-led PolyHealth demo for independent physicians.",
    type: "website",
    siteName: "GetPolyHealth",
    url: "https://www.getpolyhealth.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetPolyHealth | AI Clinic OS for Independent Physicians",
    description:
      "See how six fully customizable AI agents can run intake, triage, discharge, pharmacy coordination, and SOAP notes for your clinic.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: siteConfig.supportEmail,
    logo: `${siteConfig.siteUrl}/icon.png`,
    sameAs: [
      "https://www.linkedin.com/company/polyhealth",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
