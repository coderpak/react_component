import React, { PureComponent } from 'react'
import ProductList from './pages/ProductList'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ProductList></ProductList>
      </div>
    )
  }
}

export default App