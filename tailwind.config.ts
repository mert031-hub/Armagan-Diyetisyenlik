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
        sage: {
          50: "#f4f7f4",
          100: "#e6eee6",
          200: "#cddccd",
          300: "#a8c2a8",
          400: "#7da17d",
          500: "#5e875e",
          600: "#4a6d4a",
          700: "#3c573c",
          800: "#324632",
          900: "#2a3a2a",
        },
        peach: {
          50: "#fff8f4",
          100: "#ffeee4",
          200: "#ffd9c3",
          300: "#ffbe98",
          400: "#ff9a6c",
          500: "#ff7b47",
          600: "#f05d24",
          700: "#c7491b",
          800: "#a03c1b",
          900: "#82331a",
        },
        terracotta: {
          50: "#fdf5f3",
          100: "#fce8e3",
          200: "#f9d0c7",
          300: "#f4ad9e",
          400: "#ec7f6c",
          500: "#e05a44",
          600: "#cd3f2a",
          700: "#ac321f",
          800: "#8f2c1e",
          900: "#77281e",
        },
        warm: {
          white: "#FDFAF7",
          charcoal: "#3D3832",
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
