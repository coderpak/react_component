import React from 'react'

// 提供的default值可以在 RootContext.Provide 组件之外的后代组件也可以访问到
const RootContext = React.createContext({defaultToken: 'this is default Token'})

export default RootContext