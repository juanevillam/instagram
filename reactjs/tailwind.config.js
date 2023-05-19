module.exports = {
  node: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      inset: {
        "1/5": "45%"
      },
      animation: ['motion-safe'],
      fontFamily : {
        sans : ['Poppins', 'sans-serif']
      },
      fontSize: {
        "xxs": ".65rem",
      },
      maxHeight: {
        "38": "9.2rem",
        "49": "12.2rem",
        "50": "12.63rem",
        "100": "26rem",
      },
      maxWidth: {
        "4.5xl": "60rem"
      },
      spacing: {
        avatar: "0.09rem",
        '4.5' : '1.125rem',
        26: "6.5rem",
        30: "7.5rem"
      },
      animation: ["motion-safe"],
      colors: {
        dark: {
          100: "#121212",
          200: "#363636",
          300: "#262626",
          400: "#323436",
        },
        orange : {
          500 : '#F4694C',
          600 : '#ee5c3e',
        },
        smoke: {
          100: "#FAFAFA",
          200: "#DBDBDB",
          300: "#EFEFEF",
          400: "#A8ACC5",
          500: "#8E8E95",
          600: "#C7C7D1",
        },
        instagram: {
          100: "#0095F6",
          200: "#1778F2"
        }
      },
      boxShadow: {
        lgOrange: '0px 5px 14px rgba(244, 105, 76, 0.25)'
      },
      height: {
        84: "21.4rem",
        90: "85%",
        93: "90%",
        100: "22rem"
      },
      width: {
        100: "34rem",
        98: "30.5rem",
        "11.5/12": "98%",
      }
    },
  },
  variants: {
    extend: {
      display: ["dark"],
      fontWeight: ["dark"],
      cursor: ["disabled"],
      opacity: ["disabled"],
      borderColor: ["dark"],
      borderRadius: ["dark"],
      backgroundColor: ["hover"],
      padding: ["dark"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [
  ]
};