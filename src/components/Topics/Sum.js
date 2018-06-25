import React, { Component } from 'react';

export default class Sum extends Component {

  constructor() {
    super();

    this.state = {
      num1: 0,
      num2: 0,
      sum: null
    }
  }

  updateNumber1(val) {
    this.setState({ num1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ num2: parseInt(val, 10) });
  }

  add(x, y) {
    this.setState({ sum: x + y });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h1> Sum </h1>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.num1, this.state.num2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
}