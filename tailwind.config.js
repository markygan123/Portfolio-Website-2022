/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: "jit",
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      }
    },
  },
  plugins: [],
}