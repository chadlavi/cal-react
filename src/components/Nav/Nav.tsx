import * as React from 'react'
import { Link } from 'react-router-dom'
import theme from '../../theme/cal.theme'
import styled from '@emotion/styled'

interface NavProps {
  navLinks?: Array<navLink>
}

interface navLink {
  title: string
  route: string
}

const StyledLink = styled(Link)(
  {
    textDecoration: 'none',
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: theme.metrics.padding.default,
    '&:hover, &.active:hover': {
      backgroundColor: theme.color.grey[600],
    },
    '&:focus': {
      ...theme.borders.focusStyle.inset,
    },
    '&.active': {
    backgroundColor: theme.color.primary[500],
    }
  }
)

const LI = styled('li')({
  display: 'inline',
  float: 'left',
})

const UL = styled('ul')({
  listStyleType: 'none',
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
    height: 47.2,
  }
)

const Nav: React.FunctionComponent<NavProps> = (props) => {
  const { navLinks } = props
  return (
    <>
      {
        navLinks 
          && 
          <NavWrapper>
            <UL>
              {
                navLinks.map((l: navLink) => 
                  <LI key={l.route}>
                    <StyledLink to={l.route} className={window.location.pathname === l.route ? 'active' : ''}>
                      {l.title}
                    </StyledLink>
                  </LI>
                )
              }
            </UL>
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