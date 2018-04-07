import React from 'react'
import {connect} from 'react-redux'

import {getEvents, postEvent} from '../actions/eventActions'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      year: null,
      description: null,
      link: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

componentDidMount() {
  this.props.dispatch(getEvents())
}

handleChange(e) {
  let value = e.target.value
  this.setState({[e.target.name]: e.target.value})
}

onSubmit(e) {
  // e.preventDefault()
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
            <input type="text" name="name" onChange={this.handleChange} />
            <label>Year</label>
            <input type="text" name="year" onChange={this.handleChange} />
            <label>Description</label>
            <input type="text" name="description" onChange={this.handleChange} />
            <label>Wikipedia Link</label>
            <input type="text" name="link" onChange={this.handleChange} />

            <button type='button' onClick={(e) => this.onSubmit(e)}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  console.log('state', state)
  return {
    events: state.events
  }
}

  export default connect(mapStatetoProps)(Nav)
