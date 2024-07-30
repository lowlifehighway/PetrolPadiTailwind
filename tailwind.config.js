/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.{html,js}'],
  theme: {
    screens: {
      'laptop/tablet': { max: '1200px' },
      tablet: { max: '944px' },
      mobile: { max: '560px' },
      //
      '2xl': '1440px',
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
    },
    extend: {
      colors: {
        PaleRed: '#e0334c',
        DarkBlue: '#040815',
        'almost-black': '#110a0b',
        myGray: '#1d1c1c',
        myGray2: '#e8e8e8',
        'lighter-blue': '#1a202c',
      },
      backgroundColor: {
        lightPink: '#fff8f9',
      },
      gridTemplateColumns: {
        '1-auto-1-fr': 'auto 1fr',
        '2-auto': 'auto auto',
        'how-it-works': '0.9fr 1.1fr',
        '1-fr-1-auto': '1fr auto',
      },

      fontSize: {
        xl: ['1.25rem', '1.875rem'],
        '2.5xl': ['1.63rem', '2rem'],
        '3.5xl': ['2rem', '3rem'],
        '4.5xl': ['2.5rem', '3.75rem'],
        '5.6xl': ['3.5rem', '4.2rem'],
      },
      backgroundImage: {},
      letterSpacing: {
        '-0.032': '-.02rem',
        '-0.04': '-0.025rem',
        '-1.2px': '-0.075rem',
        '-0.72px': '-0.045rem',
      },
      backgroundSize: {
        '100%': '100% 100%',
        '100-by-249': '100% 249%',
      },
      padding: {
        '6.7-by-19.2': '0.41872rem 1.2rem',
        '14.5px': '0.9062rem',
        17: '5rem',
        400: '25rem',
      },
      height: {
        13: '3.125rem',
        18: '4.5rem',
        42: '10.625rem',
      },
      width: {
        13: '3.125rem',
        80.7: '50.438rem',
        '210px': '13.125rem',
      },
      maxWidth: {
        '400px': '25rem',
        '570px': '35.625rem',
        '39rem': '39rem',
      },
      gap: {
        13: '3.375rem',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1.5rem))' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      transitionProperty: {
        'max-h': 'max-height',
      },
      translate: {
        150: '150%',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
