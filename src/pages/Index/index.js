import React from 'react';

import { Header, Layout, Banner, Card } from '../../components';

import './styles.scss';

export default function Index() {
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
        <Banner />
        <div className="p-index-products">
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/link"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/link"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/link"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/link"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/link"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/link"
          />
        </div>
      </Layout>
    </>
  );
}
