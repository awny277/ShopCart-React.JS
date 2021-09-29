import react from 'react';
import React, { Component } from 'react';
import Product from './product';
class Shopping extends Component {

  render() { 
    return (
      <react.Fragment>
        <h1>Shopping cart</h1>
        <button className="btn btn-secondary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
        {this.props.products.map((product) => (
          <Product key={product.id} product={product} onDelete ={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}/>
        ))}
      </react.Fragment>
    );
  }
}

export default Shopping;