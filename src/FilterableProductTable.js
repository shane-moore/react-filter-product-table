import React from 'react';
import './App.css';

// loop over product
// create a ProductCategoryRow from category name
// creat a ProductRow next
// see if category name matches, if so, only make the row

// state in app:
// checking box should remove red components -> live in FilterableProductTable
// state of isChecked initially false
// when checked, change state to true
// if true -> loop should not add ProductRow if inStock is false
// Search component needs to filter out everything not matching search string -> lives in FilterableProductTable
// update state of FilterableProductTable with value of the input field and then run includes method on loop over json file's product.name


class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">
          {this.props.category}
        </th>
      </tr>
    )
  }
}

class ProductRow extends React.Component {
  render() {

    let stocked = this.props.product.stocked;
    let name = stocked ? this.props.product.name : <span style={{ color: 'red' }}>{this.props.product.name}</span>;
    let price = this.props.product.price;

    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}

// want to only show in stock items if box is checked
// if inStockOnly is checked yet stocked is false, just return
// if inStockOnly is checked and stocked is true, display product
// if inStockOnly is not checked, display product



class ProductTable extends React.Component {
  render() {

    const rows = [];
    let lastCategory = null;
    const inStockOnly = this.props.inStockOnly;
    const filteredText = this.props.filteredText;

    this.props.products.forEach((product) => {
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (!product.name.includes(filteredText)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
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


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  handleInStockOnly = (e) => {
    this.props.onInStockOnly(e.target.checked);
  }

  handleFilteredText = (e) => {
    this.props.onFilteredText(e.target.value);
  }


  render() {

    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input type="text" placeholder="Search..." onChange={this.handleFilteredText} />
        <div>
          <input type="checkbox" onChange={this.handleInStockOnly} /> {' '}
          <label>Only show products in stock</label>
        </div>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false,
      filteredText: ''
    }
  };

  handleInStockOnly = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  handleFilteredText = (filteredText) => {
    this.setState({
      filteredText: filteredText
    });
    console.log(this.state.filteredText)
  }

  render() {
    return (
      <div>
        <SearchBar inStockOnly={this.state.inStockOnly}
          onInStockOnly={this.handleInStockOnly}
          searchValue={this.state.filteredText}
          onFilteredText={this.handleFilteredText}
        />
        <ProductTable
          products={PRODUCTS}
          inStockOnly={this.state.inStockOnly}
          filteredText={this.state.filteredText}
        />
      </div>

    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
export default FilterableProductTable;
