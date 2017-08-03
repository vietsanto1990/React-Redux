import { INCREMENT, DECREMENT } from '../actions';

export const counters = (state = 0, action) => {
  switch (action.type) {
  case INCREMENT: 
    return action.value;
  case DECREMENT:
    return action.value;
  default:
    return state;
  }
};