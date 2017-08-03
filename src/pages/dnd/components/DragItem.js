import React from 'react'
import './DragItem.css'
import { DragSource } from 'react-dnd'
import {ItemTypes} from './ItemTypes'

const spec = {
  beginDrag(props, monitor, component) {
    console.log(`DRAG beginDrag ${props.id}`);
    const item = {
      id: props.id
    }
    return item;
  },

  endDrag(props, monitor, component) {
    console.log(`DRAG endDrag drop handler ${monitor.didDrop()}`);
    console.log(`DRAG endDrag drop result ${monitor.getDropResult()}`);
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  }
}

class DragItem extends React.Component {
  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div className="DragItem">Draggable item {this.props.id}</div>
    )
  }
}

export default DragSource(ItemTypes.ITEM, spec, collect)(DragItem);