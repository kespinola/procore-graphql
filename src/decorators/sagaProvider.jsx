import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

export default (sagas) => (Component) => {
  class SagaProvider extends React.Component {

    static propTypes = {
      store: PropTypes.object,
    }

    constructor(props) {
      super(props)

      props.store.runSaga(sagas, {
        getState: props.store.getState,
        dispatch: props.store.dispatch,
      })
    }

    render() {
      const { store, ...props } = this.props

      return (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      )
    }

  }

  return SagaProvider
}
