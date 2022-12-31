import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: 'admin',
      password: '',
      isAgree: false,

      // 多选checkbox的定义方式
      hobbies:[
        { text: '唱', value: 'sing', isChecked: false },
        { text: '跳', value: 'dance', isChecked: false },
        { text: 'rap', value: 'rap', isChecked: false }
      ]
    }
  }

  formSubmit(event) {
    // 组织默认行为
    event.preventDefault()

    // 获取表单值
    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.state.isAgree)
    
    const checkHobbies = this.state.hobbies
                        .filter(item => item.isChecked) 
                        .map(item => item.value)

    console.log(checkHobbies)
  }

  // 处理input:text
  inputChange(event) {
    // console.log(event.target.value)
    // console.log(event.target.name)
    const keyword = event.target.name
    this.setState({[keyword]: event.target.value})
  }

  // 处理单选checkbox
  handleAgree(event) {
    console.log(event.target.checked)
    this.setState({isAgree: event.target.checked})
  }

  // 处理多选checkbox
  handleHobbies(event, index) {
    const newHobbies = [...this.state.hobbies]
    newHobbies[index].isChecked = event.target.checked
    this.setState({hobbies: newHobbies})
  }
  
  render() {
    const { username, password, isAgree, hobbies } = this.state
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

          {/* checkbox单选 */}
          <div>
            <label htmlFor="agree">
              同意协议
              <input
                type="checkbox" id='agree' 
                checked={isAgree} 
                onChange={e => this.handleAgree(e)}
                />
            </label>
          </div>

           {/* checkbox多选 */}
          <div>
            <span>爱好： </span>
            {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <span>{item.text}</span>
                    <input 
                      type="checkbox" 
                      id={item.value} 
                      checked={item.isChecked}
                      onChange={e => this.handleHobbies(e, index)}
                     />
                  </label> 
                )
              })
            }
          </div>
          <div>
            <input type="submit" value="登录" />
          </div>
        </form>
      </div>
    )
  }
}

export default App