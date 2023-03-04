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
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
