import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: 'admin'
    }
  }

  formSubmit(event) {
    // 组织默认行为
    event.preventDefault()

    // 获取表单值
    console.log(this.state.username)
  }

  inputChange(event) {
    console.log(event.target.value)
    this.setState({username: event.target.value})
  }
  
  render() {
    const { username } = this.state
    return (
      <div>
        <h1>App</h1>
        <form onSubmit={e => this.formSubmit(e)}>
          <label htmlFor="username">
            <input type="text" 
              id='username' 
              name='username'
              value={username}
              onChange={e => this.inputChange(e)}
              />
          </label>
          <div>
            <input type="submit" value="登录" />
          </div>
        </form>
      </div>
    )
  }
}

export default App