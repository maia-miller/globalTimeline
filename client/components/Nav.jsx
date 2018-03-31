import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    }
  }

  render() {
    return (
      <div className='nav'>
        Nav
      </div>
    )
  }
}

  export default connect()(Nav)
