import * as React from 'react'
import styled from '@emotion/styled'
import theme from '../../theme/cal.theme'

const StyledPre = styled('pre')({
  backgroundColor: theme.color.background.codeBlock,
  borderRadius: theme.metrics.spacing.compact,
  padding: theme.metrics.spacing.default,
})

export const Pre: React.FC = (props: any) => {
  const { code, ...other } = props
  return <StyledPre { ...other } >{ code }</StyledPre>
}