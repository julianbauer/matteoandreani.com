module.exports = {
  corePlugins: {
    animation: true,
  },
  purge: ['./pages/**/*.{js,jsx}', './lib/components/**/*.{js,jsx}'],
  theme: {
    spacing: {
      0: '0',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      7: '0.4375rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      72: '4.5rem',
      80: '5rem',
      88: '5.5rem',
      96: '6rem',
      104: '6.5rem',
      112: '7rem',
      120: '7.5rem',
      128: '8rem',
      136: '8.5rem',
      144: '9rem',
      156: '9.5rem',
      160: '10rem',
      240: '15rem',
    },
    colors: {
      grey: 'rgba(0,0,0,0.8)',
    },
    fontSize: {
      lg: '1.25rem',
      base: '1rem',
    },
    lineHeight: {
      none: '1',
      tight: '1.2',
      normal: '1.5',
    },
    screens: {
      '2xl': '1550px',
      xl: '1280px',
      lg: '950px',
      md: '700px',
      sm: '500px',
      xxs: '375px',
    },
    fontFamily: {
      text: 'Inter, sans-serif',
    },
    extend: {
      transitionTimingFunction: {
        dynamic: 'cubic-bezier(0.25,0,0,1)',
      },
      scale: {
        101: '1.01',
      },
    },
  },
}
