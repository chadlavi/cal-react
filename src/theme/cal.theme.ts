import {colors} from './colors'
import {metrics} from './metrics'
import {borders} from './borders'

const theme = {
  color: {
    ...colors,
  },
  borders: {
    ...borders,
  },
  metrics: {
    ...metrics,
  },
  font: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: metrics.base * 2,
    color: colors.text.primary,
  }
}

export default theme