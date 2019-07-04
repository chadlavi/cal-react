import * as React from 'react'
import styled from '@emotion/styled'
import theme from '../../theme/cal.theme'

const SU = styled('ul')({
  paddingLeft: theme.metrics.padding.large,
  listStyle: 'disc',
})

const SL = styled('li')({
  margin: 2,
})

export const Ul = (props: any) => <SU {...props} />

export const Li = (props: any) => <SL {...props} />