import React from 'react';

import './styles.scss';
import logo from '../../assets/images/logo.png';

export default function RecoverPass() {
  //depois será implementado axios // handlesubmit
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <div className="p-recoverPass-container">
      <img className="p-recoverPass-logo" src={logo} alt="logo" />
      <div className="p-recoverPass-content">
        <div className="p-recoverPass-top">
          <p className="p-recoverPass-title">Digite sua nova senha</p>
          <p className="p-recoverPass-subtitle">
            Lembre-se sua senha é algo confidencial, não compartilhe-a com
            outras pessoas!
          </p>
        </div>

        <form className="p-recoverPass-form">
          <p className="p-recoverPass-subtitle">Senha</p>
          <input
            type="password"
            required
            onChange={handleChange}
            placeholder="******"
            className="p-recoverPass-input"
          />

          <p className="p-recoverPass-subtitle">Repetir senha</p>
          <input
            type="password"
            required
            onChange={handleChange}
            placeholder="******"
            className="p-recoverPass-input"
          />

          <button type="submit">Alterar senha</button>
        </form>
      </div>
    </div>
  );
}
