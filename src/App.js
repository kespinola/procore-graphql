import React from 'react';
import { connect } from 'react-redux';
import mapDispatch from './dispatch';
import { Chatbox } from './Chatbox';
const mapState = state => state;

class App extends React.Component {

  render() {
    return <Chatbox channels={[{ name: 'world' }]} />;
  }

}


export default connect(mapState, mapDispatch)(App);
