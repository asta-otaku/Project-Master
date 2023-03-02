/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      purple: "#AA66CD",
      white: "#fefefe",
      green: "#145858",
      grey: "#D0DEDE",
      black: "#0F1111",
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
