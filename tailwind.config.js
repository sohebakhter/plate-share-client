/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        light: {
          primary: "#10B981",
          secondary: "#64748B",
          accent: "#F59E0B",
          neutral: "#374151",
          "base-100": "#FFFFFF",
          "base-200": "#F9FAFB",
          "base-300": "#F3F4F6",
        },
        dark: {
          primary: "#10B981",
          secondary: "#64748B",
          accent: "#F59E0B",
          neutral: "#1F2937",
          "base-100": "#111827",
          "base-200": "#1F2937",
          "base-300": "#374151",
        },
      },
    ],
  },
};
