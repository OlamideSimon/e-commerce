module.exports = {
  content: ["./src/**/*.{tsx, jsx, js, ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/images/image1.png')",
        'hero2': "url('/src/images/contact.png')",
      }
    },
  },
  plugins: [],
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
  },
}
