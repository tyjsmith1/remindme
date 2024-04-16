/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'typewriter': ['"Courier Prime"', 'monospace']
      },
      colors: {
        'parchment': '#f5f5dc', // Beige-like parchment color
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

