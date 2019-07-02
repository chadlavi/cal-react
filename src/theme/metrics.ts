const base = 8

const spacing = {
  compact: base,
  default: base * 2,
  large: base * 3,
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
  xl = 1200
}

const over = (size: Breakpoint) => `@media (min-width: ${size}px)`
const under = (size: Breakpoint) => `@media (max-width: ${size + 1}px)`

export const metrics = {
  base: base,
  spacing: spacing,
  padding: padding,
  breakpoints: Breakpoint,
  helpers: {
    over: over,
    under: under,
  }
}