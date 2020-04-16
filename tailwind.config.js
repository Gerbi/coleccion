module.exports = {
  theme: {
    extend: {
      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        '90': '22rem',
      },
      screens: {
        '2xl': '1440px',
        '7xl': '80rem',
      },
    },
  },
  colors: {
    'blacks': '#fff',
  },
  radialGradientColors: theme => theme('colors'),
  variants: {},
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
