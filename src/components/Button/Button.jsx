import React from 'react';
import './Button.scss';

const Button = ({ children, handleClick, isGoogleSignIn }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    type="button"
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
