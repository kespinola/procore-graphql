import React from 'react';
import { connect } from 'react-redux';
import mapDispatch from './dispatch';
import { Chatbox } from './Chatbox';
import flyd from 'flyd';
const mapState = state => state;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.initStreams();
  }

  initStreams = () => {
    this.msg$ = flyd.stream();
    this.pm$ = flyd.stream();

    flyd.map(({ from, to, message }) => {
      console.log(from + ' => ' + to + ': ' + message);
      return null;
    }, this.msg$);

    flyd.map(({ from, message }) => {
      console.log(from + ' => ME: ' + message);
      return null;
    }, this.pm$);



    this.props.client.addListener('message', (from, to, message) => {
      this.pm$({from, to, message});
    });

    this.props.client.addListener('pm', (from, message) => {
      this.pm$({from, message});
    });
  };

  componentDidMount() {
    this.props.init();
  }

  render() {
    return <Chatbox channels={[{ name: 'world' }]} client={this.props.client} />;
  }
}


export default connect(mapState, mapDispatch)(App);
