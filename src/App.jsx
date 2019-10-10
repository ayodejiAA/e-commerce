import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import './styles/index.scss';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
    </Switch>
  </Router>
);

export default App;
