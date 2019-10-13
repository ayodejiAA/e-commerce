import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import setCurrentUser from './redux/user/userActions';
import './styles/index.scss';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
       
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(authUser);
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
