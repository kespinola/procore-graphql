// import { Client } from 'irc';
import React from 'react';
import { connect } from 'react-redux';
import mapDispatch from './dispatch';
import { Chatbox } from './Chatbox';

const mapState = (state) => {
  return state;
};

class App extends React.Component {

  componentDidMount() {
    this.props.init();
  }

  render() {
    return <Chatbox channels={[{ name: 'world '}]} />;
  }
}


export default connect(mapState, mapDispatch)(App);
