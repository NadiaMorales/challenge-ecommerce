import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  

      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'add item to cart' : 'OFF'}
        </button>
      );
    }
  }
  export default Products;