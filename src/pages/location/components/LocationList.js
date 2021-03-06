/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import './LocationList.css';

class LocationList extends React.Component {

  componentDidMount() {
    const { requestLocations } = this.props;
    requestLocations();
  }

  render() {
    const { locations, deleteLocation } = this.props;
    return (
      <form>
        <table>
          <thead>
          <tr>
            <td>NAME</td>
            <td>DESCRIPTION</td>
          </tr>
          </thead>
          <tbody className='locationTable'>
            {locations.map(location => (
              <Location key={location.id} data={location} onDelete={deleteLocation}/>
            ))}
          </tbody>
          <tfoot>
          <tr>
            <td><input type="submit" value='Save'/></td>
            <td><input type="button" value='Cancel'/></td>
          </tr>
          </tfoot>
        </table>
      </form>
    );
  }
}

LocationList.propTypes = {
  locations: PropTypes.array
};

LocationList.defaultProps = {
  locations: []
};

export default LocationList;