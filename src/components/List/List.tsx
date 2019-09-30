import styled from '@emotion/styled'
import * as React from 'react'
import theme from '../../theme/cal.theme'

const SU = styled('ul')({
  paddingLeft: theme.metrics.padding.large,
  listStyle: 'disc',
})

const SL = styled('li')({
  margin: 2,
})

export const Ul: React.FC = (props) => <SU {...props} />

export const Li: React.FC = (props) => <SL {...props} />
