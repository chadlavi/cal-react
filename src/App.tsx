import * as React from 'react'
import * as Pages from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyles } from './theme/GlobalStyles'
import { PageRender } from './components'
import { routes, RouteProps } from './routes'

const Routes = routes.map((l: RouteProps) => (
    <Route key={l.title} path={l.route} exact component={() => <PageRender markdown={l.component} />} />
  ))

const App: React.FC = () => {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Switch>
        { Routes }
        <Route component={() => <PageRender markdown={Pages.home} />} />
      </Switch>
    </Router>
    </>
  )
}

export default App