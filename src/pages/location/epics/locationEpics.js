import { REQUEST_LOCATION, fetchLocationsAsync, receiveLocations } from '../actions';

export const fetchLocationEpic = (action$) => {
  action$.typeOf(REQUEST_LOCATION)
    .mergeMap(() => {
      fetchLocationsAsync()
        .map(response => (receiveLocations(response)));
    });
};