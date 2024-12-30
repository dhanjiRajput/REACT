import React, { Component } from 'react';
import "./Counter.css"
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className='box'>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment} style={{marginRight:"20px",color:"white"}}>
          Increment
        </button>
        <button onClick={this.decrement} style={{marginLeft:"20px",color:"white"}}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
