import * as actions from '../../actions/index';
import locations from '../locationReducers';

describe('locations', () => {
  it('it should return the initial locations as empty array', () => {
    expect(
			locations(undefined, {})
		).toEqual([]);
  });
});