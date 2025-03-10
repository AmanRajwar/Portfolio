/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'rgba(var(--background))',
        color1:'rgba(var(--color1))',
        blue1:'#0077b6'
      }
    },
  },
  plugins: [],
}