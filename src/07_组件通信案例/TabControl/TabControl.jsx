import React, { Component } from 'react'
import "./index.css"

export class TabControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  itemClick(index) {
    this.setState({currentIndex: index})
    this.props.tabClick(index)
  }
  render() {
    const { currentIndex } = this.state
    const { title } = this.props
    return (
      <div className='tab-bar'>
        {
          title.map((item, index) => {
            return (
              <div className="tab-bar-item" onClick={e => this.itemClick(index)} key={item}>
                <span className={currentIndex === index ? 'active' : ''}>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TabControl