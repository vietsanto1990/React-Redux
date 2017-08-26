import * as ActionTypes from './ActionTypes';

const createRequestActionTypes = (type) => {
  return [ ActionTypes.START, ActionTypes.SUCCESS, ActionTypes.ERROR, ActionTypes.CANCELLED ]
    .reduce(
      (item, value) => {
        return {
          ...item,
          [value] : `${type}_${value}`
        };
      },
      {}
    );
};

export default createRequestActionTypes;
