import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <div className="login__link"></div>
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <AuthForm title={['E-mail', 'Пароль']} buttonText="Войти">
          <div className="auth__button-info">
            <p className="auth__text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="auth__link">
              Регистрация
            </Link>
          </div>
        </AuthForm>
      </div>
    </section>

  );
}

export default Login;
