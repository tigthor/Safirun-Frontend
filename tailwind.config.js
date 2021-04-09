const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./src/**/*.jsx',
   './src/**/*.js',
   "./components/**/*.{jsx,js}",
   "./pages/**/*.{jsx,js}",
   "./components/**/**/*.{jsx,js}",
   "./components/**/**/**/*.{jsx,js}",
   "./components/*.{jsx,js}",
   "./components/**/**/**/*.{jsx,js}",
   "./components/**/**/**/**/*.{jsx,js}",
   "./pages/**/**/*.{jsx,js}",
   "./pages/**/**/**/*.{jsx,js}",
   "./pages/*.{jsx,js}",
   "./pages/**/**/**/*.{jsx,js}",
   "./pages/**/**/**/**/*.{jsx,js}"
   ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      orange: {
        100: "#fbecdb",
        200: "#f7dab8",
        300: "#f2c794",
        400: "#eeb571",
        500: "#eaa24d",
        600: "#bb823e",
        700: "#8c612e",
        800: "#5e411f",
        900: "#2f200f"
      },
      green: {
        100: "#d3f0cf",
        200: "#a7e1a0",
        300: "#7ad370",
        400: "#4ec441",
        500: "#22b511",
        600: "#1b910e",
        700: "#146d0a",
        800: "#0e4807",
        900: "#072403"
      }
    }
  },
  variants: {},
  plugins: [],
};
