/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        theme: "Inter, sans-serif"
      },
      boxShadow: {
        retro: '3px 3px hsl(240, 4%, 38%)'

      }



    },
  },
  plugins: [],
}