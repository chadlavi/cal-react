const base = 8

const spacing = {
  compact: base,
  default: base * 2,
  large: base * 3,
  xl: base * 6,
}

const height = {
  ...spacing,
  nav: 50,
}

const width = {
  ...spacing,
  navButton: height.nav,
}

const padding = {
  compact: base,
  default: base * 2,
  large: base * 3,
}

enum Breakpoint {
  sm = 578,
  m = 768,
  l = 992,
  xl = 1200,
  xxl = 1400,
}

const over = (size: Breakpoint) => `@media (min-width: ${ size }px)`
const under = (size: Breakpoint) => `@media (max-width: ${size + 1}px)`

export const metrics = {
  base,
  spacing,
  height,
  padding,
  width,
  breakpoints: Breakpoint,
  helpers: {
    over,
    under,
  },
}
