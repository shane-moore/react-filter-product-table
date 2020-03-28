import React from 'react';
import './ProductRow.css';

class ProductRow extends React.Component {
  render() {

    const product = this.props.product;
    const name = product.stocked ? product.name : <span style={{ color: "red" }} > {product.name}</span >;

    return (
      <div className="row">
        <div className="name">{name}</div>
        <div className="price">{this.props.product.price}</div>
      </div>

    )
  }
}

export default ProductRow;
