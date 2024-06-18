module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: '#FFD700',
        turquoise: '#40E0D0',
        burgundy: '#800020',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
