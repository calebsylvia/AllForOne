/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    './pages/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'text': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

