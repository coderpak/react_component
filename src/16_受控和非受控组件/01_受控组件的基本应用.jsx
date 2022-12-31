import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      message: 'defaultValue'
    }
  }
  inputChange(e) {
    console.log(e.target.value)
    this.setState({message: e.target.value})
  }
  render() {
    const { message } = this.state
    return (
      <div>
        <h1>App</h1>
        {/* 非受控组件 */}
        <input type="text" onChange={e => this.inputChange(e)} />

        {/* 受控组件： value绑定的this.state的值
           必须通过事件改变this.state中绑定的值才会输入 */}
        <input type="text" value={message} onChange={e => this.inputChange(e)} />

        <h1>{message}</h1>
      </div>
    )
  }
}

export default App