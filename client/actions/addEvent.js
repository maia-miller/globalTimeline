import request from 'superagent'

export const addEvent = (event) => {
  return {
    type: 'ADD_CHARACTERISTIC',
    characteristic
  }
}

export const postEvent = (eventDetails) => {
  return (dispatch) => {
    console.log('hello', eventDetails)
    // request
    //   .post('/api/events')
    //   .send(eventDetails)
    //   .end((err, res) => {
    //     if (err) {
    //       console.log(err)
    //       return
    //     }
    //   dispatch(addEvent(res.body))
    //   })
  }
}
