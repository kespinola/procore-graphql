import React from 'react';
import sagas from './sagas';
import { render } from 'react-dom';
import './app.global.css';
import sagaProvider from './sagaProvider';
import { reducer as appReducer } from './reducer';
import { Client } from 'irc';
import App from './App';

const client = new Client('localhost', 'fae', {
  userName: 'fae',
  realName: 'Faris Mustafa',
  port: 6667,
  debug: true,
  showErrors: true,
  channels: [],
  autoConnect: false,
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
  <SagaApp client={client} />,
  document.getElementById('root')
);
