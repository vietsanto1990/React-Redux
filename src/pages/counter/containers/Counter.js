import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

let Counter = ({value, onIncrement, onDecrement}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
)

const mapStateToProps = (state) => {
	return {
		value: state.counters
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onIncrement: () => { dispatch(increment()) },
		onDecrement: () => { dispatch(decrement()) }
	}
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter; 
