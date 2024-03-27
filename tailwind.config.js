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
           bridge:"#e7e7e6",
           rounded:"#E7E7E9",
           grayborder:"#F0F0F0",
           text:"#9B9DA3"
         },
        black: {
           soft: "#121212",
           dark:"#18202F"
        },
        pink: {
           soft: "#FF626A"
        },
        red: {
           soft: "#ED4D55",
           dark:"#D41E27",
           rounded:"#F44A4A"
        },
        purple: {
          dark: "#5137A6",
          soft:"#8A69F6",
        },
        green:{
          soft:"#34B166"
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

