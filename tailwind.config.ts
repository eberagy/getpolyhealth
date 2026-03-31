import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020C18",
        card: "#061828",
        "card-hover": "#0A2240",
        primary: "#00D4AA",
        "primary-dim": "#00A882",
        border: "rgba(255,255,255,0.07)",
        muted: "#8BA8C4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,212,170,0.12) 0%, transparent 60%)",
        "card-glow":
          "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,212,170,0.06) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
