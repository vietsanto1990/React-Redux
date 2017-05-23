import React from 'react'
import { connect } from 'react-redux'
import { addLocation } from '../actions'

let AddLocation = ({ dispatch }) => {
  let name, description;
  return (
  	<div>
  	  <form onSubmit={e => {
  	  	e.preventDefault()
  	  	if (!name.value.trim() && !description.value.trim()) {
          return
        }
        dispatch(addLocation(name.value, description.value))
        name.value = ''
        description.value= ''
  	  }} >

  	    <input ref={node => {
          name = node
        }} />

        <input ref={node => {
          description = node
        }} />

	    <input type="submit" value="Submit" />
  	  </form>
  	</div>
  )
}

AddLocation = connect()(AddLocation)

export default AddLocation
