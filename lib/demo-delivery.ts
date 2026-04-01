import nodemailer from "nodemailer";
import type { DemoRequest } from "@/lib/demo-requests";

function buildEmailHtml(submission: DemoRequest) {
  return `
    <h2>New PolyHealth Demo Request</h2>
    <p><strong>Name:</strong> ${submission.name}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    <p><strong>Clinic:</strong> ${submission.clinicName}</p>
    <p><strong>Specialty:</strong> ${submission.specialty}</p>
    <p><strong>Monthly Visits:</strong> ${submission.monthlyVisits || "Not provided"}</p>
    <p><strong>Notes:</strong> ${submission.notes || "None"}</p>
    <p><strong>Created At:</strong> ${submission.createdAt}</p>
  `;
}

function buildEmailText(submission: DemoRequest) {
  return [
    "New PolyHealth Demo Request",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Clinic: ${submission.clinicName}`,
    `Specialty: ${submission.specialty}`,
    `Monthly Visits: ${submission.monthlyVisits || "Not provided"}`,
    `Notes: ${submission.notes || "None"}`,
    `Created At: ${submission.createdAt}`,
  ].join("\n");
}

export async function deliverDemoRequest(submission: DemoRequest) {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpPort = Number(process.env.SMTP_PORT);
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const notifyEmail = process.env.DEMO_REQUEST_NOTIFY_EMAIL?.trim();
  const fromEmail = process.env.DEMO_REQUEST_FROM_EMAIL?.trim();

  if (!smtpHost) {
    throw new Error("Missing SMTP_HOST.");
  }

  if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
    throw new Error("Missing or invalid SMTP_PORT.");
  }

  if (!smtpUser) {
    throw new Error("Missing SMTP_USER.");
  }

  if (!smtpPass) {
    throw new Error("Missing SMTP_PASS.");
  }

  if (!notifyEmail) {
    throw new Error("Missing DEMO_REQUEST_NOTIFY_EMAIL.");
  }

  if (!fromEmail) {
    throw new Error("Missing DEMO_REQUEST_FROM_EMAIL.");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const info = await transporter.sendMail({
    from: fromEmail,
    to: notifyEmail,
    subject: `New demo request from ${submission.name}`,
    replyTo: submission.email,
    html: buildEmailHtml(submission),
    text: buildEmailText(submission),
  });

  return {
    delivered: true,
    channels: {
      smtp: true,
    },
    id: info.messageId,
  };
}
