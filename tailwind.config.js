const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      truegray: colors.trueGray,
      red: colors.red,
    },
    extend: {
      fontFamily: {
        source: ['"Source Code Pro"'],
      },
      skew: {
        "25": "25deg",
        "-25": "-25deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
