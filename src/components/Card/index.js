import React from 'react';
import './style.scss';
import { FaShoppingCart } from 'react-icons/fa';
import useHover from '../../hooks/useHover';

const Card = (props) => {
  const [hoverRef, isHovered] = useHover();
  return (
    <a href={props.to}>
      <div className="c-card" ref={hoverRef}>
        <img src={props.image} alt={props.name} />
        <hr />
        <div className="c-card-content">
          <p className="c-card-name">{props.name}</p>
          {!isHovered ? (
            <p className="c-card-price">$ {props.price}</p>
          ) : (
            <button className="c-card-button">
              <FaShoppingCart /> Adicionar a carrinho
            </button>
          )}
        </div>
      </div>
    </a>
  );
};

export default Card;
