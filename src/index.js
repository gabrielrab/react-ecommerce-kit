import React from 'react';
import './global.scss';
import ReactDOM from 'react-dom';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
