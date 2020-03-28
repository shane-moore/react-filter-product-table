// use css grid to place json elements into gtc's, and auto create gtr's

import React from 'react';

class SearchBar extends React.Component {

  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked);
  }

  handleTextChange = (e) => {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." minLength="3" onChange={this.handleTextChange} />
        <div>
          <input type="checkbox" onChange={this.handleInStockChange} />{" "}
          <span>Only show products in stock</span>
        </div>
      </form>

    )
  }
}

export default SearchBar;
