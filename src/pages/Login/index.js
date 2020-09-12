import React from 'react';

import { Link } from 'react-router-dom';

import './styles.scss';
import logo from '../../assets/images/logo.png';

export default function Login() {
  //depois será implementado axios // handlesubmit
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <div className="p-login-container">
      <img className="p-login-logo" src={logo} alt="logo" />
      <div className="p-login-content">
        <p className="p-login-title">Faça seu login</p>

        <form className="p-login-form">
          <p className="p-login-subtitle">Email</p>
          <input
            type="email"
            required
            onChange={handleChange}
            placeholder="ex. name@gmail.com"
            className="p-login-input"
          />

          <div className="p-login-info">
            <p>Senha</p>
            <Link to="/forgetPassword">Esqueci minha senha</Link>
          </div>
          <input
            type="password"
            required
            onChange={handleChange}
            placeholder="*******"
            className="p-login-input"
          />

          <button type="submit">Login</button>
        </form>

        <div className="p-login-new">
          <p>Novo aqui?</p>
          <Link to="/signUp">Crie sua conta</Link>
        </div>
      </div>
    </div>
  );
}
