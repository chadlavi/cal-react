import * as React from 'react'
import {linkStyle} from './Link.style'
import styled from '@emotion/styled'
import { Icon } from '../'

interface LinkProps {
  children?: any
  href: string
}

const StyledLink = styled('a')(linkStyle)

const isExternal = (url: string) => {
  const domain = (url: string) => {
      return url.replace('http://','').replace('https://','').split('/')[0]
  }
  return Boolean(domain(url)) && domain(window.location.href) !== domain(url)
}

export const Link = (props: LinkProps) => {
  
  const {href, children} = props

  const external: boolean = isExternal(href)
  const textLink: boolean = (typeof(children) === 'object' && children.length === 1 && typeof(children[0]) === 'string') || typeof(children) === 'string'

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