import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    console.log('banner props:', this.props)
    return (
      <div>Banner {this.props.name}</div>
    )
  }
}

export default Banner