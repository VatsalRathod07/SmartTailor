/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        Crimson: '#D62828', //Buttons, links, or icons
        SlateGray: '#707070', //Headings and Titles
        OffWhite: '#F9F9F9', //Background

        White: '#FFFFFF', //Background
        LightGray: '#E0E0E0', //Buttons, icons, borders
        Charcoal: '#333333', //Text Colo
      },

      fontFamily: {
        Raleway: ['Raleway, sans-serif'],
        // Lato: ['Lato, sans-serif'],
        Playfair: ['Playfair Display, sans-serif'],
      }
    },
  },
  plugins: [],
}