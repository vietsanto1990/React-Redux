import createRequestActions from '../actionCreators';
import createRequestActionTypes from '../actions';

describe('createRequestActions', () => {
  const actionTest = createRequestActionTypes('ACTION_TEST');
  const testRequest = createRequestActions(actionTest);

  it('REQUEST START', () => {
    const expectRequestStart = {
      type: 'ACTION_TEST_START',
      payload: 'test',
    };
    expect(testRequest.start('test')).toEqual(expectRequestStart);
  });

  it('REQUEST SUCCESS', () => {
    const expectRequestSuccess = {
      type: 'ACTION_TEST_SUCCESS',
      payload: {
        id: 1
      }
    };
    expect(testRequest.success({
      id: 1,
    })).toEqual(expectRequestSuccess);
  });

  it('REQUEST ERROR', () => {
    const expectRequestError = {
      type: 'ACTION_TEST_ERROR',
      payload: {
        code: 401
      }
    };
    expect(testRequest.error({
      code:401,
    })).toEqual(expectRequestError);
  });

  it('REQUEST CANCELLED', () => {
    const expectRequestCancelled = {
      type: 'ACTION_TEST_CANCELLED'
    };
    expect(testRequest.cancelled()).toEqual(expectRequestCancelled);
  });
});