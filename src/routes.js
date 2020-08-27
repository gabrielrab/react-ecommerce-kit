import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App.js';
import Index from './pages/Index';
import Login from './pages/Login';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/produto" exact component={App} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
