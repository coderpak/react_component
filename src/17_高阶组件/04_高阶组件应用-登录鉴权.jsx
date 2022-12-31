import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Cart></Cart>
      </div>
    )
  }
}

export default App