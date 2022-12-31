import React, { PureComponent, createRef } from 'react'
import FuncCpn from './FuncCpn'
import Home from './Home'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      message: 'hello world'
    }
    this.HomeRef = createRef()
    this.FunRef = createRef()
  }

  getNativeDom() {
    // 获取类组件的实例对象
    console.log(this.HomeRef.current)
    this.HomeRef.current.test()

    // null 函数式组件没有实例对象，不能被ref获取
    // console.log(this.FunRef.current) 

    // 如果我们是想获取函数式组件中的某一个元素，那么函数式组件应该使用forwardRef创建
    console.log(this.FunRef.current)
  }
  render() {
    return (
      <div>
        <Home ref={this.HomeRef} ></Home>
        <FuncCpn ref={this.FunRef}></FuncCpn>
        <button onClick={e => this.getNativeDom()}>获取元素</button>
      </div>
    )
  }
}

export default App