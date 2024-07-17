/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FC3313",
        secondary:"#FFD4D0",
        black:"#191A1B",
        darkgrey:"#8D8D8D",
        mediumgrey:"#E1E1E1",
        grey:"#F7F7F7"
      }
    },
  },
  plugins: [],
}