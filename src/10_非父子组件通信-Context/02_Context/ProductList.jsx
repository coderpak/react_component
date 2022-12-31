import React, { Component } from 'react'
import RootContext from '../RootContext'

export class ProductList extends Component {
  render() {
    return (
      <h1>
        <RootContext.Consumer>
          {
            // productList 在RootContext.Product组件外，可以访问到默认值
            value => {
              console.log('ProductList', value)
            }
          }
        </RootContext.Consumer>
      </h1>
    )
  }
}

export default ProductList