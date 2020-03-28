// use css grid to place json elements into gtc's, and auto create gtr's

import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false,
      textChange: ""
    }
  }

  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  handleTextChange = (textChange) => {
    this.setState({
      textChange: textChange
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar onInStockChange={this.handleInStockChange} onTextChange={this.handleTextChange} />
        <ProductTable products={PRODUCTS} inStockOnly={this.state.inStockOnly} textChange={this.state.textChange} />
      </div>
    )
  }
}

const PRODUCTS =
  [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
  ];

export default FilterableProductTable;
