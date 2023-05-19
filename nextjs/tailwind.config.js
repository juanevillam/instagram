/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        700: "700px",
      },
      screens: {
        screen880px: "880px",
      },
      width: {
        350: "350px",
        430: "430px",
      },
    },
  },
  plugins: [],
};
