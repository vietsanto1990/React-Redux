import React from 'react'

class Location extends React.Component {
  constructor(props) {
  	super(props)
  	this.updatedName = ''
  	this.updatedDescription = ''
  	this.onUpdateNameLocation = this.onUpdateNameLocation.bind(this)
  	this.onUpdateDescriptionLocation = this.onUpdateDescriptionLocation.bind(this)
  	this.onUpdateDescription = this.onUpdateDescription.bind(this)
  }

  onUpdateNameLocation(event) {
  	this.updatedName = event.target.value
  }

  onUpdateDescriptionLocation(event) {
  	this.updatedDescription = event.target.value
  }

  onUpdateDescription() {
  	if(this.updatedName && this.updatedDescription) {
  	  this.props.editLocation(this.updatedName, this.updatedDescription)
  	  this.updatedName = this.updatedDescription = ''
    }
  }

  render() {
  	return (
	 <li>
	  	<input type="text" defaultValue={this.props.name} onChange={ this.onUpdateNameLocation }/>
	  	-
	  	<input type="text" defaultValue={this.props.description} onChange={ this.onUpdateDescriptionLocation }/>
	    <div>
	  	  <input type="button" value="Delete" onClick={this.props.deleteLocation}/>
	  	  <input type="button" value="Save" onClick={this.onUpdateDescription}/>
	  	</div>
	  </li>
    )
  }
}

export default Location
