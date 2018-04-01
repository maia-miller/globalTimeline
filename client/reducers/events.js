let initialState = {
  events: [],
  pendingAdd: true,
  eventAdded: false
}

function events (state = initialState, action) {
  let newState = [...state]
  switch (action.type) {

    case 'REQUEST_EVENT_ADD':
      return [...newState, action.pendingAdd, action.eventAdded]

    case 'ADD_EVENT':
      return [...newState, action.event, action.pendingAdd, action.eventAdded]

    // case 'DELETE_CAT':
    //   return [...newState].filter(cat => cat != action.cat)
    default:
      return state
  }
}

export default events
