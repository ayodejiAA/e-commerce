import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './assets/images/favicon.ico';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept();
}
