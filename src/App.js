import React from 'react';
import Layout from './components/Layout';
import Alert from './components/Alerts';

function App() {
  return (
    <>
      <Layout>
        <h1>Header h1</h1>
        <h2>Header h2</h2>
        <h3>Header h3</h3>
        <div>
          <label>Alerts</label>
          <Alert>Mensagem simples de alerta</Alert>
          <Alert type="gray" align="center">
            Mensagem simples de alerta
          </Alert>
          <Alert type="success" align="left">
            Mensagem simples de alerta
          </Alert>
          <Alert type="danger" align="rigth">
            Mensagem simples de alerta
          </Alert>
          <Alert type="warning">Mensagem simples de alerta</Alert>
          <Alert type="ligth-green">Mensagem simples de alerta</Alert>
        </div>
      </Layout>
    </>
  );
}

export default App;
