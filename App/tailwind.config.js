module.exports = {
  content: ['./src/**/*.{vue,jsx,ts,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        hero: 'repeat(auto-fit, minmax(320px, 1fr))',
        cards: 'repeat(auto-fit, minmax(320px, 1fr))',
      },
    },
    colors: {
      main: '#fbe8a6',
      second: '#f4976c',
      // b4dfe5
      third: '#303C6C',
      fourth: '#d2fdff',
      accent: '#064789',
      lightaccent: '#00A7E1',
      offWhite: '#EFEFEF',
      white: '#fff',
      black: '#1f2937',
      grey: '#d3d3d3',
      lightgrey: '#eeeeee'

    },
  
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
