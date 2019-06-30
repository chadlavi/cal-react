import * as React from 'react'
import { skipnavContainerStyle, skipnavContainerLinkStyle } from './Skipnav.style'
import styled from '@emotion/styled'

const SkipnavContainer = styled('div')(skipnavContainerStyle)

const SkipnavLink = styled('a')(skipnavContainerLinkStyle)

export const Skipnav = () => <SkipnavContainer><SkipnavLink href='#main'>Skip to main content</SkipnavLink></SkipnavContainer>