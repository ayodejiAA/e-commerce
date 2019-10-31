import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { auth, signInWithGoogle } from '../../firebase/firebase';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../Button/SubmitButton';
import Button from '../Button/Button';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userActions';

import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { signInWithEmailAndPassword } = this.props;

    signInWithEmailAndPassword({ email, password });
  };

  handleChange = (event) => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { signInWithGoogle } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an acoount</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <SubmitButton>Sign In</SubmitButton>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signInWithGoogle: googleSignInStart,
  signInWithEmailAndPassword: emailSignInStart
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
