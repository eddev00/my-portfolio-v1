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
    },
  },
  plugins: [],
};
