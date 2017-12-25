const createActionAsync = (type, arg) => {
  return (data) => {
    return {
      type: type,
      [arg]: data,
    };
  };
};

const createRequestActions = (actionTypes) => {
  return {
    start: createActionAsync(actionTypes.START, 'payload'),
    success: createActionAsync(actionTypes.SUCCESS, 'response'),
    error: createActionAsync(actionTypes.ERROR, 'error'),
    cancelled: createActionAsync(actionTypes.CANCELLED),
  };
};

export default createRequestActions;