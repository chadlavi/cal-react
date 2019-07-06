import * as React from 'react'
import { linkStyle } from './Link.style'
import styled from '@emotion/styled'
import { Link, LinkProps } from 'react-router-dom'

const StyledRouterLink = styled(Link)(linkStyle)

export const RouterLink: React.FC<LinkProps> = (props: LinkProps) => <StyledRouterLink { ...props } />