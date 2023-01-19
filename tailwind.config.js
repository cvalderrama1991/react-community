/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        lg: "20px",
      },
      colors: {
        blue: {
          lighter: "rgba(198,230,255,1)",
          light: "rgba(0, 122, 255, 1)",
          dark: "rgba(20, 39, 58, 1)",
        },
      },
    },
  },
  plugins: [],
}
