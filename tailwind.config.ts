// tailwind.config.js
import type { Config } from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nextui } = require("@nextui-org/theme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFF1E6",
          "500": "#FF7000",
        },
        dark: {
          "100": "#000000",
          "200": "#0F1117",
          "300": "#151821",
          "400": "#212734",
          "500": "#101012",
        },
        light: {
          "400": "#858EAD",
          "500": "#7B8EC8",
          "700": "#DCE3F1",
          "800": "#F4F6F8",
          "850": "#FDFDFD",
          "900": "#FFFFFF",
        },
      },
      borderRadius: {
        "2": "8px",
        "1.5": "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      screens: {
        xs: "420px",
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        rainbow: {
          "0%": {
            "background-position": "0%",
          },
          "100%": {
            "background-position": "200%",
          },
        },
      },
    },
  },
  darkMode: ["class"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;
