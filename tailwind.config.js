/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        hsrmRed: "#c20008",
        hsrmDarkRed: "#96000f",
        hsrmDarkGrey: "#46413c",
        hsrmDarkGreyDisabled: "#46413c",
        hsrmDarkerGrey: "#24211e",
        hsrmGreen: "#40b131",
        hsrmDarkGreen: "#2d7723",
    },

    },
  },
  plugins: [],
}
