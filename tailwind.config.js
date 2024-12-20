/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-1': '#FF8018',
        'orange-2': '#F02E0C'
      },
      fontFamily: {
        'richmond': ['Richmond Display', 'serif'],
        'source-serif': ['Source Serif Pro', 'serif'],
      }
    },
  },
  plugins: [],
}