// use css grid to place json elements into gtc's, and auto create gtr's

import React from 'react';
import './ProductTable.css';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

  render() {
    const products = this.props.products;
    const rows = [];
    let lastCategory = null;
    let inStockOnly = this.props.inStockOnly;
    let textChange = this.props.textChange;

    products.forEach(product => {
      const stocked = product.stocked;

      if (!product.name.includes(textChange)) {
        return;
      }

      if (inStockOnly && !stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow product={product} />)
      }
      rows.push(<ProductRow product={product} />)
      lastCategory = product.category;
    });

    return (
      <div className="container" >
        <div className="header-container">
          <div><b>Name</b></div>
          <div><b>Price</b></div>
        </div>
        <div className="grid-container">
          {rows}
        </div>
      </div>
    )
  }
}

export default ProductTable;
