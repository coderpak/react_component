import React, { Component } from 'react'
import Banner from './Banner'

export class Home extends Component {
  render() {
    console.log('home props:', this.props)
    return (
      <div>
        <h1>Home</h1>
        <Banner {...this.props}></Banner>
      </div>
    )
  }
}

export default Home