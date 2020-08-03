import React, { useState } from 'react';

import { BsDash, BsPlus } from 'react-icons/bs';

import Layout from '../../components/Layout';
import Header from '../../components/Header';

import productImg from '../../assets/images/Product.png';
import cartIcon from '../../assets/icons/cart-white.svg';

import './styles.scss';

export default function Product() {
  const [quantity, setQuantity] = useState(1);

  function handleAddQuantity() {
    setQuantity(quantity + 1);
  }

  function handleReduceQuantity() {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  return (
    <>
      <div className="container">
        <Header />
      </div>

      <Layout>
        <div className="p-product-container">
          <div className="p-product-image">
            <img src={productImg} alt="produto" />
          </div>
          <div className="p-product-value">
            <h3>PRODUTO GENERICO TALTAL</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              euismod mattis aliquam. Donec velit nibh, interdum eget turpis et,
              iaculis vehicula justo
            </p>

            <div className="p-product-qty">
              <BsDash
                color="#3167eb"
                size={25}
                onClick={handleReduceQuantity}
              />
              <p>{quantity}</p>
              <BsPlus color="#3167eb" size={25} onClick={handleAddQuantity} />
            </div>

            <div className="p-product-button-div">
              <button className="p-product-button p-product-button-buy">
                COMPRAR
              </button>
              <button className="p-product-button p-product-button-cart">
                <img src={cartIcon} alt="cart icon" />
              </button>
            </div>
          </div>

          <div className="p-product-infos">
            <h3>DESCRIÇÃO</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              euismod mattis aliquam. Donec velit nibh, interdum eget turpis et,
              iaculis vehicula justo. Donec id dui et lacus auctor porttitor.
              Donec felis lorem, lobortis id ligula nec, porta faucibus purus.
              Aliquam erat volutpat. Quisque sed condimentum felis. Sed nulla
              massa, volutpat vitae mi sed, fermentum placerat magna. Ut
              consectetur felis eget arcu rhoncus, a vehicula tellus lobortis.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
