import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  increment() {
    // this.setState({counter: this.state.counter + 1})
    // this.setState({counter: this.state.counter + 1})
    // this.setState({counter: this.state.counter + 1})
    // this.setState({counter: this.state.counter + 1})
    this.setState((state, props) => {
      console.log(state)
      return {
        counter: this.state.counter + 1
      }
    })
    this.setState((state, props) => {
      console.log(state)
      return {
        counter: this.state.counter + 1
      }
    })
    this.setState((state, props) => {
      console.log(state)
      return {
        counter: this.state.counter + 1
      }
    })
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h1>counter: { counter }</h1>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }
}

export default App