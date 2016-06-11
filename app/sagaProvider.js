import React from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store';

export const bootstrap = (reducer = {}, sagaOrComponent, Component = false) => {
  const store = configureStore({}, combineReducers(reducer));
  const Wrapped = Component || sagaOrComponent;

  if (Component) {
    store.runSaga(sagaOrComponent, { getState: store.getState });
  }

  return class Bootstrapped extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Wrapped {...this.props} />
        </Provider>
      );
    }
  };
};

export default bootstrap;
