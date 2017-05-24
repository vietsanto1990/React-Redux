import { CURR_LOCATION } from '../actions'

const currentLocation = (state = -1, action) => {
  switch(action.type) {
  	case CURR_LOCATION:
  	  return action.id
  	default:
  	  return state
  }
}

export default currentLocation