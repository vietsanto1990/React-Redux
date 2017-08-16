/* eslint react/prop-types: 0 */
import React from 'react';

export class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

export class ProductRow extends React.Component {

  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{ color: 'red' }}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(product => {
      if(product.category.indexOf(this.props.filterText) === -1 || 
         (this.props.inStockOnly && !product.stocked)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleStockChange(e) {
    this.props.onStockChange(e.target.checked);
  }
  
  handleTextChange(e) {
    this.props.onTextChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleTextChange}/>
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleStockChange}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText : '',
      inStockOnly : false
    };
    this.handleStockChange = this.handleStockChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleStockChange(stock) {
    this.setState({
      inStockOnly: stock
    });
  }
  
  handleTextChange(text) {
    this.setState({
      filterText: text
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onStockChange={this.handleStockChange}
          onTextChange={this.handleTextChange}/>
        <ProductTable 
          products={this.props.products} 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

