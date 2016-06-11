import { Client } from 'irc';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './app.global.css';

const client = new Client('localhost', 'fae', {
  userName: 'fae',
  realName: 'Faris Mustafa',
  port: 6667,
  debug: true,
  showErrors: true,
  channels: [],
  autoConnect: false,
});

client.addListener('message', (from, to, message) => {
  console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('pm', (from, message) => {
  console.log(from + ' => ME: ' + message);
});

client.connect(1, () => {
  setTimeout(() => {
    client.join('#test2');
    // client.list();
  }, 2000);
});

// const store =

const App = (props) => {
  return (
    <Provider store={store}>
      <div />
    </Provider>
  );
};

render(
  // <App />,
  <div />,
  document.getElementById('root')
);
