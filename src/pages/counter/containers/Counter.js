/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    value: state.counters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
