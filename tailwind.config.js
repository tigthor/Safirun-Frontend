module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'red': '#f00',
      'blue': '#00f',
    },
    linearGradientColors: theme => theme('colors'),
    radialGradientColors: theme => theme('colors'),
    conicGradientColors: theme => theme('colors'),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-elevation')(['responsive']),
    require('tailwindcss-gradients'),
  ],
};
