import request from 'superagent'

export const requestEventAdd = () => {
  return {
    type: 'REQUEST_EVENT_ADD',
    pendingAdd: true,
    eventAdded: false
  }
}

export const addEvent = (event) => {
  return {
    type: 'ADD_EVENT',
    event,
    pendingAdd: false,
    eventAdded: true
  }
}

export const postEvent = (eventDetails) => {
  return (dispatch) => {
    dispatch(requestEventAdd())
    request
      .post('/api/events')
      .send(eventDetails)
      .end((err, res) => {
        if (err) {
          console.log(err)
          return
        }
      dispatch(addEvent(res.body))
      })
  }
}
