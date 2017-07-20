import fetch from 'isomorphic-fetch'

let nextLocationId = 0

export const ADD_LOCATION = 'ADD_LOCATION'
export const EDIT_LOCATION = 'EDIT_LOCATION'
export const DELETE_LOCATION = 'DELETE_LOCATION'
export const CURR_LOCATION= 'CURR_LOCATION'
export const REQUEST_LOCATION= 'REQUEST_LOCATION'
export const RECEIVE_LOCATION= 'RECEIVE_LOCATION'

const locationContextPath = '../../../../public/data/locations.json';

/* Action Creators */
export const addLocation = (name, description) => {
  return {
    type: ADD_LOCATION,
    id: nextLocationId++,
    name,
    description
  }
}

export const editLocation = (id, name, description) => {
  return {
    type: EDIT_LOCATION,
    id,
    name,
    description
  }
}

export const deleteLocation= (id) => {
  return {
    type: DELETE_LOCATION,
    id
  }
}

export const setCurrLocation = (id) => {
  return {
  	type: CURR_LOCATION,
  	id
  }
}

export const requestLocations = () => {
  return {
    type: REQUEST_LOCATION
  }
}

export const receiveLocations = (locations) => {
  return {
    type: RECEIVE_LOCATION,
    locations
  }
}

export const fetchLocations = () => {
  return (dispatch) => {
    dispatch(requestLocations())
    return fetch(locationContextPath)
      .then(
        response =>
          response.json(),
        error =>
          console.log('An error occured.', error)
      )
      .then(
        json =>
          dispatch(receiveLocations(json))
      )
  }
}
