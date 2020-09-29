import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App.js';
import Index from './pages/Index';
import Product from './pages/Product';
import Login from './pages/Login';
import ForgetPass from './pages/ForgetPass';
import SignUp from './pages/SignUp';
import RecoverPass from './pages/RecoverPass';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/produto" exact component={Product} />
          <Route path="/app" exact component={App} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgetPassword" exact component={ForgetPass} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/recoverPassword" exact component={RecoverPass} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
