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
        babyBlue: "var(--baby-blue)",
      },
      width: {
        calculatedScroll: "var(--width-calculated-scroll)",
      },
      screens: {
        xs: { min: "370px", max: "639px" },
      }
    },
  },
  plugins: [],
} satisfies Config;
