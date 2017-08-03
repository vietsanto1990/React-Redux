import { ADD_LOCATION, EDIT_LOCATION, DELETE_LOCATION, REQUEST_LOCATION, RECEIVE_LOCATION } from '../actions';

const handleLocations = (state = [], action) => {
  switch (action.type) {
  case ADD_LOCATION:
    return [...state, {
      id: action.id,
      name: action.name,
      description: action.description
    }];
  case EDIT_LOCATION:
    return state.map(t => {
      if(t.id !== action.id) {
        return Object.assign({}, t, action);
      }
      return t;
    });
  case DELETE_LOCATION:
    return state.filter((t) =>(t.id !== action.id));
  default:
    return state;
  }
};

const fetchLocations = (state = {}, action) => {
  switch (action.type) {
  case REQUEST_LOCATION:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case RECEIVE_LOCATION:
    return Object.assign({}, state, {
      isFetching: false,
      locations: action.locations
    });
  default:
    return state;
  }
};

export const locations = (state = {}, action) => {
  switch(action.type) {
  case ADD_LOCATION:
  case EDIT_LOCATION:
  case DELETE_LOCATION:
    return {...state, ...{locations: handleLocations(state.locations, action)}};
  case REQUEST_LOCATION:
  case RECEIVE_LOCATION:
    return fetchLocations(state, action);
  default:
    return state;
  }
};