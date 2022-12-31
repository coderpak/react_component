import React, { PureComponent } from 'react'

export class Home extends PureComponent {

  render() {
    console.log('Home render')
    return (
      <div>
        <h1>Home: {this.props.message}</h1>
      </div>
    )
  }
}

export default Home