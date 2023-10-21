const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      // gray: '#3A3A3A',
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      orange: colors.orange,
      blue: colors.blueGray,
      color1: '#007DFA',
      color2: '#34D8B3',
      color3: '#BA0C26',
      color4: '#F8B234',
      color5: '#0E3860',
      color6: '#E72A1A',
      color7: '#645C5C',
      color8: '#F8B234',
      color9: '#707070',
      color10: '#0D5692',
      color11: '#C5C9D4',
      color12: '#1C70BF',
      color13: '#2695FF',
      color14: '#333333',
      color15: '#9FAFBF',
      color16: '#B8B8B8',
      color17: '#707070',
      color18: '#E8E8E8',
      color19: '#0D5692',
      color20: '#F3F5F7',
      },
     
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
        
        },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'montserrat': ['Montserrat'],
       },
      extend: {
        backgroundImage: theme => ({
         'hero': "url('/src/assets/hero.png')",
         'action': "url('/src/assets/action.png')",
        })
      },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}
