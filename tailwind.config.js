const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), fontFamily: 'Poppins-Black' },
        'h2': { fontSize: theme('fontSize.xl'), fontFamily: 'Poppins-ExtraBold' },
        'h3': { fontSize: theme('fontSize.lg'), fontFamily: 'Poppins-Medium' },
      })
    })
  ],
}
