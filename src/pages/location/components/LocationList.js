import React from 'react'
import Location from './Location'

const LocationList = ({ locations, onLocationClick }) => (
  <ul>
  	{locations && locations.map(location => 
  	  <Location key={location.id} name={location.name} description={location.description} onClick={() => onLocationClick(location.id)}/>
  	)}
  </ul>
)

export default LocationList