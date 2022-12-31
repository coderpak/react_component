import React, { Component } from 'react'
import Banner from './Banner'
import FuncCpn from './FuncCpn'

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Banner></Banner>
        <FuncCpn></FuncCpn>
      </div>
    )
  }
}

export default Home