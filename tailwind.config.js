/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e6864"
      },
      fontFamily: {
        sans: ["Baskervville", "serif"]
      }
    }
  },
  plugins: []
};
