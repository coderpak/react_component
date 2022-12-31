import React, { Component } from 'react'
import AddCounter from './AddCounter'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 100
    }
  }
  setCounter(counter) {
    this.setState({counter: this.state.counter + counter})
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h1> { counter } </h1>
        <AddCounter fn={c => { this.setCounter(c) }} />
      </div>
    )
  }
}

export default App
