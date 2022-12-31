import books from "./data";

import { Component } from "react";

class App extends Component {
  constructor() {
    super()

    this.state = {
      bookList: books
    }
  }

  changeCounte(index, operator) {
    let newBooks = [...this.state.bookList]
    newBooks[index].count += operator
    this.setState({bookList: newBooks})
  }

  totolPrice() {
    return this.state.bookList.reduce((pre, curr) => {
      return pre + curr.price * curr.count
    }, 0)
  }

  deleteBook(index) {
    let newBooks = [...this.state.bookList]
    newBooks.splice(index, 1)
    console.log(index,newBooks)
    this.setState({bookList: newBooks})
  }

  renderBookList() {
    let { bookList } = this.state

    return (
      <div>
         <table>
          <thead>
            <tr>
              <td>序号</td>
              <td>名称</td>
              <td>日期</td>
              <td>价格</td>
              <td>数量</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
          { 
            bookList.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{ item.id }</td>
                  <td>{ item.name }</td>
                  <td>{ item.date }</td>
                  <td>{ item.price }</td>
                  <td>
                    <button onClick={() => { this.changeCounte(index, -1) }} disabled={item.count <= 1} >-</button>
                    { item.count }
                    <button onClick={() => { this.changeCounte(index, 1) }} disabled={item.count >= 10}>+</button>
                  </td>
                  <td><button onClick={ () => { this.deleteBook(index) } } >删除</button></td>
                </tr>
              )
            }) 
          }
          </tbody>
        </table>
        <h1>总价格为：{ this.totolPrice() }</h1>
      </div>
    )
  }

  renderBookEmpty(){
    return (
      <h1> 暂时没有书籍 </h1>
    )
  }

  render() {
    let { bookList } = this.state

    return (
      <div className="App">
        { bookList.length?  this.renderBookList() : this.renderBookEmpty()}
      </div>
    )
  }
}

export default App