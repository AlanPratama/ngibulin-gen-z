/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#010d01',
      },
      fontFamily: {
        impact: ['Impact', 'sans-serif']
      }
    },
  },
  plugins: [],
}