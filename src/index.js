import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store, { persistor } from './redux/store';
import './assets/images/favicon.ico';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  root
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept();
}
