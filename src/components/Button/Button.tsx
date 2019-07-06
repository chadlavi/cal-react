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

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    error,
    primary,
    onClick,
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
    onClick={ onClick }
    { ...other }
  >
    { props.children }
  </StyledButton>
)}