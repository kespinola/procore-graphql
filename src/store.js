/* global Procore */
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';

import defaultReducer from './reducer';

const state = {};
const logger = createLogger({
  stateTransformer: object => fromJS(object).toJS(),
  actionTransformer: object => fromJS(object).toJS(),
  collapsed: true,
  logErrors: false,
});

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
  logger,
)(createStore);

const configureStore = (initialState = state, reducer = defaultReducer) => {
  const store = createStoreWithMiddleware(reducer, initialState);
  return {
    ... store,
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
