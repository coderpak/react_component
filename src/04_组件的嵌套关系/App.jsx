import React, { Component } from 'react'
import Footer from './cpns/Footer'
import Header from './cpns/Header'
import Main from './cpns/Main'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}
