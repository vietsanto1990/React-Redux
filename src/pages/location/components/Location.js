import React from 'react'

class Location extends React.Component {

	handleDelete = () => {
    const {data, onDelete} = this.props;
    onDelete(data.id);
	}

  render() {
  	const {data} = this.props;
  	return (
  		<tr>
				<td>{data.name}</td>
				<td>{data.description}</td>
				<td><input type="button" value='delete' onClick={this.handleDelete}/></td>
			</tr>
    )
  }
}

export default Location
