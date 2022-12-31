import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  test() {
    console.log('home test被调用----')
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>home p元素</p>
        <div>home div元素</div>
      </div>
    )
  }
}

export default Home
