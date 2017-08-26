import { createRequestActions, createRequestActionTypes } from 'utils/actions';

let nextLocationId = 0;

// Action type
export const ADD_LOCATION = 'ADD_LOCATION';
export const EDIT_LOCATION = 'EDIT_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const CURR_LOCATION = 'CURR_LOCATION';
export const REQUEST_LOCATION = createRequestActionTypes('REQUEST_LOCATION');

// Action Creators
export const addLocation = (name, description) => {
  return {
    type: ADD_LOCATION,
    id: nextLocationId++,
    name,
    description
  };
};

export const editLocation = (id, name, description) => {
  return {
    type: EDIT_LOCATION,
    id,
    name,
    description
  };
};

export const deleteLocation = (id) => {
  return {
    type: DELETE_LOCATION,
    id
  };
};

export const setCurrLocation = (id) => {
  return {
    type: CURR_LOCATION,
    id
  };
};

export const requestLocations = createRequestActions(REQUEST_LOCATION);

