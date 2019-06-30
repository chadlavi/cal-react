import * as React from 'react'
import { Home } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyles } from './theme/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={Home} />
      </Switch>
    </Router>
    </>
  )
}

export default App