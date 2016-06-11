// import { Client } from 'irc';
import React from 'react';
import { connect } from 'react-redux';
import mapDispatch from './dispatch';

const mapState = (state) => {
  return state;
};

class App extends React.Component {

  componentDidMount() {
    this.props.init();
  }

  render() {
    debugger;
    return null;
  }
}


export default connect(mapState, mapDispatch)(App);
