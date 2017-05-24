import { combineReducers } from 'redux'
import locations from './locations'
import currentLocation from './currentLocation'

export const locationApp = combineReducers({
  locations,
  currentLocation
  //TODO: add more reducers here
})

