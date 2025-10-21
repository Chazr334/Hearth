import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0E0E0E",
        amber: "#D9A441",
        iron: "#7A2E1F",
        bone: "#F3F1E9",
        smoke: "#555555",
        moss: "#4C5B3D"
      },
      fontFamily: {
        display: ["var(--font-heading)"],
        serif: ["var(--font-subhead)"],
        body: ["var(--font-body)"]
      },
      backgroundImage: {
        "stone-texture": "url('/textures/stone.jpg')"
      },
      boxShadow: {
        ember: "0 0 45px rgba(217, 164, 65, 0.2)"
      },
      borderImage: {
        rune: "linear-gradient(90deg, rgba(217,164,65,0.6), rgba(122,46,31,0.6)) 1"
      },
      keyframes: {
        ember: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(-10px)", opacity: "0.8" }
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(217,164,65,0.1)" },
          "50%": { boxShadow: "0 0 25px rgba(217,164,65,0.25)" }
        }
      },
      animation: {
        ember: "ember 6s ease-in-out infinite",
        glow: "glow 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
