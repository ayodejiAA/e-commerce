import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './styles/index.scss';

const hats = () => <h1>Hi</h1>;

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={hats} />
    </Switch>
  </Router>
);

export default App;
