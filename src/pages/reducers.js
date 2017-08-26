import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { locations, currentLocation } from './location';
import { counters } from './counter';
import { fetchLocationEpic } from './location';

export const reducers = combineReducers({
  locations,
  currentLocation,
  counters
  //TODO: add more reducers here
});

export const epics = combineEpics(
  fetchLocationEpic
);