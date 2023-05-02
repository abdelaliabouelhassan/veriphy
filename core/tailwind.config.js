/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        Garet: ['Garet', 'sans-serif'],
        'Garet-Heavy':['Garet-Heavy', 'sans-serif']
      },
      colors:{
        'body-text-color':'#9e9e9e',
        'primary':'#9e9e9e',
        'light-green':'#07F3BD',
        

      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

