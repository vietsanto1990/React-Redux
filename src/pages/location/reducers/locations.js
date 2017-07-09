import { ADD_LOCATION, EDIT_LOCATION, DELETE_LOCATION } from '../actions'

const location = (state = {}, action) => {
  switch(action.type) {
    case ADD_LOCATION:
      return {
        id: action.id,
        name: action.name,
        description: action.description
      }
      case EDIT_LOCATION:
        if(state.id !== action.id) {
          return state
        }
        return { ...state, ...action }
    case DELETE_LOCATION:
      return state.id !== action.id ? true : false
    default:
      return state
  }   
}

export const locations = (state = [], action) => {
  switch(action.type) {
    case ADD_LOCATION:
      return [
        ...state,
        location(undefined, action)
      ]
    case EDIT_LOCATION:
      return state.map((t) => {
        return location(t, action)
      })
    case DELETE_LOCATION:
      return state.filter((t) => location(t, action))
    default:
      return state
  }
}