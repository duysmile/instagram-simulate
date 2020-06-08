import React from 'react';

const InputTextField = ({
  input,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input className="form-control" {...input} type={type} />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default InputTextField;
