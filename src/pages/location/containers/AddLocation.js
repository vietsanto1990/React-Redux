import React from 'react'
import { connect } from 'react-redux'
import { addLocation } from '../actions'
import { bindActionCreators } from 'redux'

let AddLocation = ({ addLocation }) => {
  let name, description;
  return (
  	<div>
  	  <form onSubmit={e => {
  	  	e.preventDefault()
  	  	if (!name.value.trim() && !description.value.trim()) {
          return
        }
        addLocation(name.value, description.value)
        name.value = ''
        description.value= ''
  	  }} >

  	    <input ref={node => {
          name = node
        }} placeholder="Location name" />

        <input ref={node => {
          description = node
        }} placeholder="Location description" />

	    <input type="submit" value="Add" />
  	  </form>
  	</div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({addLocation}, dispatch)
}


AddLocation = connect(null, mapDispatchToProps)(AddLocation)

export default AddLocation
