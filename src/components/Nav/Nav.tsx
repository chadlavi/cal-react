import * as React from "react"
import { useScroll } from "../../helpers"
import { RouteProps, routes } from "../../routes"
import {
  FullWidthParent,
  MenuButton,
  NavLi,
  NavUl,
  NavWrapper,
  StyledLink,
} from "./components"

export const Nav: React.FC = () => {

  const [open, setOpen] = React.useState(false)
  const scrolling = useScroll()

  const handleOpenMenu = () => setOpen((o) => !o)
  const handleCloseMenu = () => setOpen(false)

  const content = routes
    .filter((r) => r.navItem)
    .map((l: RouteProps) =>
      (
        <NavLi key={l.route}>
          <StyledLink
            onClick={handleCloseMenu}
            to={l.route}
            active={window.location.pathname === l.route}
          >
            {l.title}
          </StyledLink>
        </NavLi>
      ),
    )

  return (
    <NavWrapper>
      <FullWidthParent visible={scrolling}>
        <MenuButton onClick={handleOpenMenu} open={open} />
        <NavUl show={open}>
          {content}
        </NavUl>
      </FullWidthParent>
    </NavWrapper>
  )
}
