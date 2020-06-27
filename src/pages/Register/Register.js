import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import {
  RegisterForm,
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

const Register = props => {
  const {
    handleSubmit,
    login,
    errorLogin: errorRegister,
  } = props;

  console.log(useParams())
  const onSubmit = ({ username, password }) => {
    login(username, password);
  };

  return (
    <Wrapper>
      <RegisterForm>
        <Image src={LogoImage} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Field
              name="phoneNumber"
              component={Input}
              type="text"
              validate={[
                required,
                usernameMaxLength,
                usernameMinLength,
              ]}
              placeholder="Số điện thoại di động hoặc email"
            />
          </div>
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
              placeholder="Tên người dùng"
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
          <div className="form-group">
            <Field
              name="passwordConfirmation"
              component={Input}
              type="password"
              validate={[
                required,
                passwordMaxLength,
                passwordMinLength,
              ]}
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          {errorRegister && <span className="text-danger">{errorRegister}</span>}
          <Button type="submit" className="btn btn-default btn-block" href="index.html">Đăng kí</Button>
        </Form>
      </RegisterForm>
      <RegisterForm>
        <div>
          Bạn đã có tài khoản?
          <Link to="/"> Đăng nhập</Link>
        </div>
      </RegisterForm>
    </Wrapper>
  );
};

const createRegisterForm = reduxForm({ form: 'register' });
export default createRegisterForm(Register);
