import React, { Component } from 'react'

export class Recommend extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.counter !== this.props.counter) {
      return true
    }
    return false
  }
  render() {
    console.log('Recommend render')
    return (
      <div>
        <h1>Recommend { this.props.counter } </h1>
      </div>
    )
  }
}

export default Recommend