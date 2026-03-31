"use client";

import { useState } from "react";

export default function DemoCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="demo" className="section-base">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative rounded-3xl p-12 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(45,212,191,0.07) 0%, rgba(99,102,241,0.10) 100%)",
            border: "1px solid rgba(45,212,191,0.15)",
          }}
        >
          {/* Ambient orbs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-indigo/8 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <p className="section-label mb-4 block">Get Started</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              You&apos;re going to{" "}
              <span className="gradient-text">want to see this.</span>
            </h2>
            <p className="text-slate-muted text-lg mb-10 max-w-xl mx-auto">
              20 minutes. We&apos;ll show you exactly how PolyHealth works —
              and how fast you can launch.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.25)" }}
                >
                  ✓
                </div>
                <p className="text-white font-bold text-xl">You&apos;re on the list.</p>
                <p className="text-slate-muted text-sm">
                  We&apos;ll reach out within 24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 max-w-md mx-auto"
              >
                {[
                  { name: "name", placeholder: "Your name", type: "text", required: true },
                  { name: "email", placeholder: "Work email", type: "email", required: true },
                  { name: "specialty", placeholder: "Specialty (e.g. Family Medicine)", type: "text", required: false },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="px-4 py-3.5 rounded-xl text-white placeholder:text-slate-subtle text-sm focus:outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(45,212,191,0.4)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  />
                ))}
                <button type="submit" className="btn-primary mt-1 text-white">
                  Request a Demo
                </button>
                <p className="text-slate-subtle text-xs mt-1">
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
