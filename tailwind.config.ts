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
        textColor5:"rgba(212, 212, 212, 1)",
        inputBg:"rgba(212, 212, 212, 0.2)",
        footerBg:"rgba(237, 240, 254, 1)",
        color1:"rgba(67, 97, 238, 1)", 
        color2:"rgba(76, 201, 240, 1)", 
        color3:"rgba(114, 9, 183, 1)", 
        color4:"rgba(247, 37, 133, 1)", 
        chipBg1:"rgba(255, 225, 225, 1)",
        chipBg2:"rgba(215, 238, 255, 1)",
        chipBg3:"rgba(241, 255, 241, 1)",
        chipTextColor1:"rgba(255, 17, 17, 1)",
        chipTextColor2:"rgba(17, 155, 255, 1)",
        chipTextColor3:"rgba(0, 206, 58, 1)",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
