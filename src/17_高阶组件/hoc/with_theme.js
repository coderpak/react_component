import ThemeContext from "../context/theme_context"

function withTheme(WrapperComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {
          value => {
            return <WrapperComponent {...value} {...props} />
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default withTheme