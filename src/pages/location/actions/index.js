let nextLocationId = 0

export const ADD_LOCATION = 'ADD_LOCATION'
export const EDIT_LOCATION = 'EDIT_LOCATION'
export const DELETE_LOCATION = 'DELETE_LOCATION'

/* Action Creators */
export const addLocation = (name, description) => {
	return {
		type: ADD_LOCATION,
		id: nextLocationId++,
		name,
		description
	}
}

export const editLocation = (id, name, description) => {
	return {
		type: EDIT_LOCATION,
		id,
		name,
		description
	}
}

export const deleteLocation= (id) => {
	return {
		type: DELETE_LOCATION,
		id
	}
}
