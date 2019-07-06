import * as React from 'react'
import {
  skipnavContainerStyle,
  skipnavLinkStyle,
} from './Skipnav.style'
import styled from '@emotion/styled'

const SkipnavContainer = styled('div')(skipnavContainerStyle)
const SkipnavLink = styled('a')(skipnavLinkStyle)

export const Skipnav: React.FC = () => (
  <SkipnavContainer>
    <SkipnavLink href='#main'>Skip to main content</SkipnavLink>
  </SkipnavContainer>
  )