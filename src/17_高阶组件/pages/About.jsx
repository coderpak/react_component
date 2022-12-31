import React, { PureComponent } from 'react'
import enhancedUserInfo from '../hoc/enhanced_props'

export class About extends PureComponent {
  render() {
    return (
      <h1>About  ---- {this.props.name}</h1>
    )
  }
}

export default enhancedUserInfo(About)