import React, { Component } from 'react'

export class NavBarTwo extends Component {
  render() {
    console.log('通过props直接传递标签:', this.props)
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className='nav-var'>
        <div className="left">{ leftSlot }</div>
        <div className="center">{ centerSlot }</div>
        <div className="right">{ rightSlot }</div>
      </div>
    )
  }
}

export default NavBarTwo