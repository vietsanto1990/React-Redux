import { ADD_LOCATION, EDIT_LOCATION, DELETE_LOCATION } from '../actions'

const locations = (state = [], action) => {
  switch(action.type) {
    case ADD_LOCATION:
      return [...state, {
      	id: action.id,
      	name: action.name,
      	description: action.description
      }]
    case EDIT_LOCATION: 
      return state.map((location) => {
      	if(location.id === action.id) {
      	  return Object.assign({}, location, {
      	  	id: action.id,
      	  	name: action.name,
      	  	description: action.description
      	  })
      	}
      	return location
      })
    case DELETE_LOCATION:
      return state.filter((location) => {
      	return location.id !== action.id
      })
    default:
      return state
  } 	
}

export default locations