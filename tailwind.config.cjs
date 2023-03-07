/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLime: '#d9fc35'
      },
      backgroundImage: {
        woodenFlooring: 'url("/src/assets/svg/Flooring/Wooden Flooring Type 1.svg")',
        bathFullType13: 'url("/src/assets/svg/Bath/Bath Full Set Type 13.svg")',
        bedType56King: 'url("/src/assets/svg/Beds/King Bed Type 056")',
        blackGraniteDiamond: 'url("/src/assets/svg/Flooring/Black Granite Diamond.svg")',
        balconyOutdoor: 'url("/src/assets/svg/Flooring/Balcony Flooring Outdoors Type 1.svg")',
        pinkMarbleChess2: 'url("/src/assets/svg/Flooring/Flooring Pink Marble Chess Type 2.svg")',
        marbleTypeA: 'url("/src/assets/svg/Flooring/Marble Type A.svg")',
        chessFlooring: 'url("/src/assets/svg/Flooring/Chess FLooring.svg")',
        balconyOrange: 'url("/src/assets/svg/Flooring/balconyFlooring4.svg")'
      }
    }
  },
  plugins: []
}
