import React, { Component } from 'react';
class Product extends Component {
  // state = {
  //   // name : 'burger',
  //   // count : 4,
  //   name: this.props.product.name,
  //   count: this.props.product.count,
  //   imgUrl :"logo192.png",
  //   list: [] //["Ahmed","Awny","tarek"]
  // };
    // Solve ==> 3
    getbcground() {
      return this.props.product.count === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2";
    }
    // checkNames (){
    //   if(this.state.list.length ===0){
    //     return <h2>No Names.</h2>
    //   }else{
    //     return (
    //       <ul>
    //       {this.state.list.map((names)=> <li key={names}>{names}</li>)}
    //     </ul>
    //     )
    //   }
    // }
    // handler = (num) => {
    //   this.setState({count: this.state.count + num})  // عشان اقدر اغير القيمة القديمة بالقيمة الجديدة اللي انا عاوزها
    // }
    // handler = () => {
    //   this.setState({count: this.props.product.count + 1})  // عشان اقدر اغير القيمة القديمة بالقيمة الجديدة اللي انا عاوزها
    // }
    // incremental = () => {
    //   this.handler(2);
    //   }
  render() { 
    // console.log(this.props.product.name)
    // console.log(this.props.children)
    // Solve ==> 1
    // let bcground;
    // if(this.state.count === 0 ){
    //   bcground = "badge bg-warning m-2";
    // }else {
    //   bcground = "badge bg-primary m-2";
    // }
    // Solve ==> 2
    // let bcground =  this.state.count === 0  ? "badge bg-warning m-2" : "badge bg-primary m-2";
    return( <div className ="row">
      {/* <div className="col-1">
      <img src={this.state.imgUrl} alt="" />
      </div> */}
      <div className="col-3">
      <h2 className="test">{this.props.product.name}</h2>
      </div>
      <div className="col">
        {/* {this.props.children} */}
      <span className={this.getbcground()}>{this.props.product.count}</span>
      <button className=" btn btn-outline-primary " onClick={ () => this.props.onIncrement(this.props.product)}> +</button>
      <button className="btn btn-outline-primary m-2" onClick={() => this.props.onDecrement(this.props.product)}>-</button>
      <span onClick ={()=> this.props.onDelete(this.props.product)}>
      <i className="fas fa-trash m-2 btn btn-danger" ></i>
      </span>
      {/* <button className=" btn btn-primary  d-inline-block" onClick={()=> this.handler(2)}> +</button> */}
      {/* {this.props.product.list.length ===0 && <h2>No Names</h2>}  return No Names */}
      {/* <ul>
        {this.props.product.list.map((names)=> <li key={names}>{names}</li>)}
      </ul> */}
      {/* {this.checkNames()} */}
      </div>
      
    </div>)
  }
}

export default Product;