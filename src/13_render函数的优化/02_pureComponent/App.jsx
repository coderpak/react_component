import React, { PureComponent } from 'react'
import Recommend from './Recommend'
import Home from './Home'
import FuncCpn from './FuncCpn'

/*
  PureComponent 本质就是对state和props进行比较，来控制
  shouldComponentUpdate 返回false还是true
  注意：PureComponent 对比时用的是浅层比较 shallowEqual
*/ 



export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      message: 'hello world',
      counter: 100
    }
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
        <FuncCpn message={message}></FuncCpn>
      </div>
    )
  }
}

export default App