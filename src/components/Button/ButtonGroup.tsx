import * as React from 'react'
import styled from '@emotion/styled'

interface ButtonGroupProps {
  children?: any
}

const StyledButtonGroup = styled('div')({
  display: 'flex',
  flexDirection: 'row-reverse',
})

export const ButtonGroup: React.FC<ButtonGroupProps> = (props: ButtonGroupProps) => <StyledButtonGroup {...props} />