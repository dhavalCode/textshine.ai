import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      colors: {
        neutral: {
          800: "#0e1425",
          200: "#e8ebf3",
          100: "white",
          300: "#b0b6c7",
          600: "#2a3246",
          500: "#454c5e",
          700: "#101627",
          400: "#5b637c",
        },
        secondary: "#57c3ff",
        accent: "#6c72ff",
      },
    },
  },
  plugins: [],
};
export default config;
