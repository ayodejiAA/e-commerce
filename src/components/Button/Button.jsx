import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, isGoogleSignIn, inverted }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
