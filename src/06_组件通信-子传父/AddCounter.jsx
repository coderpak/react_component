import React, { Component } from 'react'

export class AddCounter extends Component {
  addCounter(couter) {
    console.log(couter,this.props)
    this.props.fn(couter)
  }
  render() {

    return (
      <div>
        <button onClick={e => this.addCounter(1)}>+1</button>
        <button onClick={e => this.addCounter(5)}>+5</button>
        <button onClick={e => this.addCounter(10)}>+10</button>
      </div>
    )
  }
}

export default AddCounter