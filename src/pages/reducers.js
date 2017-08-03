import { combineReducers } from 'redux';
import { locations, currentLocation } from './location';
import { counters } from './counter';

export const reducers = combineReducers({
  locations,
  currentLocation,
  counters
  //TODO: add more reducers here
});
