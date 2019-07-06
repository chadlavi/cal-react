import * as React from 'react'
import * as Pages from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyles } from './theme/GlobalStyles'
import { PageRender } from './components'
import { routes, RouteProps } from './routes'

const pageRender = (m: string) => { return () => <PageRender markdown={ m } /> }

const ReactRoutes = routes.map((l: RouteProps) => (
    <Route
      key={ l.title }
      path={ l.route }
      exact
      component={ pageRender(l.component) }
    />
  ))

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          { ReactRoutes }
          <Route component={ pageRender(Pages.home) } />
        </Switch>
      </Router>
    </>
  )
}

export default App