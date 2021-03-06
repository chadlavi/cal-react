import {
  IconName,
  library,
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, far, fab)

enum IconTypes {
  solid = 'fas',
  regular = 'far',
  brand = 'fab',
}

interface IconProps {
  name: IconName
  type?: 'solid' | 'regular' | 'brand'
}

export const Icon: React.FC<IconProps> = (props) => {

  const {
    type = 'solid',
    name,
  } = props

  return <FontAwesomeIcon icon={[IconTypes[type], name]} />
}
