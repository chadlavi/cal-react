import * as React from 'react'
import styled from '@emotion/styled'
import theme from '../../../theme/cal.theme'
import { Link } from 'react-router-dom'

export const StyledLink = styled(
  ({active, ...props}) => <Link { ...props }/>)<{active: boolean}>(
  {
    boxSizing: 'border-box',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    padding: theme.metrics.padding.default,
    '&:hover': {
      backgroundColor: theme.color.background.nav.hover,
    },
    '@media (hover: none)' : {
      '&:hover': {
        backgroundColor: 'none',
      },
    },
    '&:focus': {
      ...theme.borders.focusStyle.inset,
    },
  }, props => (
    {
      '&, &:hover': {
        backgroundColor: props.active 
          ? theme.color.primary[500] 
          : undefined,
        color: props.active
          ? theme.color.white
          : 'inherit',
      }
    })
)