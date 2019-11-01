import React, { useState } from 'react';
import { connect } from 'react-redux';
import SubmitButton from '../Button/SubmitButton';
import FormInput from '../FormInput/FormInput';
import { signUpStart } from '../../redux/user/userActions';
import './SignUp.scss';

const SignUp = ({ createUser }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const {
      target: { value, name }
    } = event;
    setCredentials({ ...userCredentials, [name]: value });
  };
  
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    createUser({ displayName, email, password });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
          required
        />
        <SubmitButton>Sign Up</SubmitButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createUser: signUpStart
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
