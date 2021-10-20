module.exports = {
  purge: [/*'./src/*.{js}', './public/index.html'*/],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      none: 'none',
      initial: "0 1 auto",
      noshrink: "1 0 auto",
      "auto-2": "2 1 auto",
      "auto-3": "3 1 auto",
      "auto-4": "4 1 auto",
      "auto-5": "5 1 auto"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
