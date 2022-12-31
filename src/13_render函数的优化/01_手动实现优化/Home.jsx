import React, { Component } from 'react'

export class Home extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.message !== this.props.message) {
      return true
    }
    return false
  }
  render() {
    console.log('Home render')
    return (
      <div>
        <h1>Home: {this.props.message}</h1>
      </div>
    )
  }
}

export default Home