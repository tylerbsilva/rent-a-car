import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// Import Root Reducer
import rootReducer from './reducers/index';

//const loggerMiddleware = createLogger();

// create an object for the default data
const defaultState = {
  rentals : {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: 0,
    metaData: {},
    currentData: [],
    error: false,
    errorMessage: ""
  }
}

const enhancers = compose(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  })
}

export default store;
