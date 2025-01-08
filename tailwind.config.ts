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
        primary: "rgba(58, 12, 163, 1)",
        hover: "rgba(67, 97, 238, 0.3)",
        textColor1:"rgba(11, 9, 10, 1)",
        textColor2:"rgba(43, 43, 43, 1)",
        textColor3:"rgba(128, 128, 128, 1)",
        textColor4:"rgba(170, 170, 170, 1)",
        footerBg:"rgba(237, 240, 254, 1)",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
