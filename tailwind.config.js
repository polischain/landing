module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#3E4A94',
      secondary: '#518FCA',
      dark: '#040815',
      contrast: '#EE4266',
      grey: '#93A3B1',
      darkgrey: '#40484e',
      white: '#fff',
    },
    container: {
      center: true,
    },
    extend: {
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
