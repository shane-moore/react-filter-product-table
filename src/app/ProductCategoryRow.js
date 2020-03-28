import React from 'react';
import './ProductCategoryRow.css'

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <div className={'category'}>{this.props.product.category}</div>
    )
  }
}


export default ProductCategoryRow;
