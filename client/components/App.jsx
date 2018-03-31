import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Nav from './Nav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          SVG goes here
        </div>
      </Router>
    )
  }
}

export default connect()(App)
