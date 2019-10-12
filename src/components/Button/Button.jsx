import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, isGoogleSignIn }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
