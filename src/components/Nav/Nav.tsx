import * as React from 'react'
import {
  FullWidthParent,
  MenuButton,
  NavLi,
  NavUl,
  NavWrapper,
  StyledLink,
} from './components'
import { routes, RouteProps } from '../../routes'
import { useScroll } from '../../helpers'

export const Nav: React.FC = () => {

  const [open, setOpen] = React.useState(false)
  const scrolling = useScroll()
  
  return (
    <NavWrapper>
      <FullWidthParent visible={ scrolling }>
        <MenuButton onClick={() => setOpen(o => !o)} open={ open } />
        <NavUl show={ open }>
          {
            routes
              .filter(r => r.navItem)
              .map((l: RouteProps) =>
                <NavLi key={ l.route }>
                  <StyledLink
                    onClick={ () => setOpen(false) }
                    to={ l.route }
                    active={ window.location.pathname === l.route }
                  >
                    { l.title }
                  </StyledLink>
                </NavLi>
              )
          }
        </NavUl>
      </FullWidthParent>
    </NavWrapper>
  )
}