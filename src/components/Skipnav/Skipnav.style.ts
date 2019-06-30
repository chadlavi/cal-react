import theme from '../../theme/cal.theme'

export enum Position {
  absolute = 'absolute',
  fixed = 'fixed',
  relative = 'relative',
  unset = 'unset',
  static = 'static',
  sticky = 'sticky'
}

export const skipnavContainerStyle = {
  display: 'block',
  left: '50%',
  position: Position.fixed,
  top: -100,
  transform: 'translateX(-50%)',
  zIndex: 1,
  background: theme.color.background.default,
  '&:focus-within': {
    top: 5,
  }
}

export const skipnavContainerLinkStyle = {
  padding: theme.metrics.padding.default,
  display: 'block',
  color: theme.color.text.link,
}