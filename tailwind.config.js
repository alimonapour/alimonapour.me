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
        darkTheme: '#2E3440',
        brand: '#4F46E5',
        midnight: '#121063',
        metal: '#5E81AC',
        tahiti: '#88C0D0',
        silver: '#ECEFE8',
        bubbleGum: '#ff77e9',
        bermuda: '#384252',
        LightYellow: '#EBCB8B',
        lightSalmon: '#D08770',
        LightSkyBlue: '#5E81AC',
        hoverColor: '#464F62',
        titleBgColor: '#3B4252',
        lightTitleBg: '#434C5E',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
