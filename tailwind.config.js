/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#65a30d",
        secondary: "#eab308",
        "background-light": "#fcfdf7",
        "background-dark": "#1a1c18",
        "surface-light": "#ffffff",
        "surface-dark": "#272925",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
