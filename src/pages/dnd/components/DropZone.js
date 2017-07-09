import React from 'react'
import { DropTarget } from 'react-dnd';
import {ItemTypes} from './ItemTypes'

const spec = {
  drop(props, monitor, component) {
    console.log(`DROP `);
  },

  hover(props, monitor, component) {
    console.log(`DROP hover `);
  },

  canDrop(props, monitor) {
    console.log(`DROP canDrop `);
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
      <div>
        Drop item here
      </div>
    )
  }
}

export default DropTarget(ItemTypes.ITEM, spec, collect)(DropZone);
