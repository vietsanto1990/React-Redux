import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import './index.css'
import DragWrapper from './components/DragWrapper'
import DropZone from './components/DropZone'

class DraggableApp extends React.Component {
  render() {
    return (
      <div className="DraggableApp">
        <div className="DraggableApp_item DraggableApp_item--left"><DropZone/></div>
        <div className="DraggableApp_item DraggableApp_item--right"><DragWrapper/></div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DraggableApp);