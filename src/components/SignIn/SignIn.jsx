import React, { Component } from "react";
import {signInWithGoogle} from '../../firebase/firebase'
import FormInput from '../FormInput/FormInput'
import SubmitButton from '../Button/SubmitButton'
import Button from '../Button/Button';
import "./SignIn.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ""})
;  };

  handleChange = () => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an acoount</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
          <SubmitButton>Sign In</SubmitButton>
          <Button handleClick={signInWithGoogle} isGoogleSignIn>Sign in with google</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
