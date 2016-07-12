import React from 'react'
import uuid from 'uuid'

export default (Component) => {
  class UniqIdent extends React.Component {

    constructor(props) {
      super(props)

      this.id = uuid.v4()
    }

    render() {
      return (
        <Component ref="inner" {...this.props} ident={this.id} />
      )
    }

  }

  return UniqIdent
}
