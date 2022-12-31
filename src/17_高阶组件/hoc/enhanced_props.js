import React, { PureComponent } from 'react'

function enhancedUserInfo(WrapperComponent) {
  class NewComponent extends PureComponent {
    constructor() {
      super()

      this.state = {
        userInfo: {
          name: "pak",
          level: 99
        }
      }
    }
    render() {
      return (
        <WrapperComponent {...this.props} {...this.state.userInfo} />
      )
    }
  }
  return NewComponent
}

export default enhancedUserInfo