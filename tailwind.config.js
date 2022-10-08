/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Roboto', 'Inter', 'sans-serif'],
        mono: ['Roboto Mono'],
      },
      colors: {
        darkTheme: '#242933',
        brand: '#4F46E5',
        midnight: '#121063',
        metal: '#5E81AC',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        bubbleGum: '#ff77e9',
        bermuda: '#78dcca',
        LightYellow: '#EBCB8B',
        lightSalmon: '#D08770',
        LightSkyBlue: '#5E81AC',
      },
      listStyleType: {
        hashtag: '##',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
