import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      message: 'hello world'
    }

    this.pRef = createRef()
    this.divEl = null
  }

  getNativeDom() {
     // 1.方式一: 在React元素上绑定一个ref字符串(已经弃用)
    console.log(this.refs.titleRef)

    // 2.方式二：提前创建createRef对象，绑定到元素身上
    console.log(this.pRef.current)

    // 3. ref传入一个回调函数,在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
    console.log(this.divEl)
  }
  render() {
    return (
      <div>
        <h1 ref="titleRef">这是h1元素</h1>
        <p ref={this.pRef}>这是p元素</p>
        <div ref={el => this.divEl = el}>这是div元素</div>
        <button onClick={e => this.getNativeDom()}>获取元素</button>
      </div>
    )
  }
}

export default App