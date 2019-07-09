import { metrics } from './metrics'
import { colors } from './colors'

export const font = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: metrics.base * 2,
  [metrics.helpers.under(metrics.breakpoints.sm)]: {
    fontSize: metrics.base * 2.5,
  },
  color: colors.text.primary,
  lineHeight: 1.5,
}