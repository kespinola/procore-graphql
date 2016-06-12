import { identity } from 'ramda';
import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import ensureFSAMiddleware from '@meadow/redux-ensure-fsa';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger({
    stateTransformer: object => fromJS(object).toJS(),
    actionTransformer: object => fromJS(object).toJS(),
    collapsed: true,
    logErrors: false,
  });

  const fsaMiddleware = ensureFSAMiddleware({
    ignore: (action) => {
      return false;
    }
  });

  middleware = [...middleware, loggerMiddleware, fsaMiddleware];
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const configureStore = (initialState = {}, reducer = identity) => {
  const store = createStoreWithMiddleware(reducer, initialState);

  return {
    ... store,
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
