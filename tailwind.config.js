/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      farms: {
          yellow: '#FFFB21',
          text: '#034171',
          red: '#9F390C',
          bg: '#D9D9D9',

      },
      bayer: {
        green: '#89D329',
        text: '#10384F',
        blue: '#00BCFF',
        bg: '#F7F8EF',
      },
      ndsu: {
        green: '#005643',
        text: '#13272E',
        gold: '#FFC82E',
        bg: '#FFFAF1',
      },
  },extend: {},
  },
  plugins: [],
}

