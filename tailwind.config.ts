import type { Config } from "tailwindcss";

const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        darkSlash: "url('../../public/images/general/dark_slash.png')",
        lightSlash: "url('../../public/images/general/light_slash.png')",
      },
      content: {
        darkSlash: "url('../../public/images/general/dark_slash.png')",
        lightSlash: "url('../../public/images/general/light_slash.png')",
      },
      colors: {
        lightBg: "#F5E7D3",
        lightText: "#AC4800",
        lightText80: "rgba(172, 72, 0, 0.8)",
        lightText60: "rgba(172, 72, 0, 0.6)",
        lightText20: "rgba(172, 72, 0, 0.2)",
        darkBg: "#1D1C1C",
        darkText: "#F5E7D3",
        darkText80: "rgba(245, 231, 211, 0.8)",
        darkText60: "rgba(245, 231, 211, 0.6)",
        darkText20: "rgba(245, 231, 211, 0.2)",
        accent: "#323816",
      },
      screens: {
        xs: "480px",
        // => @media (min-width: 480px) { ... }

        sm: "768px",
        // => @media (min-width: 768px) { ... }

        md: "992px",
        // => @media (min-width: 992px) { ... }

        lg: "1200px",
        // => @media (min-width: 1200px) { ... }

        xl: "1320px",
        // => @media (min-width: 1320px) { ... }

        "2xl": "1920px",
      },
      keyframes: {
        smooth: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        carousel: {
          // to: { transform: 'translate(calc(-50% - 23vw))' },
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        carouselSlow: {
          // to: { transform: 'translate(calc(-50% - 23vw))' },
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "appear": "smooth 0.6s cubic-bezier(0.83, 0, 0.17, 1)",
        "carousel": "carousel 7s linear infinite backwards",
        "carousel-slow": "carousel 20s linear infinite backwards",
        "carousel-slower": "carouselSlow 220s linear infinite backwards",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }: { addBase: any; theme: any }) => {
      addBase({
        ".scrollbar::-webkit-scrollbar": {
          width: "3px",
        },
        ".scrollbar::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        ".scrollbar.scrollLight::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(172, 72, 0, 0.8)",
        },
        ".scrollbar.scrollDark::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(245, 231, 211, 0.8)",
        },
      });
    }),
  ],
  darkMode: "selector",
};

export default config;
