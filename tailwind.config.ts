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
        midnightBlue: "var(--midnight-blue)",
        babyBlue: "var(--baby-blue)",
      }
    },
  },
  plugins: [],
} satisfies Config;
