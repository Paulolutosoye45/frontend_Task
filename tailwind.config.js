/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'oswald':["Oswald", "sans-serif"],
        "Nerko":[ "Nerko One", "cursive"],
        "Roboto": ["Roboto Slab", "serif"],
        "Inter": ["Inter", "sans-serif"],
        "josefin": ["Josefin Sans", "sans-serif"],
        "Italianno": ["Italianno", "cursive"],
        "Inconsolata":["Inconsolata", "monospace"],
        "poppins":["Poppins", "sans-serif"],
        "Montserrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

