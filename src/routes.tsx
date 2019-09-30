import * as Pages from './pages'

export interface RouteProps {
  title: string
  route: string
  component: string
  navItem?: boolean
}

export const routes: RouteProps[] = [
  {
    title: 'home',
    route: '/',
    component: Pages.home,
    navItem: true,
  },
  {
    title: 'portfolio',
    route: '/portfolio',
    component: Pages.portfolio,
    navItem: true,
  },
  {
    title: 'contact',
    route: '/contact',
    component: Pages.contact,
    navItem: true,
  },
]
