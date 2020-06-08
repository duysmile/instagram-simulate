import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Wrapper, LoginForm } from './styles';
import InputTextField from 'components/InputText';
import {required} from 'validations/field-validation';
import {
  usernameMaxLength,
  usernameMinLength,
  passwordMaxLength,
  passwordMinLength,
} from 'validations/auth';
import {email} from "../../validations/field-validation";

const Register = props => {
  const {
    handleSubmit,
    register,
    isFetching,
      errorRegister,
  } = props;

  const onSubmit = ({ username, password, email }) => {
    register(username, password, email);
  };

  return (
      <Wrapper>
        <div className="bg_image h-100">
          <div className="lr_wrap">
            <div className="card-body">
              <div className="lr_icon text-center">
                <img src="images/logo_icon.png" alt="logo"/>
              </div>
              <h6 className="my-4 text-center text-uppercase">Welcome to XBStation</h6>
              <LoginForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Field
                        className="form-control"
                        name="username"
                        component={InputTextField}
                        type="text"
                        placeholder="Enter Your Name"
                        validate={[
                          required,
                          usernameMaxLength,
                          usernameMinLength,
                        ]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                        className="form-control"
                        name="email"
                        component={InputTextField}
                        type="text"
                        placeholder="Enter Your Name"
                        validate={[
                          required,
                          usernameMaxLength,
                          usernameMinLength,
                        ]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                        className="form-control"
                        name="password"
                        component={InputTextField}
                        type="password"
                        placeholder="Enter Your Name"
                        validate={[
                          required,
                          usernameMaxLength,
                          usernameMinLength,
                        ]}
                    />
                  </div>
                <div className="form-group">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" required/> I agree to Terms & Pollicy.</label>
                  </div>
                </div>
                    {errorRegister && <span className="text-danger">{errorRegister}</span>}
                <button type="submit" className="btn btn-default btn-block">Sign Up</button>
              </form>
              </LoginForm>
              <div className="text-center mt-3">
                <span className="small">Already have an account? <a href="/login">Login</a></span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
  );
};

const createRegisterForm = reduxForm({ form: 'register' });
export default createRegisterForm(Register);
