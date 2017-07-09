import React from 'react'
import DragItem from './DragItem'
import { DragSource } from 'react-dnd'
import {ItemTypes} from './ItemTypes'

const spec = {
  beginDrag(props, monitor, component) {
    console.log(`DRAG beginDrag ${monitor.canDrag()}`);
    return {}
  },

  canDrag(props, monitor) {
    console.log(`DRAGcanDrag`);
    return true;
  },

  endDrag(props, monitor, component) {
    console.log(`DRAG endDrag drop handler ${monitor.didDrop()}`);
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  }
}

class DragWrapper extends React.Component {
  render() {
    const items = [1,2,3];
    const listComponents = items.map((value) => (<DragItem key={value} index={value}/>));
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div>
      {listComponents}
      </div>
    )
  }
}

export default DragSource(ItemTypes.ITEM, spec, collect)(DragWrapper);