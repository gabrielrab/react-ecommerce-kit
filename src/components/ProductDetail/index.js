import React from 'react';
import './style.scss';
import { FaClipboardCheck } from 'react-icons/fa';
import { Alert, QtySelector, ShippingCalculator } from '../../components';

const ProductDetail = (props) => {
  // Quanto o produto não estiver disponível não calcular frete
  // Criar aba de preço após frete calculado (lembrar do tamanho e peso do produto)
  return (
    <section className="c-product-detail">
      <div className="c-product-detail-container-img">
        <img src={props.productData.image} alt={props.productData.name} />
      </div>
      <div className="c-product-detail-container-description">
        <h2>{props.productData.name}</h2>
        <p className="c-product-detail-description">
          {props.productData.shortDescription}
        </p>
        <p className="c-product-detail-status">
          {props.productData.isAvaible ? (
            <>
              <span className="c-product-detail-avaible">
                {' '}
                <FaClipboardCheck />
                Produto Disponível
              </span>{' '}
            </>
          ) : (
            <Alert type="danger" align="center">
              {' '}
              Infelizmente o estoque está vazio
            </Alert>
          )}
        </p>
        <span className="c-product-detail-price">
          ${props.productData.price}
        </span>
        {props.productData.isAvaible ? (
          <>
            <hr />
            <div className="c-product-detail-assets">
              <QtySelector maxstock={props.productData.stock} />
              <ShippingCalculator />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
