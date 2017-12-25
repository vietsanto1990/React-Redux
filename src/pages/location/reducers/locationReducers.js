import { fromJS } from 'immutable';
import { ADD_LOCATION, EDIT_LOCATION, DELETE_LOCATION, REQUEST_LOCATION } from '../actions';

const initialState = {
  locations: [],
  isFetching: false,
};

export const locations = (prevState, action) => {
  const state = prevState || fromJS(initialState);
  switch(action.type) {
  case ADD_LOCATION:
    return state.updateIn([ 'locations' ], locations => locations.push(action.response));
  case EDIT_LOCATION:
    return state.mergeIn([ 'locations' ], action.response);
  case DELETE_LOCATION:
    return state.updateIn([ 'locations' ], locations => locations.filter((location) => {
      return location.get('id') != action.response.id;
    }));
  case REQUEST_LOCATION.START:
    return state.set('isFetching', true);
  case REQUEST_LOCATION.SUCCESS:
    return state.set('isFetching', false)
      .set('locations', fromJS(action.response));
  default:
    return state;
  }
};