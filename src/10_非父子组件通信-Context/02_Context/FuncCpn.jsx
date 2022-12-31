import MyContext from "../MyContext"

function FuncCpn() {
  return (
    <div>
      <div>FuncCpn</div>
      <MyContext.Consumer>
        {
          value => {
            return <p>{value.name}, {value.age}</p>
          }
        }
      </MyContext.Consumer>
    </div>
  )
}
export default FuncCpn