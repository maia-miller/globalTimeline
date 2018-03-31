import request from 'superagent'

export const addEvent = (characteristic) => {
  return {
    type: 'ADD_CHARACTERISTIC',
    characteristic
  }
}

export const postEvent = (characteristic) => {
  return (dispatch) => {
    request
      // .post('/api/characteristics')
      // .send(characteristic)
      // .end((err, res) => {
      //   if (err) {
      //     console.log(err)
      //     return
      //   }
      //   dispatch(addEvent(res.body))
      // })
  }
}
