/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        heading: ['28px', { lineHeight: '17px', fontWeight: '500' }],
      },
      colors: {
        'text-dark': '#1D2226',
      },
      letterSpacing: {
        0: '0px',
      },
    },
  },
  plugins: [],
}
