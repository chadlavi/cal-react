import * as React from 'react'
import * as Pages from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyles } from './theme/GlobalStyles'
import { PageRender } from './components'
import { routes, RouteProps } from './routes'

const pageRender = (m: string) => (() => <PageRender markdown={ m } />)

const ReactRoutes = routes.map((r: RouteProps) => (
    <Route
      component={ pageRender(r.component) }
      exact
      key={ r.title }
      path={ r.route }
    />
  ))

const App: React.FC = () => (
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

export default App