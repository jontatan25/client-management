// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        'cmt-blue': '#48caef'
      },
      textColor: {
        'cmt-blue': '#48caef'
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last-child', '&:not(:last-child)') // Adding custom variant for not(:last-child)
    })
  ]
}
