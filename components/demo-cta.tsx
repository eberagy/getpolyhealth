"use client";

import { useState } from "react";

export default function DemoCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="demo" className="py-28 px-6 section-divider">
      <div className="max-w-3xl mx-auto">
        <div className="relative bg-card rounded-3xl p-12 border border-primary/15 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />

          <div className="relative z-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              You&apos;re going to want to see this.
            </h2>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Book a 20-minute demo. We&apos;ll show you exactly how PolyHealth
              works — and how fast you can launch.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                  ✓
                </div>
                <p className="text-white font-semibold text-lg">You&apos;re on the list.</p>
                <p className="text-muted text-sm">
                  We&apos;ll reach out within 24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-md mx-auto"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                <input
                  type="text"
                  name="specialty"
                  placeholder="Specialty (e.g. Family Medicine)"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  className="py-4 rounded-xl bg-primary text-[#020C18] font-bold text-base hover:bg-primary-dim transition-all duration-200 hover:scale-[1.01]"
                >
                  Request a Demo
                </button>
                <p className="text-muted text-xs">
                  We&apos;ll reach out within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
