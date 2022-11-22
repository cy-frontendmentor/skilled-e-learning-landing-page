/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'grey-waikawa': '#666CA3',
        'blue-dark': '#13183F',
        grey: '#83869A',
        'red-pinkish': '#F74780',
        pink: '#FFA7C3',
        white: '#FFF',
        'white-transparent': 'rgba(255,255,255,50%)',
        'pink-neon': '#F02AA6',
        'orange-pinkish': '#FF6F48',
        'blue-ultramarine': '#4851FF',
      },
      fontFamily: {
        sans: ['var(--font-plus_jakarta_sans)'],
      },
    },
  },
  plugins: [],
};
