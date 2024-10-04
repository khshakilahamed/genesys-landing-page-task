/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      act_of_rejection: ["act_of_rejection", "sans-serif"],
      inter: ["inter", "sans-serif"],
      montserrat: ["montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        'xxs': '440px',
        'xs': '500px',
        '3xl': '1618px',
      },
      colors: {
        red: {
          1: '#EF5256',
          2: '#EC3339',
          3: '#EA2127',
          4: '#DE2A2F',
          5: '#BB1117'
        },
        // white: {
        //   1: '#FFFFFF',
        // },
        gray: {
          1: '#F6F5F5'
        }
      }
    },
  },
  plugins: [],
}

