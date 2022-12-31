import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Banner extends Component {
  render() {
    console.log('banner props', this.props)
    const { bannerList } = this.props
    return (
      <div>
        <h1>Banner list</h1>
        <ul>
          { bannerList.map(item => <li key={item}>{item}</li>) }
        </ul>
      </div>
    )
  }
}

// 指定类型
Banner.propTypes  = {
  bannerList: PropTypes.array,
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

// 指定默认值
Banner.defaultProps = {
  age: 20
}


