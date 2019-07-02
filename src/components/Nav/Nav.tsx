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

const StyledLink = styled(({active, ...props}) => <Link {...props}/>)<{active: boolean}>(
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
    '&:focus': {
      ...theme.borders.focusStyle.inset,
    },
  }, props => ({backgroundColor: props.active ? theme.color.primary[500] : 'inherit'})
)

const LI = styled('li')({
  display: 'inline',
  float: 'left',
  [theme.metrics.helpers.under(theme.metrics.breakpoints.sm)]: {
    display: 'block',
    width: '100%',
  }
})

const UL = styled(({show, ...props}) => <ul {...props}/>)<{show: boolean}>({
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

const FullWidthPArent = styled('div')({
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: theme.color.grey[500],
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',

})

const NavWrapper = styled('div')(
  {
    height: theme.metrics.height.nav,
  }
)

const Nav: React.FunctionComponent<NavProps> = (props) => {
  const { navLinks } = props

  const [open, setOpen] = React.useState(false)
  return (
    <>
      {
        navLinks
          &&
          <NavWrapper>
            <FullWidthPArent>
              <MenuButton onClick={() => setOpen(o => !o)} />
              <UL show={open}>
                {
                  navLinks.map((l: navLink) =>
                    <LI key={l.route}>
                      <StyledLink onClick={() => setOpen(o => !o)} to={l.route} active={window.location.pathname === l.route}>
                        {l.title}
                      </StyledLink>
                    </LI>
                  )
                }
              </UL>
            </FullWidthPArent>
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