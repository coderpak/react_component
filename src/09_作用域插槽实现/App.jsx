import React, { Component } from 'react'
import TabControl from './TabControl/TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      title: ['流行', '新款', '精选'],
      tabIndex: 0
    }
  }

  tabClick(i) {
    this.setState({tabIndex: i})
  }
  getItemType(item) {
    return <span>{ item }</span>
  }

  render() {
    const { title, tabIndex } = this.state
    return (
      <div>
        <TabControl 
          title={title}
          tabClick={i =>  this.setState({tabIndex: i})}
          itemType={item => this.getItemType(item)}
         ></TabControl>
        <h1>{ title[tabIndex] }</h1>
      </div>
    )
  }
}

export default App