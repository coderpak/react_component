import React, { Component } from 'react'
import Home from './02_Context/Home'
import ProductList from './02_Context/ProductList'
import MyContext from './MyContext'
import RootContext from './RootContext'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      stu: {
        name: 'pak',
        age: 18
      }
    }
  }
  render() {
    const { stu } = this.state
    return (
      <div>
        <h1>App</h1>
        {/* 方法1： 通过展开运算符转递整个对象 */}
        {/* <Home {...stu}></Home> */}

        {/* 
          方法2：context
          1. 使用 React.createContext()创建一个MyContext对象
          2. 生产者使用创建的MyContext.Provider组件的value属性提供数据
          3. 消费者在class类上设置contextType为MyContext
            3.1 函数式组件使用MyContext.Consumer使用 类组件也可，这种方式更灵活
          4. 消费者可以在任意位置使用this.context访问
          注意: 在MyContext下的任意组件都可以使用以上方法访问到数据
        */}
        {/* <MyContext.Provider value={stu}>
          <Home></Home>
        </MyContext.Provider> */}

        {/* 使用多个context */}
        <RootContext.Provider value={{token: 'this is root token'}} >
          <MyContext.Provider value={stu}>
            <Home></Home>
          </MyContext.Provider>
        </RootContext.Provider>
        <ProductList></ProductList>
      </div>
    )
  }
}

export default App