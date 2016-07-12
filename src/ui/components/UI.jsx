import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Root } from 'redux-react-local'

import sagaProvider from '../../decorators/sagaProvider.jsx'
import { actions, saga as appSaga } from '../../redux/modules/app'
import { saga as ircSaga } from '../../redux/modules/irc'
import Chatbox from './Chatbox'
import LoginPortal from './LoginPortal'

function* sagas() {
  yield* appSaga()
  yield* ircSaga()
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

@sagaProvider(sagas)
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
  }

  static defaultProps = {
  }

  componentDidMount() {
    this.props.actions.init()
  }

  render() {
    return (
      <Root>
        <div>
          <Chatbox />
          <LoginPortal />
        </div>
      </Root>
    )
  }

}
