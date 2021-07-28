module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: '#040815',
        background_contrast: '#313131',
      },
      boxShadow: {
        'blue-glow': '0px 57px 90px -47px rgba(39, 176, 230, 0.17)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
