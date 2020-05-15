import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import 'bulma'

import HomePage from './components/HomePage'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App = () => (
  <div>
    
    <Router>
      <Switch>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={HomePage} />

      </Switch>
    </Router>
  </div>

)

export default App
