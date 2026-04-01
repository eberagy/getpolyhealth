import { NextResponse } from "next/server";
import { deliverDemoRequest } from "@/lib/demo-delivery";
import { appendDemoRequest } from "@/lib/demo-requests";
import { consumeRateLimit } from "@/lib/rate-limit";
import { getBookingUrl } from "@/lib/site-config";

type DemoRequestBody = {
  name?: string;
  email?: string;
  clinicName?: string;
  specialty?: string;
  monthlyVisits?: string;
  notes?: string;
  website?: string;
  startedAt?: number;
};

function normalize(value: string | undefined) {
  return value?.trim() ?? "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as DemoRequestBody;

  const website = normalize(body.website);
  const startedAt = Number(body.startedAt);
  const name = normalize(body.name);
  const email = normalize(body.email);
  const clinicName = normalize(body.clinicName);
  const specialty = normalize(body.specialty);
  const monthlyVisits = normalize(body.monthlyVisits);
  const notes = normalize(body.notes);
  const ipAddress =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (website) {
    return NextResponse.json({ error: "Spam detected." }, { status: 400 });
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1500) {
    return NextResponse.json(
      { error: "Please try submitting again." },
      { status: 400 },
    );
  }

  const rateLimit = consumeRateLimit(`demo:${ipAddress}`, 5, 60 * 60 * 1000);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  if (!name || !email || !clinicName || !specialty) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (
    name.length > 120 ||
    email.length > 160 ||
    clinicName.length > 160 ||
    specialty.length > 120 ||
    monthlyVisits.length > 60 ||
    notes.length > 1000
  ) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  const submission = await appendDemoRequest({
    name,
    email,
    clinicName,
    specialty,
    monthlyVisits,
    notes,
  });

  await deliverDemoRequest(submission);

  return NextResponse.json({
    ok: true,
    submissionId: submission.id,
    bookingUrl: getBookingUrl(),
  });
}
