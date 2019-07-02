// export const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
export const darkMode = false

const grey = {
  100: '#D3D3D3',
  200: '#ABABAB',
  300: '#838383',
  400: '#5B5B5B',
  500: '#333333',
  600: '#292929',
  700: '#1F1F1F',
  800: '#151515',
  900: '#0B0B0B',
}

const blue = {
  100: '#DEE0FF',
  200: '#BABCFF',
  300: '#9698FF',
  400: '#7274FF',
  500: '#4E50FF',
  600: '#3E40CB',
  700: '#2E3097',
  800: '#1E2063',
  900: '#0E102F',
}

const green = {
  100: '#CFE5DC',
  200: '#A1CBBC',
  300: '#73B19C',
  400: '#45977C',
  500: '#177d5c',
  600: '#13634A',
  700: '#0F4938',
  800: '#0B2F26',
  900: '#071514',
}

const red = {
  100: '#F9D0D0',
  200: '#F39C9C',
  300: '#ED6868',
  400: '#E73434',
  500: '#E10000',
  600: '#B30000',
  700: '#850000',
  800: '#570000',
  900: '#290000',
}

// const rex = {
//   100: '#',
//   200: '#',
//   300: '#',
//   400: '#',
//   500: '#',
//   600: '#',
//   700: '#',
//   800: '#',
//   900: '#',
// }

const white = 'white'

const black = 'black'

const primary = {
  300: blue[300],
  500: blue[500],
  700: blue[700],
}

export const colors = {
  primary: primary,

  background: {
    default: darkMode ? grey[700] : white,
  },
  text: {
    primary: darkMode ? white : grey[700],
    link: darkMode ? primary[300] : primary[500]
  },

  error: {
    300: red[300],
    500: red[500],
    700: red[700],
  },

  black: black,
  blue: blue,
  green: green,
  grey: grey,
  red: red,
  white: white,

}