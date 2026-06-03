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
        coral: {
          50: "#FFF9F6",
          100: "#FDEEE9",
          200: "#F9D5CB",
          300: "#F4B8A8",
          400: "#EDA494",
          500: "#E89B8C",
          600: "#D47A6A",
          700: "#BF5E4E",
        },
        terracotta: {
          50: "#FDF5F3",
          100: "#FAE5E0",
          200: "#F4C9C0",
          300: "#EBA597",
          400: "#DF7C6B",
          500: "#C26D5D",
          600: "#A85849",
          700: "#8E463A",
          800: "#742F24",
          900: "#5A1C13",
        },
        warm: {
          white: "#FFF9F6",
          charcoal: "#3B3B3B",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
