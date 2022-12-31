import React, { Component } from 'react'
import Recommend from './Recommend'
import Home from './Home'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      message: 'hello world',
      counter: 100
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.message !== this.state.message 
      || nextState.counter !== this.state.counter) {
      return true
    }
    return false
  }

  changeMessage() {
    this.setState({message: '你好，世界'})
  }
  increment() {
    this.setState({counter: this.state.counter + 1})
  }
  render() {
    console.log('app render')
    const { message, counter } = this.state
    return (
      <div>
        <h1>App</h1>
        <p>app message : {message}</p>
        <p>app counter: {counter}</p>
        <button onClick={e =>  this.changeMessage()}>修改message</button>
        <button onClick={e => this.increment()}>+1</button>
        <Home message={message}></Home>
        <Recommend counter={counter}></Recommend>
      </div>
    )
  }
}

export default App