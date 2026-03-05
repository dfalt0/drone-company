import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Industrial / Synthetic palette from design refs
        brand: {
          black: "#1F1F1B",
          charcoal: "#1F2022",
          orange: "#FF5837",
          "orange-muted": "#EA5229",
          yellow: "#FFFB26",
          "yellow-gold": "#F5D200",
          green: "#8BFF81",
          tan: "#E9E6D4",
          "tan-warm": "#CFCBBF",
          "gray-mid": "#4E4A3E",
          white: "#FFFFFF",
        },
        // Grayscale for UI
        surface: {
          dark: "#1F2022",
          card: "#2A2B2E",
          muted: "#4E4A3E",
          border: "#3F3D38",
        },
      },
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255,88,55,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,88,55,0.03) 1px, transparent 1px)",
        "grid-dots": "radial-gradient(circle, rgba(255,88,55,0.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "24px 24px",
        "grid-dots": "20px 20px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.6" },
          "100%": { opacity: "1" },
        },
      },
      borderColor: {
        accent: "rgba(255, 88, 55, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
