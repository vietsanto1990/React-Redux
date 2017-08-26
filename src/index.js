import 'babel-polyfill';
import 'rxjs';
import React from 'react';
import Navigation from './pages/Navigation';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { reducers, epics } from './pages';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(epics);

const initStore = (reducers, state) => {
  return createStore(reducers, state, compose(
    applyMiddleware(epicMiddleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
};

const store = initStore(reducers, window.__INITIAL_STATE__);

render(
  <Provider store={store}>
    <Navigation />
  </Provider>,
  document.getElementById('root')
);