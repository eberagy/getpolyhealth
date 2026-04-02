"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

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
      <div className="mx-auto max-w-7xl">
        <div className="surface grid gap-8 overflow-hidden p-8 sm:p-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="fade-up">
            <p className="section-label">Request Demo</p>
            <h2 className="section-heading">
              A closer look at how the clinic would be{" "}
              <span className="gradient-text"> configured for your workflow.</span>
            </h2>
            <p className="section-copy mt-5 max-w-xl text-lg leading-relaxed">
              Share your clinic details and the operating questions you want to
              cover. We&apos;ll send the request through our existing demo
              workflow and follow up by email.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Review the launch path for your clinic model and visit flow.",
                "Map current forms, intake logic, and staff coordination patterns.",
                "Show how agent templates can be tailored before go-live.",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`fade-up flex items-start gap-3 rounded-[1.25rem] border border-white/8 bg-white/[0.02] px-4 py-4 ${index === 0 ? "fade-delay-1" : index === 1 ? "fade-delay-2" : "fade-delay-3"}`}
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(47,109,246,0.12)] text-xs font-semibold text-[#dce9ff]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-7 text-white/70">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-white/42">
              Questions before submitting? Contact{" "}
              <a className="text-white/74 transition-colors hover:text-white" href={`mailto:${siteConfig.supportEmail}`}>
                {siteConfig.supportEmail}
              </a>
              .
            </p>
          </div>

          <div className="fade-up fade-delay-2 surface-light p-6 sm:p-7">
            {submitted ? (
              <div className="flex h-full flex-col justify-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(47,109,246,0.18)] bg-[rgba(47,109,246,0.08)] text-2xl text-[#245de2]">
                  ✓
                </div>
                <p className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[#0d121a]">
                  Request received.
                </p>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#4d596a]">
                  We&apos;ve sent your request details through the current demo
                  workflow and will follow up by email within 24 hours.
                </p>
                <a href={`mailto:${siteConfig.supportEmail}`} className="btn-secondary mt-8 w-fit border-[#d7dfea] text-[#0d121a]">
                  Email the Team
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#637185]">
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
                      className="rounded-[1rem] border border-[#d8e0eb] bg-white px-4 py-3.5 text-sm text-[#0d121a] placeholder:text-[#8e99aa]"
                    />
                  </label>
                ))}

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#637185]">
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
                    className="rounded-[1rem] border border-[#d8e0eb] bg-white px-4 py-3.5 text-sm text-[#0d121a]"
                  >
                    <option value="">Select visit volume</option>
                    <option value="under-100">Under 100 visits</option>
                    <option value="100-300">100-300 visits</option>
                    <option value="300-600">300-600 visits</option>
                    <option value="600-plus">600+ visits</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#637185]">
                    What do you want to see in the demo?
                  </span>
                  <textarea
                    name="notes"
                    placeholder="Share the workflows, constraints, or launch questions you want to cover."
                    value={form.notes}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        notes: e.target.value,
                      }))
                    }
                    rows={5}
                    className="resize-none rounded-[1rem] border border-[#d8e0eb] bg-white px-4 py-3.5 text-sm text-[#0d121a] placeholder:text-[#8e99aa]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary mt-2 w-full rounded-[1rem] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending request..." : "Request a Demo"}
                </button>
                <p className="text-xs leading-6 text-[#5f6b7d]">We&apos;ll follow up by email</p>
                {error ? <p className="text-sm text-rose-600">{error}</p> : null}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
