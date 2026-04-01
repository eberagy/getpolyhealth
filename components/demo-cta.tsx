"use client";

import { useState } from "react";

type DemoRequestPayload = {
  name: string;
  email: string;
  clinicName: string;
  specialty: string;
  monthlyVisits: string;
  notes: string;
  website: string;
  startedAt: number;
};

type DemoRequestResponse = {
  error?: string;
};

async function readDemoResponse(response: Response): Promise<DemoRequestResponse> {
  const rawBody = await response.text();

  if (!rawBody) {
    return {};
  }

  try {
    return JSON.parse(rawBody) as DemoRequestResponse;
  } catch {
    return {};
  }
}

export default function DemoCTA() {
  const [form, setForm] = useState<DemoRequestPayload>({
    name: "",
    email: "",
    clinicName: "",
    specialty: "",
    monthlyVisits: "",
    notes: "",
    website: "",
    startedAt: Date.now(),
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await readDemoResponse(response);

      if (!response.ok) {
        throw new Error(
          data.error || "We couldn't process your request. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (submitError) {
      if (submitError instanceof Error) {
        setError(submitError.message);
      } else {
        setError("We couldn't save your request. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="demo" className="section-base">
      <div className="max-w-6xl mx-auto">
        <div
          className="fade-up relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#f5eee4] p-8 sm:p-10"
          style={{
            boxShadow: "0 24px 70px rgba(4, 10, 22, 0.22)",
          }}
        >
          <div className="relative z-10">
            <p className="mb-4 block text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6a47]">
              Get Started
            </p>
            <h2 className="display-font mb-4 text-4xl leading-tight tracking-tight text-[#1b2730] sm:text-5xl">
              {"You're going to "}
              <span className="text-[#567b72]">want to see this.</span>
            </h2>
            <p className="mb-10 max-w-xl text-lg text-[#5b6670]">
              Share a few details about your clinic and what you want to see.
              We&apos;ll review the request and follow up by email.
            </p>

            {submitted ? (
              <div className="flex flex-col items-start gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
                  style={{ background: "rgba(86,123,114,0.12)", border: "1px solid rgba(86,123,114,0.25)" }}
                >
                  ✓
                </div>
                <p className="text-xl font-bold text-[#1b2730]">Request received.</p>
                <p className="text-sm text-[#5b6670]">
                  We&apos;ve emailed your request details to our team. We&apos;ll
                  follow up by email within 24 hours.
                </p>
                <a href="mailto:founder@telemd.app" className="btn-secondary mt-2">
                  Email the Team
                </a>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:text-left">
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto flex w-full max-w-lg flex-col gap-3 lg:mx-0"
                >
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        website: e.target.value,
                      }))
                    }
                    className="hidden"
                    aria-hidden="true"
                  />
                  {[
                    { name: "name", label: "Your name", placeholder: "Your name", type: "text", required: true },
                    { name: "email", label: "Work email", placeholder: "Work email", type: "email", required: true },
                    { name: "clinicName", label: "Clinic or practice name", placeholder: "Clinic or practice name", type: "text", required: true },
                    { name: "specialty", label: "Specialty", placeholder: "Specialty", type: "text", required: true },
                  ].map((field) => (
                    <label key={field.name} className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6d7276]">
                        {field.label}
                      </span>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        autoComplete={
                          field.name === "name"
                            ? "name"
                            : field.name === "email"
                              ? "email"
                              : "organization"
                        }
                        value={form[field.name as keyof DemoRequestPayload]}
                        onChange={(e) =>
                          setForm((current) => ({
                            ...current,
                            [field.name]: e.target.value,
                          }))
                        }
                        className="rounded-xl px-4 py-3.5 text-sm text-[#1b2730] placeholder:text-[#87919a] transition-colors"
                        style={{
                          background: "rgba(255,255,255,0.72)",
                          border: "1px solid rgba(27,39,48,0.08)",
                        }}
                      />
                    </label>
                  ))}

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6d7276]">
                      Approximate monthly visit volume
                    </span>
                    <select
                      name="monthlyVisits"
                      value={form.monthlyVisits}
                      onChange={(e) =>
                        setForm((current) => ({
                          ...current,
                          monthlyVisits: e.target.value,
                        }))
                      }
                      className="rounded-xl px-4 py-3.5 text-sm text-[#1b2730] transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.72)",
                        border: "1px solid rgba(27,39,48,0.08)",
                      }}
                    >
                      <option value="" className="bg-white text-[#5b6670]">
                        Select visit volume
                      </option>
                      <option value="under-100" className="bg-white">
                        Under 100 visits
                      </option>
                      <option value="100-300" className="bg-white">
                        100-300 visits
                      </option>
                      <option value="300-600" className="bg-white">
                        300-600 visits
                      </option>
                      <option value="600-plus" className="bg-white">
                        600+ visits
                      </option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6d7276]">
                      What do you want to see in the demo?
                    </span>
                    <textarea
                      name="notes"
                      placeholder="What do you want to see in the demo?"
                      value={form.notes}
                      onChange={(e) =>
                        setForm((current) => ({
                          ...current,
                          notes: e.target.value,
                        }))
                      }
                      rows={4}
                      className="resize-none rounded-xl px-4 py-3.5 text-sm text-[#1b2730] placeholder:text-[#87919a] transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.72)",
                        border: "1px solid rgba(27,39,48,0.08)",
                      }}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary mt-1 text-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Saving request..." : "Request a Demo"}
                  </button>
                  <p className="mt-1 text-xs text-[#7b848d]">
                    {"We'll reach out within 24 hours. No spam, ever."}
                  </p>
                  {error ? <p className="text-sm text-rose-600">{error}</p> : null}
                </form>

                <div className="fade-up fade-delay-2 rounded-[1.75rem] border border-[#d7c7b4] bg-[#efe2d3] p-6 text-left">
                  <p className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6a47]">
                    In Your Demo
                  </p>
                  <h3 className="mb-4 text-2xl font-semibold text-[#1b2730]">
                    We walk through the exact workflow your clinic would use.
                  </h3>
                  <ul className="space-y-4 text-sm text-[#5b6670]">
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#567b72]">01</span>
                      <span>Patient books and gets contacted automatically for intake.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#567b72]">02</span>
                      <span>Provider joins the visit with a prepared chart and AI-drafted note.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-[#567b72]">03</span>
                      <span>Discharge, follow-up, and pharmacy coordination happen automatically.</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-2xl border border-[#b8c9bf] bg-[#f7fbf8] px-4 py-4 text-sm text-[#5b6670]">
                    Best for independent physicians, small group practices, and telehealth-first clinics that want leverage before hiring more staff.
                  </div>
                  <p className="mt-4 text-xs text-[#7b848d]">
                    We&apos;ll follow up by email after reviewing your request,
                    or you can contact founder@telemd.app directly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
