const createActionAsync = (type) => {
  return (data) => {
    return {
      type: type,
      payload: data,
    };
  };
};

const createRequestActions = (actionTypes) => {
  return {
    start: createActionAsync(actionTypes.START),
    success: createActionAsync(actionTypes.SUCCESS),
    error: createActionAsync(actionTypes.ERROR),
    cancelled: createActionAsync(actionTypes.CANCELLED),
  };
};

export default createRequestActions;