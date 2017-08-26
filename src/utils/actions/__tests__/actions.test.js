import createRequestActionTypes from '../actions';

describe('createRequestActionTypes', () => {
  it('create action types', () => {
    const actualTest = createRequestActionTypes('ACTION_TEST');
    const expectText = {
      'SUCCESS': 'ACTION_TEST_SUCCESS',
      'START': 'ACTION_TEST_START',
      'ERROR': 'ACTION_TEST_ERROR',
      'CANCELLED': 'ACTION_TEST_CANCELLED',
    };
    expect(actualTest).toEqual(expectText);
  });
});