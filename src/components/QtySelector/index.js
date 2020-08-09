import React, { useState } from 'react';
import './style.scss';

const QtySelector = (props) => {
  const [qty, setQty] = useState(1);

  const handleQtyUp = () => {
    if (qty < props.maxstock) {
      setQty(qty + 1);
    }
  };
  const handleQtyDown = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  return (
    <div className="c-qty-selector">
      Selecione a quantidade:
      <div className="c-qty-selector-content">
        <button onClick={handleQtyDown} className="c-qty-selector-right">
          -
        </button>
        {qty}
        <button onClick={handleQtyUp} className="c-qty-selector-left">
          +
        </button>
      </div>
    </div>
  );
};

export default QtySelector;
