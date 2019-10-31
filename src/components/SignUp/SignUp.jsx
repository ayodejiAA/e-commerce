import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from '../Button/SubmitButton';
import FormInput from '../FormInput/FormInput';
import { signUpStart } from '../../redux/user/userActions';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = (event) => {
    const {
      target: { value, name }
    } = event;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { createUser } = this.props;
    const {
      state: { displayName, email, password, confirmPassword }
    } = this;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    createUser({ displayName, email, password });
  };

  render() {
    const {
      state: { displayName, email, password, confirmPassword }
    } = this;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />
          <SubmitButton>Sign Up</SubmitButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createUser: signUpStart
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
