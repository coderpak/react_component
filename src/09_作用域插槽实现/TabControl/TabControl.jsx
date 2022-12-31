import React, { Component } from 'react'
import './index.css'
export class TabControl extends Component {
  constructor() {
    super() 
    this.state = {
      currentIndex: 0
    }
  }
  itemClick(index){
    this.setState({currentIndex: index})
    this.props.tabClick(index)
  }

  render() {
    console.log(this.props)
    const { title, itemType } = this.props
    const { currentIndex } = this.state
    return (
      <div className='tab-bar'>
      {
        title.map((item, index) => {
          return (
            <div 
              onClick={e => this.itemClick(index)}
              className={`tab-bar-item ${currentIndex === index ? 'active' : ''}`}
              key={item}>
              { itemType(item) }
            </div>
          )
        })
      }
    </div>
    )
  }
}

export default TabControl