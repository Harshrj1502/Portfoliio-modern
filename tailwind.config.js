/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary:"#FFFFFF",
        secondary:"#F3F2F1",
        grey:"#7F7F7F",
        darkgrey:"#1D1D1F"
      }
    },
  },
  plugins: [],
}