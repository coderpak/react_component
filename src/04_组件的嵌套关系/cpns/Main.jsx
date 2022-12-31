import React, { Component } from 'react'
import Banner from './Banner'
import ProductList from './ProductList'

export default class Main extends Component {
  render() {
    return (
      <div>
        <p>main</p>
        <Banner />
        <ProductList />
      </div>
    )
  }
}
