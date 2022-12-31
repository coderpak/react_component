import { memo } from 'react'

// memo 跟pureComponent功能相同
const FuncCpn = memo(function(props) {
  console.log('func render')
  return (
    <h1>FuncCpn { props.message }</h1>
  )
})

export default FuncCpn