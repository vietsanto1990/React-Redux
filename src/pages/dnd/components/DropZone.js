import React from 'react'
import { DropTarget } from 'react-dnd';
import {ItemTypes} from './ItemTypes'
import './DropZone.css'

const spec = {
  drop(props, monitor, component) {
    console.log(`DROP item`);
    const item = monitor.getItem();
    return item
  },

  canDrop(props, monitor) {
    //TODO: ignore this if nothing implementation
    return true;
  }
}

const collect = (connect, monitor) => {
  return {
    dropTargetConnector: connect.dropTarget()
  }
}

class DropZone extends React.Component {
  render() {
    const {dropTargetConnector} = this.props;
    return dropTargetConnector(
      <div className="DropZone">
        Drop item here
      </div>
    )
  }
}

export default DropTarget(ItemTypes.ITEM, spec, collect)(DropZone);
