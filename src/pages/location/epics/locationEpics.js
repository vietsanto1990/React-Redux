import { REQUEST_LOCATION, requestLocations } from '../actions';
import { fetchLocationsAsync } from '../services';

export const fetchLocationEpic = (action$) => {
  return action$.ofType(REQUEST_LOCATION.START)
    .switchMap(() => {
      return fetchLocationsAsync()
        .map((response) => {
          return requestLocations.success(response);
        });
    });
};