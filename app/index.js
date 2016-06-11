import React from 'react';
import sagas from './sagas';
import { render } from 'react-dom';
import './app.global.css';
import sagaProvider from './sagaProvider';
import { reducer as appReducer } from './reducer';
import App from './App';

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
