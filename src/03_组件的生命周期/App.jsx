import React, { Component } from 'react'
import HelloWorld from './HelloWorld'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      show: true
    }
  }

  btnClick() {
    this.setState({show: !this.state.show})
  }
  render() {
    const { show } = this.state
     
    return (
      <div>
        <button onClick={e => this.btnClick()}>显示/隐藏</button>
        { show && <HelloWorld></HelloWorld> }
      </div>
    )
  }
}

export default App