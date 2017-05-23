import { connect } from 'react-redux'
import { deleteLocation } from '../actions'
import LocationList from '../components/LocationList'

const getVisibleLocation = (locations) => {
  //TODO: implement Reselect with createSelector function if state is computed more complicated
  return locations;
}

const mapStateToProps = (state) => {
  return {
  	locations: getVisibleLocation(state.locations)
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
  	onLocationClick: (id) => {
  	  dispatch(deleteLocation(id))
  	}
  }
}

const VisibleLocationList = connect(mapStateToProps, mapDispatchtoProps)(LocationList)

export default VisibleLocationList