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
    type: 'ADD_EVENT'
    // event,
    // pendingAdd: false,
    // eventAdded: true
  }
}

function receiveEvents(events) {
  type: 'RECEIVE_EVENTS',
  events
}

export function postEvent(eventDetails) {
  return (dispatch) => {
    // dispatch(requestEventAdd())
    request
    .post('/api/events')
    .send(eventDetails)
    .end((err, res) => {
      if (err) {
        console.log(err.message)
        return
      }
    dispatch(addEvent(res.body[0]))
    })
  }
}

export function getEvents() {
  return (dispatch) => {
    request
    .get('/api/events')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      console.log('res.body', res.body)
      //**ERROR WITH RES.BODY HERE. IT'S COMING IN AS AN ARRAY**
      // dispatch(receiveEvents(res.body))
      })
    }
  }
