import React, { Component } from 'react'
import "./index.css"

export class NavBar extends Component {
  render() {
    console.log('通过props.children:', this.props )
    const { children } = this.props
    return (
      <div className='nav-var'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default NavBar