import * as React from 'react'
import styled from '@emotion/styled'
import theme from '../../theme/cal.theme'

const StyledCode = styled('code')({
  backgroundColor: theme.color.grey[900],
  borderRadius: theme.metrics.spacing.compact / 2,
  padding: theme.metrics.spacing.compact / 2,
})

export const Code: React.FC = (props: any) => {
  const { children, ...other } = props
  return <StyledCode { ...other } >{ children }</StyledCode>
}