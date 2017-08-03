/* eslint react/prop-types: 0 */
import React from 'react';
import { DropTarget } from 'react-dnd';
import {ItemTypes} from './ItemTypes';
import './DropZone.css';

const spec = {
  drop(props, monitor) {
    // console.log('DROP item');
    const item = monitor.getItem();
    return item;
  },
};

const collect = (connect) => {
  return {
    dropTargetConnector: connect.dropTarget()
  };
};

class DropZone extends React.Component {
  render() {
    const {dropTargetConnector} = this.props;
    return dropTargetConnector(
      <div className="DropZone">
        Drop item here
      </div>
    );
  }
}

export default DropTarget(ItemTypes.ITEM, spec, collect)(DropZone);
