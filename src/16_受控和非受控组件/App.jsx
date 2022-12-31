import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      username: 'admin'
    }

    this.userRef = createRef()
  }

  handleSubmit(event) {
    event.preventDefault()
    // 获取结果
    console.log(this.userRef.current.value)
  }

  render() {
    const { username } = this.state
    return (
      <div>
        <h1>App</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          {/* 非受控组件的使用 */}
          <input type="text" defaultValue={username} ref={this.userRef} />

          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}

export default App