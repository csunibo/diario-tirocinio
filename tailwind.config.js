/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'csunibo-light-blu': '#0f1f2a',
        'csunibo-dark-blu': '#02111b',
        'csunibo-dark-grey': '#c5c9cc'
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

