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
        // secondary: '#00FF00',
        // tertiary: '#0000FF',
      },
    },
  },
  plugins: [],
}