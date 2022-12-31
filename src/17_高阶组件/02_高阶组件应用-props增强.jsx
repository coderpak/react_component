import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_props'
import  About  from './pages/About'

const Home = enhancedUserInfo(function(props) {
    console.log('Home', props)
    return <h1>Home: {props.name} ---- {props.level} ---- {props.message}</h1>
})

const Profile = enhancedUserInfo(function(props) {
  console.log('profile', props)
  return <h1>profile: {props.name} ---- {props.level} ---- {props.message}</h1>
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Home message='hello home'></Home>
        <Profile message='hello profile'></Profile>
        <About></About>
      </div>
    )
  }
}

export default App