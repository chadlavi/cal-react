import styled from "@emotion/styled"
import * as React from "react"
import { Link, LinkProps } from "react-router-dom"
import { linkStyle } from "./Link.style"

const StyledRouterLink = styled(Link)(linkStyle)

export const RouterLink: React.FC<LinkProps> = (props) => <StyledRouterLink {...props} />
