import React from 'react';
import NavBAr from './NavBar';
import Shopping from './shoppingCart';

class App extends React.Component {
  state = {
    products : [
      {id:1, name:"burger" , count: 3},
      {id:2, name:"frise" , count: 2},
      {id:3, name:"cola" , count: 1},
    ]
  }
  hanlerDelete = (product) => {
    // clone
    // Edite
    // console.log(product);
    let newProducts = this.state.products.filter(p => p.id !== product.id);
    console.log(newProducts)
    // setState
    this.setState({products: newProducts});
  }

  HandlerReset = () => {
    let products = [...this.state.products];
    products =products.map((ele)=> {
      ele.count = 0
      return ele
    })
    this.setState({products: products})
    }

    handlerIncrement = (product) => {
      let products = [...this.state.products];
      let index = products.indexOf(product)
      products[index] = {...products[index]}
      products[index].count ++;
      this.setState({products})
    }

    hanedlerDecrement = (product) => {
      let products = [...this.state.products];
      let index = products.indexOf(product);
      products[index] = {...products[index]};
      if(products[index].count <= 0){
        products[index].count = 0;
      }else{
        products[index].count--;
        this.setState({products})
      }
      
    }
  render() { 
    return (
      <React.Fragment>
        <NavBAr prodcutCount = {this.state.products.filter(ele => ele.count > 0).length}/>
        <main className="container">
        <Shopping products ={this.state.products} onIncrement={this.handlerIncrement} onDecrement = {this.hanedlerDecrement}
        onDelete = {this.hanlerDelete} onReset={this.HandlerReset}
        />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;