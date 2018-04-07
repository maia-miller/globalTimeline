let initialState = {
  events: []
}

function events (state = initialState, action) {
  let newState = [...state]
  switch (action.type) {

    case 'RECEIVE_EVENTS':
    return [...newState, action.events]

    case 'REQUEST_EVENT_ADD':
      return [...newState, action.pendingAdd, action.eventAdded]

    case 'ADD_EVENT':
      return [...newState, action.event]

    // case 'DELETE_CAT':
    //   return [...newState].filter(cat => cat != action.cat)
    default:
      return state
  }
}

export default events
