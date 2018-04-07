import request from 'superagent'

function requestEventAdd() {
  return {
    type: 'REQUEST_EVENT_ADD',
    pendingAdd: true,
    eventAdded: false
  }
}

function addEvent(event) {
  return {
    type: 'ADD_EVENT',
    event,
    pendingAdd: false,
    eventAdded: true
  }
}

export function postEvent(eventDetails) {
  console.log('1-action')
  return (dispatch) => {
    // dispatch(requestEventAdd())
    request
      .post('/api/events')
      .send(eventDetails)
      .end((err, res) => {
        if (err) {
          console.log(err)
          return
        }
      console.log('6-res.body', res)
      dispatch(addEvent(res.body))
      })
  }
}
