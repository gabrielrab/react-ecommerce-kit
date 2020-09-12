import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logo from '../../assets/images/logo.png';

export default function SignUp() {
  //depois será implementado axios // handlesubmit
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <div className="p-signUp-container">
      <img className="p-signUp-logo" src={logo} alt="logo" />
      <div className="p-signUp-content">
        <div className="p-signUp-top">
          <p className="p-signUp-title">Novo aqui?</p>
          <p className="p-signUp-subtitle">
            Crie sua conta e aproveite os melhores preços!
          </p>
        </div>

        <form className="p-signUp-form">
          <div className="p-signUp-name">
            <div className="p-signUp-div">
              <p className="p-signUp-subtitle">Nome</p>
              <input
                type="email"
                required
                onChange={handleChange}
                placeholder="João"
                className="p-signUp-input"
              />
            </div>
            <div className="p-signUp-div">
              <p className="p-signUp-subtitle">Sobrenome</p>
              <input
                type="email"
                required
                onChange={handleChange}
                placeholder="Rodrigues"
                className="p-signUp-input"
              />
            </div>
          </div>
          <p className="p-signUp-subtitle">Email</p>
          <input
            type="email"
            required
            onChange={handleChange}
            placeholder="ex. name@gmail.com"
            className="p-signUp-input"
          />
          <div className="p-signUp-name">
            <div className="p-signUp-div">
              <p className="p-signUp-subtitle">Senha</p>

              <input
                type="email"
                required
                onChange={handleChange}
                placeholder="*******"
                className="p-signUp-input"
              />
            </div>

            <div className="p-signUp-div">
              <p className="p-signUp-subtitle">Repetir Senha</p>

              <input
                type="email"
                required
                onChange={handleChange}
                placeholder="*******"
                className="p-signUp-input"
              />
            </div>
          </div>
          <button type="submit">Criar conta</button>

          <div className="p-login-new">
            <p>Já possuí uma conta?</p>
            <Link to="/login">Faça Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
