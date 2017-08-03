import React from 'react';
import DragItem from './DragItem';

export default class DragWrapper extends React.Component {
  render() {
    const items = [1, 2, 3];
    const listComponents = items.map((value) => (<DragItem key={value} id={value}/>));
    return (
      <div>
        {listComponents}
      </div>
    );
  }
}
