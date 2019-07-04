import * as React from 'react'
import { Link } from 'react-router-dom'
import theme from '../../theme/cal.theme'
import styled from '@emotion/styled'
import { MenuButton } from './components'

interface NavProps {
  navLinks?: Array<navLink>
}

interface navLink {
  title: string
  route: string
}

const StyledLink = styled(
  ({active, ...props}) => <Link {...props}/>)<{active: boolean}>(
  {
    boxSizing: 'border-box',
    textDecoration: 'none',
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: theme.metrics.padding.default,
    '&:hover': {
      backgroundColor: theme.color.grey[600],
    },
    '@media (hover: none)' : {
      '&:hover': {
        backgroundColor: 'none',
      },
    },
    '&:focus': {
      ...theme.borders.focusStyle.inset,
    },
  }, props => (
    {
      '&, &:hover': {
        backgroundColor: props.active 
          ? theme.color.primary[500] 
          : undefined
      }
    })
)

const NavLi = styled('li')({
  display: 'inline',
  float: 'left',
  [theme.metrics.helpers.under(theme.metrics.breakpoints.sm)]: {
    display: 'block',
    width: '100%',
    background: theme.color.grey[500],
  }
})

const NavUl = styled(({show, ...props}) => <ul {...props}/>)<{show: boolean}>({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  height: '100%',
  width: '100%',
}, props => (
  {
    [theme.metrics.helpers.under(theme.metrics.breakpoints.sm)]: {
      display: props.show ? 'block' : 'none',
      maxHeight: props.show ? '100vh' : 0,
      transition: 'max-height 10s ease-in-out',
    }
  })
)

const FullWidthParent = styled(({visible, ...props}) => <div {...props} />)({
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: theme.color.grey[500],
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  transition: 'top .1s ease-in',
  [theme.metrics.helpers.under(theme.metrics.breakpoints.sm)]: {
    backgroundColor: theme.color.background.default,
  }
}, props => ({top: props.visible ? 0 : -60}))

const NavWrapper = styled('div')(
  {
    height: theme.metrics.height.nav,
  }
)

const Nav = (props: NavProps) => {
  const { navLinks } = props

  const [open, setOpen] = React.useState(false)
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
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  })
  
  return (
    <>
      {
        navLinks
          &&
          <NavWrapper>
            <FullWidthParent visible={scrolling}>
              <MenuButton onClick={() => setOpen(o => !o)} open={open}/>
              <NavUl show={open}>
                {
                  navLinks.map((l: navLink) =>
                    <NavLi key={l.route}>
                      <StyledLink
                        onClick={() => setOpen(false)}
                        to={l.route}
                        active={window.location.pathname === l.route}
                      >
                        {l.title}
                      </StyledLink>
                    </NavLi>
                  )
                }
              </NavUl>
            </FullWidthParent>
          </NavWrapper>
      }
    </>
  )
}

Nav.defaultProps = {
  navLinks: [
    {
      title: 'home',
      route: '/'
    },
    {
      title: 'portfolio',
      route: '/portfolio'
    },
    {
      title: 'contact',
      route: '/contact'
    }
  ]
}

export default Nav