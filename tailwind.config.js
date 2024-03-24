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
           buttondark:"#F1EDFE",
           bridge:"#e7e7e6"
         },
        black: {
           soft: "#121212"
        },
        pink: {
           soft: "#FF626A"
        },
        red: {
           soft: "#ED4D55"
        },
        purple: {
          dark: "#5137A6",
          soft:"#8A69F6",
        }

      },
      margin: {

      },
      height: {
        '484': '30.25rem',
        '340': '21.25rem',
        '426': '26.625rem',
        '551':'34.438rem'

      },
      width:{
        '462':'28.875rem'
      }
      
    },
  },
  plugins: [],
}

