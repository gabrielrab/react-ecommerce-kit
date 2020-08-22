import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App.js';
import Index from './pages/Index';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/produto" exact component={App} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
