import React, { Component } from 'react'
import emitter from './mitt'

export class HomeBanner extends Component {

  prevClick() {
    emitter.emit('bannerPrev', {name: 'bannerPrev', age: 18})
  }

  nextClick() {
    emitter.emit('bannerNext', {name: 'bannerNext', age:20})
  }

  render() {
    return (
      <div>
        <h1>HomeBanner</h1>
        <button onClick={e => this.prevClick()}>上一个</button>
        <button onClick={e => this.nextClick()} >下一个</button>
      </div>
    )
  }
}

export default HomeBanner