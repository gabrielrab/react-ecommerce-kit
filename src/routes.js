import React from 'react';

import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';

import Landing from './Pages/Landing';
import Product from './Pages/Product';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <HashRouter>
          <Route path="/" exact component={Landing} />
          <Route path="/product" exact component={Product} />
        </HashRouter>
      </Switch>
    </BrowserRouter>
  );
}
