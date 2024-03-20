/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      fontFamily: {
          'inter': ['Inter']
      },
    extend: {
      colors: {
         gray: {
           light: "#E7E7E7",
           lighte:'#FAFAFB',
           lighter: "#E5E5E6",
           soft: "#676879",
           dark: "#808080",
         },
        black: {
           soft: "#121212"
        },
        pink: {
           soft: "#FF626A"
        },
        red: {
           soft: "#ED4D55"
        }
      },
      margin: {

      },
      height: {
        '484': '30.25rem',
        '340': '21.25rem',
        '426': '26.625rem',

      },
      
    },
  },
  plugins: [],
}

