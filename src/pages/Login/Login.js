import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  LoginForm,
  Wrapper,
  Image,
  Form,
  Input,
  Button,
} from './styles';
import { required } from 'validations/field-validation';
import LogoImage from 'assets/images/logo.png';

import {
  usernameMaxLength,
  usernameMinLength,
  passwordMaxLength,
  passwordMinLength,
} from 'validations/auth';
import { useParams } from "react-router-dom";

const Login = props => {
  const {
    handleSubmit,
    login,
    errorLogin,
  } = props;

  console.log(useParams())
  const onSubmit = ({ username, password }) => {
    login(username, password);
  };

  return (
    <Wrapper>
      <LoginForm>
        <Image src={LogoImage} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Field
              name="username"
              component={Input}
              type="text"
              validate={[
                required,
                usernameMaxLength,
                usernameMinLength,
              ]}
              placeholder="Số điện thoại, tên người dùng hoặc email"
            />
          </div>
          <div className="form-group">
            <Field
              name="password"
              component={Input}
              type="password"
              validate={[
                required,
                passwordMaxLength,
                passwordMinLength,
              ]}
              placeholder="Mật khẩu"
            />
          </div>
          {errorLogin && <span className="text-danger">{errorLogin}</span>}
          <Button type="submit" className="btn btn-default btn-block" href="index.html">Đăng nhập</Button>
        </Form>
      </LoginForm>
      <LoginForm>
        <div>
          Bạn không có tài khoản?
          <a href="#"> Đăng kí</a>
        </div>
      </LoginForm>
    </Wrapper>
  );
};

const createLoginForm = reduxForm({ form: 'login' });
export default createLoginForm(Login);
