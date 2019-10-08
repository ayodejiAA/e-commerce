import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/images/favicon.ico';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept();
}
