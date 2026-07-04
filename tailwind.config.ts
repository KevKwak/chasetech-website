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
        brand: {
          50:  "#F0F6FF",
          100: "#D9E5FF",
          200: "#BCD2FF",
          300: "#8FB8FF",
          400: "#5E94FF",
          500: "#1E90FF",
          600: "#1E3A6B",
          700: "#1F3C72",
          800: "#162D56",
          900: "#0F1F3A",
        },
        dark: {
          900: "#0F172A",
          800: "#1E293B",
        },
        accent: "#00D4AA",
      },
      fontFamily: {
        sans: ["Noto Sans SC", "Inter", "Noto Sans KR", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
