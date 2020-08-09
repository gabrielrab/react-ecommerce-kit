import React from 'react';
import { Header, Layout, Alert, ProductDetail } from './components';

function App() {
  const productData = {
    name: 'Off-White Odsy-1000 Low-Top Sneakers',
    image:
      'http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/12.jpg',
    price: 18.99,
    shortDescription:
      'Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.',
    isAvaible: true,
    stock: 100,
  };
  return (
    <>
      <Header />
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
        <ProductDetail productData={productData} />
      </Layout>
    </>
  );
}

export default App;
