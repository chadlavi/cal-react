import * as React from 'react'
import { Global } from '@emotion/core'
import theme from './cal.theme'

export const GlobalStyles: React.FC = () => <Global styles={{
  body: {
    backgroundColor: theme.color.background.default,
    margin: theme.metrics.spacing.large,
    marginTop: theme.metrics.spacing.xl,

    ...theme.font,
    '& :focus': {
      ...theme.borders.focusStyle.default,
      outline: 'none',
    },
    '& *::-moz-focus-inner': {
      border: 0,
    },
    '& p + h2, & p + h3, & p + h4': {
      marginTop: theme.metrics.spacing.xl,
    },
    [theme.metrics.helpers.over(theme.metrics.breakpoints.l)]: {
      marginBottom: theme.metrics.spacing.xl * 2,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: theme.metrics.breakpoints.m,
    }
  },
}} />