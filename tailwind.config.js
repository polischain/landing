module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: '#040815',
        dark_contrast_transparent: 'rgba(45,45,45,0.85)',
        dark_contrast: 'rgb(45,45,45)',
        primary: '#3E4A94',
        secondary: '#518FCA',
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
