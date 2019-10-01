import { colors } from './colors'
import { metrics } from './metrics'
export const borders = {
  focusStyle: {
    default: {
      boxShadow: `0 0 0 2px ${ colors.background.default }, 0 0 0 4px ${ colors.primary[500] }`,
    },
    error: {
      boxShadow: `0 0 0 2px ${ colors.background.default }, 0 0 0 4px ${ colors.error[500] }`,
    },
    inset: {
      boxShadow: `inset 0 0 0 2px ${ colors.primary[500] }, inset 0 0 0 4px ${ colors.background.default }`,
    },
  },
  radius: {
    default: metrics.base,
  },
}
