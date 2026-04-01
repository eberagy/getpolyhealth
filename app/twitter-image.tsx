import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#0C1220",
          backgroundImage:
            "radial-gradient(circle at top left, rgba(99,102,241,0.28), transparent 35%), radial-gradient(circle at bottom right, rgba(45,212,191,0.2), transparent 30%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: "linear-gradient(135deg, #2DD4BF 0%, #6366F1 100%)",
            }}
          />
          <div>GetPolyHealth</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 70,
              lineHeight: 1.02,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            6 fully customizable AI agents for independent clinics
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.3,
              color: "rgba(241,245,249,0.78)",
              maxWidth: 960,
            }}
          >
            Intake, triage, discharge, pharmacy coordination, and SOAP notes in
            one clinic operating system.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 22,
            color: "rgba(241,245,249,0.72)",
          }}
        >
          <div>$299/week</div>
          <div>Founder-led demo</div>
          <div>Built for independent physicians</div>
        </div>
      </div>
    ),
    size,
  );
}
