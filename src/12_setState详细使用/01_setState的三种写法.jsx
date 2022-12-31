import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'hello world',
      counter: 100
    }
  }
  changeMessage() {
    // setState 执行的是 Object.assign 合并操作 然后再调用 render方法
    // 1.基本使用
    // this.setState({ message: '你好，世界' })

    // 2.传入一个回调函数
    // 好处1： 可以在回调函数中编写新的state处理逻辑
    // 好处2： 当前的回调函数会将之前的state和props传递进来
    // this.setState((state, props) => {
    //   // 可以在这编写逻辑

    //   console.log(state, props)
    //   return {
    //     message: '你好，世界'
    //   }
    // })

    // 3. setState 在react的事件处理中是一个异步调用
    // 如果希望在数据跟新后，获取最新的state执行一段逻辑代码
    // 那么可以给setState传入第二个参数 ：callback
    this.setState({message: '你好世界'}, () => {
      console.log('跟新回调后的state', this.state.message)
    })
    console.log('-----', this.state.message)
  }
  render() {
    console.log('render 函数执行')
    const { message, counter } = this.state
    return (
      <div>
        <h1>{ message }</h1>
        <h1>{ counter }</h1>
        <button onClick={e => this.changeMessage()}>修改message</button>
        <button>+1</button>
      </div>
    )
  }
}

export default App