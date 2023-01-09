module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat']
      },
      colors: {
        ingubu: {
          'primary': '#4b73f0',
          'secondary': '#f76c69',
          'light': '#e2e2ed',
          'dark': '#1e1e1e'

        }
      }
    },
  },
  plugins: [],
}
