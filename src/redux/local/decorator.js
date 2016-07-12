import React, { PropTypes } from 'react'
import { local } from 'redux-react-local'
import camelcase from 'camelcase'

import { handleLocalActions } from './'

export default ({ ident, initial = {}, reducer = {}, thunks = {} }) => (Component) => {
  @local({
    ident,
    initial,
    reducer: handleLocalActions(reducer),
  })
  class Local extends React.Component {

    static propTypes = {
      $: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props)

      const { $, dispatch } = props

      this.actions = Object.keys(reducer).reduce((acc, type) => ({
        ...acc,
        [camelcase(type)]: (payload) => dispatch($({ type, payload })),
      }), {})

      this.thunks = Object.keys(thunks).reduce((acc, key) => ({
        ...acc,
        [key]: (payload) => dispatch(thunks[key](props, payload)),
      }), {})
    }

    render() {
      return (
        <Component ref="inner" {...this.props} actions={this.actions} thunks={this.thunks} />
      )
    }
  }

  return Local
}
