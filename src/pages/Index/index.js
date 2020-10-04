import React from 'react';

import { Header, Layout, Banner, Card } from '../../components';

import './styles.scss';

export default function Index() {
  const productData = {
    name: 'Dipirona em gotas 20ml',
    image:
      'https://lh3.googleusercontent.com/proxy/_EET_a8m2mj_CRbSeNPufS4-LS8eENAkw_yp_AXgmY7Yisf_0kqqvUM0yOPz_NC0-G_Al6xiDYL12qWXVppW6jYfwR0XBxyvFcUsQ4On8d_HDzfUtXzP-uM0Ug',
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
            to="/produto"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/produto"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/produto"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/produto"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/produto"
          />
          <Card
            name={productData.name}
            image={productData.image}
            price={productData.price}
            to="/produto"
          />
        </div>
      </Layout>
    </>
  );
}
