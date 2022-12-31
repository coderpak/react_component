import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import NavBarTwo from './NavBarTwo/NavBarTwo'

export class App extends Component {
  render() {
    const leftSlot = <button>左边按钮</button>
    const centerSlot = <h1>中间标题</h1>
    const rightSlot = <i>右边图标</i>

    return (
      <div>
        <NavBar>
          <button>左边按钮</button>
          <h1>中间标题</h1>
          <i>右边图标</i>
        </NavBar>
        
        <NavBarTwo 
          leftSlot={leftSlot}
          centerSlot={centerSlot}
          rightSlot={rightSlot}>
        </NavBarTwo>
      </div>
    )
  }
}

export default App