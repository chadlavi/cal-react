import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { PageRender } from "./components"
import * as Pages from "./pages"
import { RouteProps, routes } from "./routes"
import { GlobalStyles } from "./theme/GlobalStyles"

const pageRender = (m: string) => (() => <PageRender markdown={m} />)

const ReactRoutes = routes.map((r: RouteProps) => (
    <Route
      component={pageRender(r.component)}
      exact={true}
      key={r.title}
      path={r.route}
    />
  ))

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        {ReactRoutes}
        <Route component={pageRender(Pages.home)} />
      </Switch>
    </Router>
  </>
)

export default App
