import {connect} from 'react-redux';
import {setCurrLocation, deleteLocation, editLocation, fetchLocations} from '../actions';
import LocationList from '../components/LocationList';
import {bindActionCreators} from 'redux';

const getVisibleLocation = (locations = {}) => {
  //TODO: implement Reselect with createSelector function if state is computed more complicated
  return locations.locations;
};

const mapStateToProps = (state) => {
  return {
    locations: getVisibleLocation(state.locations)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setCurrLocation, deleteLocation, editLocation, fetchLocations}, dispatch);
};

const VisibleLocationList = connect(mapStateToProps, mapDispatchToProps)(LocationList);

export default VisibleLocationList;