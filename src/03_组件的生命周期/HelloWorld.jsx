import React, { Component } from 'react'

export class HelloWorld extends Component {
  constructor() {
    super()
    console.log('constructor')

    this.state = {
      counter: 0
    }
  }
  addCounter() {
    this.setState({counter: this.state.counter + 1})
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={e => this.addCounter()}>+1</button>
        <h1>HelloWorld { this.state.counter }</h1>
      </div>
    )
  }

  // 组件挂在后
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 组件即将被卸载
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // 组件更新dom后调用
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }


  // 不常用的生命周期
  // 返回false则不会执行render函数，则不会重新渲染dom
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true
  }
  
  // 在跟新DOM之前回调，此方法的任何返回值都会作为参数传递给componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState)
    return {position: 1000}
  }
}

export default HelloWorld