import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0F766E",
          dark: "#0B5A54",
          deep: "#08403C",
          light: "#E7F2F0",
        },
        cream: {
          DEFAULT: "#FBF8F2",
          card: "#FFFFFF",
          line: "#E7E1D5",
        },
        slate: {
          DEFAULT: "#334155",
          soft: "#5B6B7C",
        },
        honey: {
          DEFAULT: "#B8863D",
          light: "#F3E6CE",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        card: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
