import './styles/app.global.css';

import React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import { Client } from 'irc';

import configureStore from './redux/utils/configureStore';
import { reducer as appReducer } from './redux/modules/app';
import App from './components/App.jsx';

const reducer = combineReducers({ app: appReducer });
const store = configureStore({}, reducer);

const client = new Client('localhost', 'fae', {
  userName: 'fae',
  realName: 'Faris Mustafa',
  port: 6667,
  debug: true,
  showErrors: true,
  channels: [],
  autoConnect: false,
});

render(
  <App store={store} client={client} />,
  document.getElementById('root')
);
