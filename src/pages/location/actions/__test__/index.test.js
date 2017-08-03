import * as actions from '../index';

describe('actions', () => {
  it('it should create an action to add a new location', () => {
    const name = 'KMS';
    const description = 'company';
    const expectAction = {
      type: actions.ADD_LOCATION,
      id: 0,
      name,
      description
    };
    expect(actions.addLocation(name, description)).toEqual(expectAction);
  });

  it('it should create an action to edit a new location', () => {
    const id = 0;
    const name = 'KMS';
    const description = 'company';
    const expectAction = {
      type: actions.EDIT_LOCATION,
      id,
      name,
      description
    };
    expect(actions.editLocation(id, name, description)).toEqual(expectAction);
  });
});