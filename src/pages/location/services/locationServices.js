import { Observable } from 'rxjs';
import locations from '../../../../public/data/locations.json';

export const fetchLocationsAsync = () => {
  return Observable.fromPromise(new Promise((resolve) => {
    resolve(locations);
  })
    .then(
      (response) => {
        console.log(`fetchLocationsAsync ${response}`);
        return response;
      },
      (error) => {
        console.log('An error occured.', error);
      }
    ));
};