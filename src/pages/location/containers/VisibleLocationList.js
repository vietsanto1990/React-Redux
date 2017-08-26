import { connect } from 'react-redux';
import { setCurrLocation, deleteLocation, editLocation, requestLocations } from '../actions';
import LocationList from '../components/LocationList';

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
  return {
    setCurrLocation: (id) => {
      dispatch(setCurrLocation(id));
    },
    deleteLocation: (id) => {
      dispatch(deleteLocation(id));
    },
    editLocation: () => {
      dispatch(editLocation());
    },
    requestLocations: () => {
      dispatch(requestLocations.start());
    }
  };
};

const VisibleLocationList = connect(mapStateToProps, mapDispatchToProps)(LocationList);

export default VisibleLocationList;