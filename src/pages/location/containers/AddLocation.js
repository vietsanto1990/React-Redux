import React from 'react'
import { connect } from 'react-redux'
import { addLocation } from '../actions'

class AddLocation extends React.Component {
  constructor(props) {
    super(props)
    this.name = ''
    this.description = ''
  }

  onAddLocation() {
    alert('onAddLocation')
  }

  onEditLocation() {
    alert('onEditLocation')
  }

  onDeleteLocation() {
    alert('onDeleteLocation')
    dispatch(addLocation(this.name.value, this.description.value))
  }

  render() {
    return (
    	<div>
    	  <form>
    	    <input ref={node => {
            this.name = node
          }} />

          <input ref={node => {
            this.description = node
          }} />

  	    <button type="button" value="Add" onClick={this.onAddLocation.bind(this)}>Add</button>
        <button type="button" value="Edit" onClick={this.onEditLocation.bind(this)}>Edit</button>
        <button type="button" value="Delete" onClick={this.onDeleteLocation.bind(this)}>Delete</button>
    	  </form>
    	</div>
    )
  }
}

AddLocation = connect()(AddLocation)

export default AddLocation
