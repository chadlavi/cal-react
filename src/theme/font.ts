import { metrics } from './metrics'
import { colors } from './colors'

const sansSerif = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
const serif = '"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'
const monospace = 'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace'

export const font = {
  default: {
    fontFamily: serif,
    fontSize: metrics.base * 2.25,
    [metrics.helpers.under(metrics.breakpoints.sm)]: {
      fontSize: metrics.base * 2.5,
    },
    color: colors.text.primary,
    lineHeight: 1.5,
  },
  sansSerif: sansSerif,
  serif: serif,
  monospace: monospace,
}