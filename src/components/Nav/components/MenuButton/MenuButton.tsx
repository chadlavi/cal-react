import * as React from 'react'
import styled from '@emotion/styled'
import theme from '../../../../theme/cal.theme'
import { Icon } from '../../../'

interface MenuButtonProps {
  onClick: () => void | {}
  open: boolean
}

const StyledMenuButton = styled('button')({
  border: 'none',
  height: theme.metrics.height.nav,
  width: theme.metrics.width.navButton,
  fontSize: theme.font.fontSize * 1.25,
  paddingRight: theme.metrics.padding.large,
  display: 'block',
  float: 'right',
  background: 'none',
  color: theme.color.text.primary,
  '&:focus': {
    ...theme.borders.focusStyle.inset,
  },
  [theme.metrics.helpers.over(theme.metrics.breakpoints.sm)]: {
    display: 'none',
  }
})

const Backdrop = styled(({open, show, ...props}) => <button {...props} />)({
  background: 'transparent',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  border: 'none',
  zIndex: -1,
}, props => (
  {
    display: props.show ? 'block' : 'none',
  }
))

export const MenuButton = (props: MenuButtonProps) => (
  <>
    <StyledMenuButton onClick={props.onClick}>
      <Icon name={props.open ? 'times' : 'bars'} />
    </StyledMenuButton>
    <Backdrop onClick={props.onClick} show={props.open} />
  </>
)

MenuButton.defaultProps = {
  onClick: () => {},
  open: false,
}