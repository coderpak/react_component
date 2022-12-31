import React, { Component } from 'react'
import Home from './Home'
import emitter from './mitt'

export class App extends Component {
  componentDidMount() {
    emitter.on('bannerPrev', this.bannerPrev.bind(this))
    emitter.on('bannerNext', this.bannerNext.bind(this))
  }
  bannerPrev(arg) {
    console.log(arg)
  }
  bannerNext(arg) {
    console.log(arg)
  }
  
  componentWillUnmount() {
    // 即将卸载组件时取消事件监听
    emitter.off('bannerPrev', this.bannerPrev)
    emitter.off('bannerNext', this.bannerNext)

  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <Home></Home>
      </div>
    )
  }
}

export default App