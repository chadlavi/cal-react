import * as React from 'react'
import { Global } from '@emotion/core'
import theme from './cal.theme'

export const GlobalStyles = () => <Global styles={{
  body: {
    backgroundColor: theme.color.background.default,
    margin: theme.metrics.spacing.large,
    marginTop: 0,
    ...theme.font,
    '& :focus': {
      ...theme.borders.focusStyle.default,
      outline: 'none',
    },
    '& *::-moz-focus-inner': {
      border: 0,
    }
  },
}} />