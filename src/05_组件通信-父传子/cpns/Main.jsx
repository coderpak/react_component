import React, { Component } from 'react'
import Banner from './Banner'
import ProductList from './ProductList'
import axios from 'axios'

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      bannerList: ['aaa', 'bbb', 'ccc'],
      productList: []
    }
  }

  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      this.setState({productList: res.data.data.recommend.list})
    })
  }

  render() {
    return (
      <div>
        <p>main</p>
        <Banner bannerList={this.state.bannerList} name="pak" age={11} />
        <ProductList productList={this.state.productList} />
      </div>
    )
  }
}
