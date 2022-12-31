import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: 'admin',
      password: ''
    }
  }

  formSubmit(event) {
    // 组织默认行为
    event.preventDefault()

    // 获取表单值
    console.log(this.state.username)
    console.log(this.state.password)
  }

  inputChange(event) {
    // console.log(event.target.value)
    // console.log(event.target.name)

    const keyword = event.target.name
    this.setState({[keyword]: event.target.value})
  }
  
  render() {
    const { username, password } = this.state
    return (
      <div>
        <h1>App</h1>
        <form onSubmit={e => this.formSubmit(e)}>
          <label htmlFor="username">
            账号：
            <input type="text" 
              id='username' 
              name='username'
              value={username}
              onChange={e => this.inputChange(e)}
              />
          </label>
          <label htmlFor="password">
            密码：
            <input type="text" 
              id='password' 
              name='password'
              value={password}
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