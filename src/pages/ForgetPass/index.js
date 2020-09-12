import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logo from '../../assets/images/logo.png';

export default function ForgetPass() {
  //depois será implementado axios // handlesubmit
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <div className="p-forgetPass-container">
      <img className="p-forgetPass-logo" src={logo} alt="logo" />
      <div className="p-forgetPass-content">
        <div className="p-forgetPass-top">
          <p className="p-forgetPass-title">Esqueceu sua senha?</p>
          <p className="p-forgetPass-subtitle">
            Informe seu email cadastrado e receba as informações de como
            recuperar sua senha!
          </p>
        </div>

        <form className="p-forgetPass-form">
          <p className="p-forgetPass-subtitle">Email</p>
          <input
            type="email"
            required
            onChange={handleChange}
            placeholder="ex. name@gmail.com"
            className="p-forgetPass-input"
          />

          <button type="submit">Enviar</button>
        </form>

        <div className="p-login-new">
          <p>Novo aqui?</p>
          <Link to="/signUp">Crie sua conta</Link>
        </div>
      </div>
    </div>
  );
}
