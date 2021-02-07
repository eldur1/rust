module.exports = {
  corePlugins: {
    // ...
    maxWidth: false
  },
  purge: [
    './{layouts,pages,components}/**/*.{js,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: '17px',
      base: '23px',
      lg: '27px',
      xl: '47px',
      xxl: '102px'
    },
    spacing: {
      1: '0.5rem',
      2: '1rem',
      3: '2rem',
      4: '4rem',
      40: '10rem'
    },
    colors: {
      red: '#B63421',
      grey: '#101114'
    },
    lineHeight: {
      2: '2em',
      3: '3.466em',
      118: '118%'
    },
    extend: {}
  },
  variants: {
    extend: {
      maxWidth: {
        s: '316px',
        m: '431px',
        l: '566px'
      }
    }
  },
  plugins: []
}
