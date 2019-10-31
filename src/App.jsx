import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import Checkout from './pages/Checkout/Checkout';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';

import { checkUserSession as checkUserSessionAction } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import './styles/index.scss';

class App extends Component {
  componentDidMount = () => {
    const { checkUserSession } = this.props;
    checkUserSession();
  };

  render() {
    const { currentUser } = this.props;
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = {
  checkUserSession: checkUserSessionAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
