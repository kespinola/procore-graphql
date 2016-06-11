import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './app.global.css';
import { Chatbox } from './Chatbox';

render(
  <Chatbox channels={[{ name: 'world' }, { name: 'guild' }]} />,
  document.getElementById('root')
);
