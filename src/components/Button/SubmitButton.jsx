import React from 'react';
import './Button.scss';

const SubmitButton = ({ children }) => (
  <button className="custom-button" type="submit">
    {children}
  </button>
);

export default SubmitButton;
