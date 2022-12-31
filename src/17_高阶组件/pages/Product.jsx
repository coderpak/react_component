import React, { PureComponent } from 'react'
import ThemeContext from '../context/theme_context'
import withTheme from '../hoc/with_theme'

// export class Product extends PureComponent {
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>Product :</h1>
//         <ThemeContext.Consumer>
//           {
//             value => {
//               return <h2>{value.color}-----{value.size}</h2>
//             }
//           }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

export class Product extends PureComponent { 
  render() {
    console.log(this.props)
    return <h1>profile ----- {this.props.color}</h1>
  }
}

export default withTheme(Product)