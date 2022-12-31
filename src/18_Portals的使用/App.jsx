import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>

        {/* 渲染的内容独立挂载到的DOM元素中 */}
        { createPortal(<h1>Hello Pak</h1>, document.querySelector('#pak')) }

        <Modal>
          <h1>modal</h1>
          <p>hahaha</p>
        </Modal>
      </div>
    )
  }
}

export default App