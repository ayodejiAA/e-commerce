import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import SubmitButton from '../Button/SubmitButton';
import Button from '../Button/Button';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/userActions';

import './SignIn.scss';

const SignIn = ({ signInWithGoogle, signInWithEmailAndPassword }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInWithEmailAndPassword({ email, password });
  };

  const handleChange = (event) => {
    const {
      target: { name, value }
    } = event;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an acoount</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
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
};

const mapDispatchToProps = {
  signInWithGoogle: googleSignInStart,
  signInWithEmailAndPassword: emailSignInStart
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
