import styled from '@emotion/styled'
import * as React from 'react'

const StyledImg = styled('img')({
  maxWidth: '100%',
})

export const Img: React.FC<any> = (props: any) => {
  const { src, alt, ...other } = props
  return <StyledImg src={src} alt={alt} {...other} />
}
