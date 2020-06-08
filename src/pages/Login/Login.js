import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { LoginForm } from './styles';
import InputTextField from 'components/InputText';
import {required} from 'validations/field-validation';

import {
  usernameMaxLength,
  usernameMinLength,
  passwordMaxLength,
  passwordMinLength,
} from 'validations/auth';
import {useParams} from "react-router-dom";

const Login = props => {
  const {
    handleSubmit,
    login,
    isFetching,
    errorLogin,
    isRegisterSuccess
  } = props;

  console.log(useParams())
  const onSubmit = ({ username, password }) => {
    login(username, password);
  };

  return (
      <div className="bg_image h-100">
        <div className="lr_wrap">
          <div className="card-body">
            <LoginForm>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Field
                      name="username"
                      component={InputTextField}
                      type="text"
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
                      name="password"
                      component={InputTextField}
                      type="password"
                      validate={[
                        required,
                        passwordMaxLength,
                        passwordMinLength,
                      ]}
                  />
                </div>
                {errorLogin && <span className="text-danger">{errorLogin}</span>}
              <button type="submit" className="btn btn-default btn-block" href="index.html">Login</button>
            </form>
              </LoginForm>
            <div className="text-center mt-3 justify-content-between d-md-flex">
              <a className="d-block small" href="/register">Register an Account</a>
            </div>
          </div>
        </div>
      </div>
  );
};

const createLoginForm = reduxForm({ form: 'login' });
export default createLoginForm(Login);
