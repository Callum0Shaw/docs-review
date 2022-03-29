module.exports = {
  content: ['./src/**/*.{vue,jsx,ts,js}'],
  theme: {
    extend: {
      animation: {
        dropDown: 'animation: growDown 300ms ease-in-out forwards',
      },
      keyframes: {
        growUp: {
          '0%': { transform: 'scale: 0' },
          '80%': { transform: 'scale: 0.5' },
          '100%': { transform: 'scale: 1' },
        },
      },
      gridTemplateColumns: {
        hero: 'repeat(auto-fit, minmax(320px, 1fr))',
        cards: 'repeat(auto-fit, minmax(320px, 1fr))',
      },
    },
    colors: {
      main: '#fbe8a6',
      second: '#f4976c',
      third: '#303C6C',
      fourth: '#d2fdff',
      accent: '#064789',
      lightaccent: '#00A7E1',
      offWhite: '#f5f5f5',
      white: '#fff',
      black: '#1f2937',
      grey: '#d3d3d3',
      lightgrey: '#f3f4f6',
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
};
