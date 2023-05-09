import React from 'react';
import stylesLogin from '../../styles/Login.module.scss';
import stylesForm from '../../styles/Forms.module.scss';
import { Input, createField } from '../Forms/Forms';
import { Field, reduxForm } from 'redux-form';

const LoginForm = () => {
  return (
    <div className={stylesLogin.loginWrapper}>
      <form>
        {createField('Номер телефона/Почта', Input, 'email')}
        {createField('Пароль', Input, 'password',{type: 'password'})}
        <div className={stylesLogin.rememberMe}>
          <Field name={'rememberMe'} type={'checkbox'} component={Input} />
          <div>запомнить</div>
        </div>
        <button className={stylesForm.button}>Войти</button>
      </form>
    </div>
  );
};
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);
const Login = () => {
  return (
    <div>
      <LoginReduxForm />
    </div>
  );
};

export default Login;
