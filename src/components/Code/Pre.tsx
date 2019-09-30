import styled from '@emotion/styled'
import * as React from 'react'
import theme from '../../theme/cal.theme'

const StyledPre = styled('pre')({
  backgroundColor: theme.color.background.codeBlock,
  borderRadius: theme.metrics.spacing.compact,
  padding: theme.metrics.spacing.default,
  fontFamily: theme.font.monospace,
  overflowX: 'auto',
  maxWidth: theme.metrics.breakpoints.m,
})

export const Pre: React.FC = (props: any) => {
  const { code, ...other } = props
  return <StyledPre {...other} >{code}</StyledPre>
}
