import * as React from 'react'
import styled from '@emotion/styled'

const StyledH1 = styled('h1')({
  fontStyle: 'italic',
  fontWeight: 500,
})

export const H1: React.FC = (props: any) => <StyledH1 {...props} />