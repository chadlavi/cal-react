import * as React from 'react'
import { Icon } from '../'
import { isExternal } from '../../helpers'
import { LinkProps as RouterLinkProps } from 'react-router-dom'
import { RouterLink } from './RouterLink' 
import { linkStyle } from './Link.style'
import styled from '@emotion/styled'

interface LinkProps extends RouterLinkProps {
  href?: string
  children?: any
}

const StyledLink = styled('a')(linkStyle)

export const Link = (props: LinkProps) => {
  
  const {href, children, to} = props

  const external: boolean = Boolean(href) && isExternal(href)
  const textLink: boolean = (
    children 
      && typeof(children) === 'object' 
      && children.length === 1 
      && typeof(children[0]) === 'string') 
    || typeof(children) === 'string'

  if (to) return (
    <RouterLink to={ to } { ...props }>{ children }</RouterLink>
  )
  return (
    <StyledLink
      target={external ? '_blank' : undefined}
      href={ href }
      { ...props }
    >
      { children }{(external && textLink) ? <span style={{fontSize: '80%'}}> <Icon name='link' /></span> : null}
    </StyledLink>
  )
}