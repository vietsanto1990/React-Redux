import { ADD_LOCATION, EDIT_LOCATION, DELETE_LOCATION, REQUEST_LOCATION, RECEIVE_LOCATION } from '../actions'

const location = (state = [], action) => {
  switch(action.type) {
    case ADD_LOCATION:
      return [
        ...state,
        location(undefined, action)
      ]
    case EDIT_LOCATION:
      return [...state, state.map((t) => {
          if(t.id !== action.id) {
            return t
          }
          return { ...t, ...action }
        })
      ]
    case DELETE_LOCATION:
      return [...state, state.filter((t) =>(t.id !== action.id))]
    default:
      return state
  }   
}

const fetchLocations = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOCATION:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_LOCATION:
      return Object.assign({}, state, {
        isFetching: false,
        locations: action.locations
      })
  }
}

export const locations = (state = {}, action) => {
  switch(action.type) {
    case ADD_LOCATION:
    case EDIT_LOCATION:
    case DELETE_LOCATION:
      return Object.assign({}, state, {locations: location(state.locations, action)})
    case REQUEST_LOCATION:
    case RECEIVE_LOCATION:
      return fetchLocations(state, action);
    default:
      return state
  }
}