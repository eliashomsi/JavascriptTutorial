import React, { Component } from 'react';
import { Counter } from './Counter';

export class HashMap extends Component {
  static displayName = HashMap.name;

  constructor (props) {
    super(props);

    this.state = { hashMap: {}, inputValue: ''};
  }
  
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  addWord = () => {
      var hashMapCopy = this.state.hashMap;
      if(hashMapCopy[this.state.inputValue]) {
        hashMapCopy[this.state.inputValue] = hashMapCopy[this.state.inputValue] + 1
      }else {
        hashMapCopy[this.state.inputValue] = 1
      }
      this.setState( {
          inputValue: '',
          hashMap: hashMapCopy
      });
  }

  render = () => 
    (<div>
        <h1> hello people </h1>
        <ul>
            {
                Object.keys(this.state.hashMap).map((item) => {
                    return <li> {item}:{this.state.hashMap[item]} </li>
                })
            }
        </ul>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.addWord} > add me </button>
        <Counter />
    </div>);
}