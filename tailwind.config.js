/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      colors: {
        text_grey: "rgba(255, 255, 255, 0.65)",
        text_green: "rgba(106, 255, 121, 0.65);",
      },
      screens: {
        small: { max: "980px" },
        large: { min: "981px" },
        md: { min: "1440px" },
        sd: { max: "1440px" },
      },
    },
  },
  plugins: [],
};
