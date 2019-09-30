import styled from '@emotion/styled'
import * as React from 'react'

const StyledH1 = styled('h1')({
  fontStyle: 'italic',
  fontWeight: 500,
})

export const H1: React.FC = (props: any) => <StyledH1 {...props} />
