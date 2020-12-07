import 'babel-polyfill';
import _reset from 'reset-css'; // eslint-disable-line
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import rootSaga from './sagas/index';
import configureStore from './store/configureStore';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
