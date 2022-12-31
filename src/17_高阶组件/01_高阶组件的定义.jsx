import React, { PureComponent } from 'react'

/*
  定义一个高阶组件
  1. 高阶组件 本身不是一个组件，而是一个函数
  2. 这个函数的参数是一个组件，返回值也是一个组件
*/ 
function higherComponent(WrapperComponent){
  class NewComponent extends PureComponent {
    render() {
      return <WrapperComponent />
    }
  }
  return NewComponent
}


class HelloWorld extends PureComponent {
  render() {
    return (
      <h1>HelloWorld</h1>
    )
  }
}

const HelloWorldHOC = higherComponent(HelloWorld)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <HelloWorldHOC />
      </div>
    )
  }
}

export default App