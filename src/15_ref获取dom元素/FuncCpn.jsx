import React, { forwardRef } from 'react'

const FuncCpn = forwardRef((props, ref) => {
  return (
    <div>
      <h1 ref={ref}>FuncCpn</h1>
    </div>
  )
})


export default FuncCpn