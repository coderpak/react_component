import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    const { productList } = this.props
    return (
      <div>
        <h1>ProductList</h1>
        <ul>
          {productList.map(item => <li key={item.title}>{item.title}</li>)}
        </ul>
      </div>
    )
  }
}
