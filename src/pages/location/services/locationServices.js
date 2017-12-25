import { Observable } from 'rxjs';
import fileStream from 'utils/filestream';

export const fetchLocationsAsync = () => {
  return Observable.fromPromise(
   fileStream.readJsonFile('data/locations.json')
  );
};