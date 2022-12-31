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
      ],
      fruit: ['banana']
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

    console.log(this.state.fruit)
  }

  // 处理input:text select单选和普通input的处理方法一致
  inputChange(event) {
    console.log('value: ', event.target.value)
    console.log('name: ', event.target.name)
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

  // 处理多选select
  handleFruitChange(event) {
    const options = Array.from(event.target.selectedOptions)
    const values = options.map(item => item.value)
    this.setState({fruit: values})

    // Array.from接受两个参数
    const values2 = Array.from(event.target.selectedOptions, item => item.value)
    console.log(values2)
  }
  
  render() {
    const { username, password, isAgree, hobbies, fruit } = this.state
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

          {/* select单选  和普通input处理方法一致 fruit定义为字符串*/}
          {/* <div>
            <select value={fruit} onChange={e => this.inputChange(e)} name="fruit" >
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="orange">橙子</option>
            </select>
            <span>{ fruit }</span>
          </div> */}

          {/* select多选  fruit定义为数组*/}
          <div>
            <select value={fruit} onChange={e => this.handleFruitChange(e)} name="fruit" multiple >
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="orange">橙子</option>
            </select>
            <span>{ fruit }</span>
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