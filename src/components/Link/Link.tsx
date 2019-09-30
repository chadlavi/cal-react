import styled from "@emotion/styled"
import * as React from "react"
import { LinkProps as RouterLinkProps } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { Icon } from "../"
import { isExternal } from "../../helpers"
import { linkStyle } from "./Link.style"
import { RouterLink } from "./RouterLink"

interface LinkProps extends RouterLinkProps {
  href?: string
  children?: any
}

const StyledLink = styled("a")(linkStyle)
const StyledHashLink = StyledLink.withComponent(HashLink)

export const Link = (props: LinkProps) => {

  const {href, children, to} = props

  const hash: boolean = !!to && to.toString().substr(0, 1) === "#"
  const external: boolean = Boolean(href) && isExternal(href) && !hash
  const textLink: boolean = (
    children
      && typeof(children) === "object"
      && children.length === 1
      && typeof(children[0]) === "string")
    || typeof(children) === "string"

  if (!hash && to) {
    return (
    <RouterLink to={to} {...props}>{children}</RouterLink>
  )}
  if (hash) { return (
    <StyledHashLink smooth={true} to={to} {...props}/>
  )
  }
  return (
    <StyledLink
      target={external ? "_blank" : undefined}
      href={href}
      {...props}
    >
      {children}{(external && textLink) ? <span style={{fontSize: "80%"}}> <Icon name="link" /></span> : null}
    </StyledLink>
  )
}
