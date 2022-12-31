import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {

  render() {
    console.log('Recommend render')
    return (
      <div>
        <h1>Recommend { this.props.counter } </h1>
      </div>
    )
  }
}

export default Recommend