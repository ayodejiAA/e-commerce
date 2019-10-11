import React from 'react';
import './FormInput.scss';

const FormInput = ({
  handleChange, type, label, name, value, required
}) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      name={name}
      value={value}
      type={type}
      required={required}
    />
    {
      label ? (
        <label
          htmlFor={`${label}`}
          className={`${value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )
        : null
    }
  </div>
);

export default FormInput;
