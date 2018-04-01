import {combineReducers} from 'redux'

import events from './events'
import characteristics from './characteristics'

export default combineReducers({
  events,
  characteristics
})
