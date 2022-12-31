import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'hello world',
      counter: 100
    }
  }
  changeMessage() {
    this.setState({ message: '你好，世界' })
  }

  increment() {
    // 调用三次setState 只会执行一次 render函数
    // this.setState({counter: this.state.counter + 1})
    // this.setState({counter: this.state.counter + 1})
    // this.setState({counter: this.state.counter + 1})

    // setState设计为异步的好处：
    /*
      1.获取到多个更新，之后进行批量更新，提升性能
      2.如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步，出现数据混乱情况
    */ 

    // setState 一定是异步的吗？ 
    /*
      分两种情况
      情况一： react18之前
        1. 在组件生命周期或react事件中，setState是异步的
        2. 在浏览器原生回调的事件中 setState是同步的 (setTimeout, promise, native event handler)

      情况二： react18之后 所有setState都是异步的批处理
    */ 

      //如果希望代码可以同步会拿到，则需要执行特殊的flushSync操作
      flushSync(() => {
        this.setState({counter: 9999})
      })
      console.log(this.state.counter)
  }

  render() {
    console.log('render 函数执行')
    const { message, counter } = this.state
    return (
      <div>
        <h1>{ message }</h1>
        <h1>{ counter }</h1>
        <button onClick={e => this.changeMessage()}>修改message</button>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }
}

export default App