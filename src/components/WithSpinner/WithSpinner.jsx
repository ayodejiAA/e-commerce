/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './WithSpinner.scss';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );

export default WithSpinner;
