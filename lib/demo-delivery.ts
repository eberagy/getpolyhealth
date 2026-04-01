import { siteConfig } from "@/lib/site-config";
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

export async function deliverDemoRequest(submission: DemoRequest) {
  const webhookUrl = process.env.DEMO_REQUEST_WEBHOOK_URL?.trim();
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const notifyEmail =
    process.env.DEMO_REQUEST_NOTIFY_EMAIL?.trim() || siteConfig.supportEmail;

  const tasks: Promise<Response>[] = [];

  if (webhookUrl) {
    tasks.push(
      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      }),
    );
  }

  if (resendApiKey && notifyEmail) {
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.DEMO_REQUEST_FROM_EMAIL?.trim() ||
            "PolyHealth Demo <demo@getpolyhealth.com>",
          to: [notifyEmail],
          subject: `New demo request from ${submission.name}`,
          reply_to: submission.email,
          html: buildEmailHtml(submission),
        }),
      }),
    );
  }

  if (!tasks.length) {
    return {
      delivered: false,
      channels: [],
    };
  }

  const results = await Promise.allSettled(tasks);
  const failures = results.filter(
    (result) => result.status === "rejected" || !result.value.ok,
  );

  if (failures.length === results.length) {
    throw new Error("All outbound lead delivery methods failed.");
  }

  return {
    delivered: true,
    channels: {
      webhook: Boolean(webhookUrl),
      resend: Boolean(resendApiKey && notifyEmail),
    },
  };
}
