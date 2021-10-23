module.exports = {
  purge: {enabled: true, content: ['./src/*.js', './public/index.html']},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        noshrink: "1 0 auto",
        "auto-2": "2 1 auto",
        "auto-3": "3 1 auto",
        "auto-4": "4 1 auto",
        "auto-5": "5 1 auto"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
