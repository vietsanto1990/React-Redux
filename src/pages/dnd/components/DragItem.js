import React from 'react'
import './DragItem.css'

export default class DragItem extends React.Component {
  render() {
    return (
      <div className="DragItem">Draggable item {this.props.index}</div>
    )
  }
}