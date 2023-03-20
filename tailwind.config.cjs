/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        'white-opac': '#E6E6E6',
        'light-black': '#636363',
      },
      backgroundImage: {
        'wiggly-lines': "url('../src/assets/wigglyLines.png')",
      },
      fontFamily:{
        'title': ['Montserrat'],
        'content': ['Open Sans'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
