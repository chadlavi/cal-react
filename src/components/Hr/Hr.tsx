import * as React from 'react'
import styled from '@emotion/styled'
import theme from '../../theme/cal.theme'

const StyledHr = styled('hr')({
  color: theme.color.text.primary,
  border: 'none',
  borderBottom: '1px solid',
  marginBottom: theme.metrics.spacing.xl,
  marginTop: theme.metrics.spacing.xl,
})

export const Hr: React.FC = () => <StyledHr />