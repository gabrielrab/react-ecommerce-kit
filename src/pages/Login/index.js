import React from 'react';

import './styles.scss';

export default function Login() {
  //depois será implementado axios // handlesubmit
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  return (
    <div className="p-login-container">
      <div className="p-login-content">
        <p className="p-login-title">Sign in</p>

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
            <p className="p-login-subtitle">Password</p>
            <a href="/">Forgot</a>
          </div>
          <input
            type="password"
            required
            onChange={handleChange}
            placeholder="*******"
            className="p-login-input"
          />

          <div className="p-login-checkbox">
            <input type="checkbox" className="p-input-checkbox" />
            <p>Remember</p>
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="p-login-new">
          <p>New here?</p>
          <a href="/">Sign up</a>
        </div>
      </div>
    </div>
  );
}
