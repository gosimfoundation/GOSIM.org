module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        primary: 'var(--primary)',
        grey: 'var(--grey)',
        secondary: 'var(--secondary)',
      },
      fontFamily: {
        sans: ['Clashdisplay', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '5xl': '3.5rem',
        '7xl': '5.4rem',
      },
      borderRadius: {
        DEFAULT: '0.6rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}