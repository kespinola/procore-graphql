import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import sagas from '../redux/sagas';
import sagaProvider from '../decorators/sagaProvider.jsx';
import { actions } from '../redux/modules/app';
import { Chatbox } from './Chatbox';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

@sagaProvider(sagas)
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
  }

  componentDidMount() {
    this.props.actions.init();
  }

  render() {
    return <Chatbox channels={[{ name: 'world' }]} />;
  }

}
