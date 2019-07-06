import * as React from 'react'
import styled from '@emotion/styled'
import classnames from 'classnames'
import style from './Button.style'

const StyledButton = styled('button')(style)

interface ButtonProps {
  children?: any
  onClick?: () => any
  className?: string
  primary?: boolean
  error?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    error,
    primary,
    className,
    ...other
  } = props
  return (
  <StyledButton
    className={
      classnames(
        className,
        error ? 'error' : null,
        primary ? 'primary' : null
        )
    }
    { ...other }
  >
    { props.children }
  </StyledButton>
)}