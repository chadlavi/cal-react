import styled from '@emotion/styled'
import classnames from 'classnames'
import * as React from 'react'
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

  const classes = classnames(
    className,
    error && 'error',
    primary && 'primary',
  )

  return (
    <StyledButton
      className={classes}
      {...other}
    >
      {props.children}
    </StyledButton>
  )
}
