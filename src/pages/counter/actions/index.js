export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

let nextValue = 0;
export const increment = () => {
  return {
    type: INCREMENT,
    value: ++nextValue
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    value: --nextValue
  };
};