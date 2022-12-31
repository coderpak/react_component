import React, { PureComponent } from 'react'
import ThemeContext from './context/theme_context'
import Product from './pages/Product'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ThemeContext.Provider value={{color: 'red', size: 30}}>
          <Product message="hello"></Product>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App