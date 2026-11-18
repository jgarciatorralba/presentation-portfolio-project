import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        blue: "var(--blue)",
        midnightBlue: "var(--midnight-blue)",
        vividBlue: "var(--vivid-blue)",
      },
      width: {
        calculatedScroll: "var(--width-calculated-scroll)",
      },
      screens: {
        xs: { min: "370px", max: "639px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      }
    },
  },
  plugins: [],
} satisfies Config;
