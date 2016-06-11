import { Client } from 'irc';
import React from 'react';
import { render } from 'react-dom';
import sagaProvider from '../src/sagaProvider';
import App from '../src/App';
import './app.global.css';
import { reducer as appReducer } from '../src/reducer';
import sagas from '../src/sagas';

const client = new Client('localhost', 'Makina', {
  userName: 'Makina',
  realName: 'Remy Younes',
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
const SagaApp = sagaProvider(
  {
    app: appReducer
  },
  sagas,
  App
);

render(
  <SagaApp />,
  document.getElementById('root')
);
