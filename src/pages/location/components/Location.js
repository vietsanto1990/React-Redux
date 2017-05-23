import React from 'react'

const Location = ({ onClick, name, description }) => (
  <li onClick = {onClick}>
  	{name} - {description}
  </li>
)

export default Location
