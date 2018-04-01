import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {postEvent} from '../actions/addEvent'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: null,
      year: null,
      description: null,
      link: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

handleChange(e) {
  let value = e.target.value
  this.setState({[e.target.name]: e.target.value})
}

onSubmit() {
  let eventDetails = this.state
  this.props.dispatch(postEvent(eventDetails))
}

  render() {
    return (
      <div className='nav'>
        <h2>Add an event to the timeline</h2>
        <div>
          <form>
            <label>Event Title</label>
            <input type="text" name="event" onChange={this.handleChange} />
            <label>Year</label>
            <input type="text" name="year" onChange={this.handleChange} />
            <label>Description</label>
            <input type="text" name="description" onChange={this.handleChange} />
            <label>Wikipedia Link</label>
            <input type="text" name="link" onChange={this.handleChange} />

            <button onClick={() => this.onSubmit()}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

// mapStatetoProps(state) {
//   return (
//     events,
//
//   )
// }

  export default connect()(Nav)
