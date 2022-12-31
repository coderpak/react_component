import React, { PureComponent } from 'react'

function log_render_time(OriginComponent) {

  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.startTime = new Date().getTime()
    }
    componentDidMount() {
      this.endTime = new Date().getTime()
      console.log(`渲染${OriginComponent.name}用时${this.endTime - this.startTime}ms`)
    }
    render() {
      return <OriginComponent {...this.props} />
    }
  }
}

export default log_render_time