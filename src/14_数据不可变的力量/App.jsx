import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        { name: "你不知道JS", price: 99, count: 1 },
        { name: "JS高级程序设计", price: 88, count: 1 },
        { name: "React高级设计", price: 78, count: 2 },
        { name: "Vue高级设计", price: 95, count: 3 },
      ],
      friend: {
        name: "kobe"
      },
      message: "Hello World"
    }
  }
  addBook() {
    // 错误用法
    // this.state.books.push({ name: 'java入门到入土', price: 53, count: 2 })
    // this.setState({books: this.state.books})

    /*
      数据不可变的力量： 必须保证state里的数据是不可以改变的
      如果需要改变，那么必须把整个对象都修改掉
      原因： PureComponent实现 shouldComponentUpdate 方法时用的是浅层比较
    */ 
    // 正确用法：重新赋值新对象 
    const newBooks = [...this.state.books]
    newBooks.push({ name: 'java入门到入土', price: 53, count: 2 })
    this.setState({books: newBooks})
  }

  addBookCount(index) {
    // 错误用法 深层的改变也需要重新改变整个对象
    // this.state.books[index].count ++
    // this.setState({books: this.state.books})

    // 正确用法：
    const newBooks = [...this.state.books]
    newBooks[index].count ++
    this.setState({books: newBooks})
  }

  render() {
    const { books } = this.state
    return (
      <div>
        <ul>
          {
            books.map((item, index) => {
              return (
                <li key={index}>
                  <span>name: {item.name} - price: {item.price} - count: {item.count}</span>
                  <button onClick={e => this.addBookCount(index)}>+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.addBook()}>添加新书籍</button>
      </div>
    )
  }
}

export default App