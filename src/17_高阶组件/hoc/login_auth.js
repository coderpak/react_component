import React from 'react'

function login_auth(OriginComponent) {
  return props => {
    const token = localStorage.getItem('token')
    if (token) {
      return <OriginComponent {...props}></OriginComponent>
    } else {
      return <h1>请先登录</h1>
    }
    
  }
}

export default login_auth