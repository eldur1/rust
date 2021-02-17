module.exports = {
  purge: [
    './{layouts,pages,components}/**/*.{js,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontSize: {
      xs: '9px',
      sm: '17px',
      base: '21px',
      lg: '27px',
      xl: '47px',
      xxl: '102px'
    },
    colors: {
      red: '#B63421',
      grey: '#101114',
      lightgrey: '#CFCFCF',
      blue: '#3D519A'
    },
    lineHeight: {
      1: '1.375em',
      2: '2em',
      3: '3.466em',
      118: '118%'
    },
    extend: {
      minWidth: {
        1: '360px',
        2: '330px'
      },
      maxWidth: {
        s: '316px',
        m: '431px',
        l: '566px'
      },
      spacing: {
        1: '0.5rem',
        2: '1rem',
        3: '2rem',
        4: '4rem',
        40: '40px',
        80: '80px',
        20: '20.65rem',
        16: '16%'

      }
    }
  },
  plugins: []
}
