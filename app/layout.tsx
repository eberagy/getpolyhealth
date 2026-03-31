import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PolyHealth — The AI Clinic OS for Independent Physicians",
  description:
    "Launch a fully automated telehealth practice with 6 AI agents handling intake, triage, discharge, pharmacy, and clinical notes. $299/week. Everything included.",
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
    title: "PolyHealth — The AI Clinic OS for Independent Physicians",
    description:
      "Six AI agents. One complete telehealth practice. Launch in days.",
    type: "website",
    siteName: "PolyHealth",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
