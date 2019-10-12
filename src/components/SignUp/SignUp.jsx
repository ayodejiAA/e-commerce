import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import SubmitButton from "../Button/SubmitButton";
import FormInput from "../FormInput/FormInput";
import "./SignUp.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {
      state: { displayName, email, password, confirmPassword }
    } = this;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
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

export default SignUp;
