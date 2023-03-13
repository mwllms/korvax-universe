const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Sora', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          accent: colors.pink[50],
          light: colors.pink[500],
          DEFAULT: colors.pink[600],
          dark: colors.pink[800],
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
