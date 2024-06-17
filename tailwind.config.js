/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'csunibo-light-blu': '#0f1f2a',
        'csunibo-dark-blu': '#02111b'
      },
    },
  },
  plugins: [],
}

