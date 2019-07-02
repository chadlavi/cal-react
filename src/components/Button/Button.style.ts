import theme from '../../theme/cal.theme'

const style = {
  padding: `${theme.metrics.padding.default/2}px ${theme.metrics.padding.default}px`,
  borderRadius: theme.borders.radius.default,
  border: '1px solid',
  ...theme.font,
  display: 'block',
  marginTop: theme.metrics.spacing.default,
  marginRight: theme.metrics.spacing.default,
  marginBottom: theme.metrics.spacing.default,
  [theme.metrics.helpers.under(theme.metrics.breakpoints.sm)]: {
    marginTop: theme.metrics.spacing.compact * 2.5,
    marginRight: theme.metrics.spacing.compact * 2.5,
    marginBottom: theme.metrics.spacing.compact * 2.5,
    fontSize: theme.metrics.base * 2.5,
    padding: `${theme.metrics.padding.compact * 1.25}px ${theme.metrics.padding.compact * 2.5}px`,
  },
  '&.primary': {
    color: theme.color.white,
    backgroundColor: theme.color.primary[500],
    borderColor: theme.color.primary[500],
    '&:active': {
      backgroundColor: theme.color.primary[700],
    },
  },
  '&.error': {
    color: theme.color.white,
    backgroundColor: theme.color.error[500],
    borderColor: theme.color.error[500],
    '&:active': {
      backgroundColor: theme.color.error[700],
    },
    '&:focus': {
      ...theme.borders.focusStyle.error,
    }
  },
}

export default style