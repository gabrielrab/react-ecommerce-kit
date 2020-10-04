import React from 'react';
import './style.scss';

const ShippingCalculator = () => {
  return (
    <div className="c-shipping-calculator">
      Calcule o frete:
      <input placeholder="Digite o cep" name="cep-number" />
    </div>
  );
};

export default ShippingCalculator;
