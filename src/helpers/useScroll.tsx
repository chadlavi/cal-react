import * as React from 'react'
import theme from '../theme/cal.theme'

export const useScroll = () => {

  const [scroll, setScroll] = React.useState(window.pageYOffset)
  const [scrolling, setScrolling] = React.useState(true)

  const listenScrollEvent = () => {
    const shouldBeVisible = window.pageYOffset <= scroll ||
      window.pageYOffset < theme.metrics.height.nav / 2
    setScrolling(shouldBeVisible)
    setScroll(window.pageYOffset)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => window.removeEventListener('scroll', listenScrollEvent)
  })

  return scrolling
}