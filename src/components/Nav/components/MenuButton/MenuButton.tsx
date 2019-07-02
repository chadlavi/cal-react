import * as React from 'react'
import styled from '@emotion/styled'
import theme from '../../../../theme/cal.theme'
import { Icon } from '../../../'

interface MenuButtonProps {
  onClick: () => void
}

const StyledMenuButton = styled('button')({
  border: 'none',
  height: 50,
  width: 50,
  fontSize: 18,
  display: 'block',
  float: 'right',
  background: 'none',
  color: theme.color.white,
  '&:focus': {
    ...theme.borders.focusStyle.inset,
  },
  [theme.metrics.helpers.over(theme.metrics.breakpoints.sm)]: {
    display: 'none',
  }
})

export const MenuButton = (props: MenuButtonProps) => (
  <StyledMenuButton onClick={props.onClick}>
    <Icon name='bars' />
  </StyledMenuButton>
)

MenuButton.defaultProps = {
  onClick: () => {},
}