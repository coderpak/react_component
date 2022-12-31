import React, { PureComponent } from 'react'
import login_auth from '../hoc/login_auth'

export class Cart extends PureComponent {
  render() {
    return (
      <div>Cart</div>
    )
  }
}

export default login_auth(Cart)