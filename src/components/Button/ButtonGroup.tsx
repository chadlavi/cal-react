import styled from '@emotion/styled'
import * as React from 'react'

interface ButtonGroupProps {
  children?: any
}

const StyledButtonGroup = styled('div')({
  display: 'flex',
  flexDirection: 'row-reverse',
})

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => <StyledButtonGroup {...props} />
