/* eslint-disable @typescript-eslint/no-var-requires */
const { colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        neutral: colors.gray,
      },
      borderRadius: {
        xlg: '2rem',
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: [],
};
