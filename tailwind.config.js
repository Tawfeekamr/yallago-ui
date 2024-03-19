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
           lighter: "#E5E5E6",
           light: "#E7E7E7",
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

      }
    },
  },
  plugins: [],
}

