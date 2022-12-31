import React, { Component } from 'react'
import TabControl from './TabControl/TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      title: ['流行', '新款', '精选'],
      index: 0
    }
  }
  tabClick(index) {
    this.setState({index})
  }
  render() {
    const { title, index} = this.state
    return (
      <div>
        <TabControl title={title} tabClick={i => this.tabClick(i)}></TabControl>
        <h1>{title[index]}</h1>
      </div>
    )
  }
}

export default App