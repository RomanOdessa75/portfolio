import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      xsml: "460px",
      sml: "640px",
      md: "768px",
      mdl: "1024px",
      lg: "1200px",
      xl: "1440px",
      xxl: "1600px",
    },
    extend: {
      fontFamily: {
        sans: "var(--font-archivo)",
        exorts: ['"Exorts Compressed"', "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        "red-orange": {
          500: 'color-mix(in srgb, theme("colors.red.500") 50%, theme("colors.orange.500") 50%)',
        },
      },

      transitionProperty: {
        width: "width",
        transform: "transform",
        padding: "padding",
      },
      // animation: {
      //   marquee: "marquee 40s linear infinite",
      // },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(-50%)" },
      //   },
      // },
    },
  },
  plugins: [],
};
export default config;
