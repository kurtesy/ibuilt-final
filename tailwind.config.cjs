/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLime: '#d9fc35'
      },
      backgroundImage: {
        woodenFlooring: 'url("/src/assets/svg/Flooring/Wooden Flooring Type 1.svg")'
      }
    }
  },
  plugins: []
}
