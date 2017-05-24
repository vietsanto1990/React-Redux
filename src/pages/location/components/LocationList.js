import React from 'react'
import Location from './Location'

const LocationList = ({ locations, setCurrLocation, deleteLocation, editLocation }) => (
  <ul>
  	{locations && locations.map(location => 
  	  <Location key={location.id} name={location.name} description={location.description} 
  	  setCurrLocation={() => setCurrLocation(location.id)} 
  	  deleteLocation={() => deleteLocation(location.id)}
  	  editLocation={(name, description) => editLocation(location.id, name, description)}/>
  	)}
  </ul>
)

export default LocationList