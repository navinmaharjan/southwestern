/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF9C00",
        darkOrange: "#FF8700",
        blue: "#0088CD",
        darkPurple:"#231834",
        gray: "#6C83A2"
      },
      keyframes: {
        dropdownAnimation: {
          "0%": { opacity: 0 },
          "100%": { opacity: 10 },
        },
       
      },
      animation: {
        dropdown: "dropdownAnimation 0.5s linear forwards",
       
       
      }
    },
  },
  plugins: [],
}
