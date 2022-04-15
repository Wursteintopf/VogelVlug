const colors = {
  baseBlue: '#040e2b',
  darkBlue: '#020819',
  lightBlue: '#223670',

  darkOrange: '#A44200',

  white: '#FFFFFF',
  grey0: '#F7F7F7',
  grey1: '#F1F1F0',
  grey2: '#EBEBE9',
  grey3: '#E1DEDC',
  grey4: '#B7B7B6',
  grey5: '#A6A6A5',
  grey6: '#8C8C8C',
  grey7: '#444444',
  grey8: '#222222',
  black: '#000000',
}

const fontSizes = {
  fontSizeM: '1em',
}

const spacings = {
  spacingXS: 5,
  spacingS: 10,
  spacingM: 20,
  spacingL: 40,
  spacingXL: 60,
}

const breakPoints = {
  breakXXL: '@media screen and (max-width: 1400px)',
  breakXL: '@media screen and (max-width: 1200px)',
  breakDesktop: '@media screen and (max-width: 1000px)',
  breakTablet: '@media screen and (max-width: 800px)',
  breakMobile: '@media screen and (max-width: 600px)',
  breakVerySmall: '@media screen and (max-width: 400px)',
}

const themeVariables = {
  ...colors,
  ...fontSizes,
  ...spacings,
  ...breakPoints,
}

export default themeVariables
