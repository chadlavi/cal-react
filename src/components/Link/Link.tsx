import * as React from 'react'
import {linkStyle} from './Link.style'
import styled from '@emotion/styled'
import { Icon } from '../'
import { LinkProps as RouterLinkProps } from 'react-router-dom'
import { RouterLink } from './RouterLink' 

interface LinkProps extends RouterLinkProps {
  href?: string
  children?: any
}

const StyledLink = styled('a')(linkStyle)

export const isExternal = (url?: string) => {
  const domain = (url?: string) => {
      return url && url.replace('http://','').replace('https://','').split('/')[0]
  }
  return Boolean(url) && Boolean(domain(url)) && domain(window.location.href) !== domain(url)
}

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
    <RouterLink to={to} {...props}>{children}</RouterLink>
  )
  return (
    <StyledLink
      target={external ? '_blank' : undefined}
      href={href}
      {...props}
    >
      {children}{(external && textLink) ? <span style={{fontSize: '80%'}}> <Icon name='link' /></span> : null}
    </StyledLink>
  )
}