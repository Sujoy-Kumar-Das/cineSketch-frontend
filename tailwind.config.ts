import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6d28d9",
          700: "#5b21b6",
        },
        secondary: {
          500: "#ec4899",
          700: "#db2777",
        },
        dark: {
          bg: "#0f0f0f",
          bg2: "#1a0b2e",
          foreground: "#171717",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #6d28d9 0%, #ec4899 100%)",
        "dark-gradient": "linear-gradient(135deg, #0f0f0f 0%, #1a0b2e 100%)",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.1)" },
        },
      },
      animation: {
        "glow-slow": "glow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
