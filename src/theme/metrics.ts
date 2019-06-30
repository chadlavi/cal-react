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

export const metrics = {
  base: base,
  spacing: {
    ...spacing,
  },
  padding: {
    ...padding,
  }
}