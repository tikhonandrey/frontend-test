import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import 'normalize.css'

import './base.css'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App
