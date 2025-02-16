import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF703E",
      },
      fontSize: {
        '10': '10px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '25': '25px',
        '27': '27px',
        '30': '30px',
        '45': '45px',
        '55': '55px',
        '60': '60px',
      },
    },
  },
  plugins: [],
} satisfies Config;
