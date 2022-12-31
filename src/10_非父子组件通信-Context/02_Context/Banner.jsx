import React, { Component } from 'react'
import MyContext from '../MyContext'
import RootContext from '../RootContext'

export class Banner extends Component {

  componentDidMount() {
    console.log('banner componentDidMount:', this.context)
  }

  render() {
    console.log('banner render:', this.context)
    return (
     
      <div>
        <div>Banner</div>
        {/* 如果想访问RootContext，则使用RootContext.Consumer */}
        <RootContext.Consumer>
          {
            value => {
              console.log(value)
              return (
                <div>
                  <p>token: {value.token}</p>
                  <p>defaultToken: {value.defaultToken}</p>
                </div>
              )
            }
          }
        </RootContext.Consumer>
      </div>
    )
  }
}

// 只能设置一个
Banner.contextType = MyContext

export default Banner