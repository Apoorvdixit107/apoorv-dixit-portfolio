import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: "#17202a",
        paper: "#f7fafc",
        accent: "#0f766e",
        "accent-strong": "#115e59",
        warm: "#c76d2f",
        cool: "#2563eb"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 32, 42, 0.12)"
      },
      animation: {
        "fade-up": "fadeUp 700ms ease-out both",
        "float-note": "floatNote 5s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
        "toast-in": "toastIn 280ms ease-out both"
      },
      keyframes: {
        toastIn: {
          from: { opacity: "0", transform: "translateX(16px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        floatNote: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" }
        },
        shimmer: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "100% 50%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
