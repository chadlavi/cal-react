import styled from '@emotion/styled'
import theme from '../../../theme/cal.theme'

export const NavLi = styled('li')({
  display: 'inline',
  float: 'left',
  [theme.metrics.helpers.under(theme.metrics.breakpoints.sm)]: {
    display: 'block',
    width: '100%',
    background: theme.color.background.nav.default,
  }
})