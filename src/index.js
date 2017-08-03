import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';
import {reducers} from './pages';
import Navigation from './pages/Navigation';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const initStore = (reducers, state) => {
  return createStore(reducers, state, compose(
    applyMiddleware(thunk),
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