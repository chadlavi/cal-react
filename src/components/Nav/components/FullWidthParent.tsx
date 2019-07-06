import * as React from 'react'
import styled from '@emotion/styled'
import theme from '../../../theme/cal.theme'

export const FullWidthParent = styled(({visible, ...props}) => <div { ...props } />)({
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: theme.color.grey[500],
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  transition: 'top .1s ease-in',
  [theme.metrics.helpers.under(theme.metrics.breakpoints.sm)]: {
    backgroundColor: theme.color.background.default,
  }
}, props => ({top: props.visible ? 0 : -60}))