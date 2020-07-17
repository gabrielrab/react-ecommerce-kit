import React from 'react';
import { BsHeart, BsPerson, BsBag } from 'react-icons/bs';

import './styles.scss';
function MenuHeader() {
  return (
    <div className="c-modal-menu-header">
      <button>
        <div className="c-modal-menu-header-button">
          <BsBag color="#3167eb" size={20} />
          <p>Minha Sacola</p>
        </div>
      </button>
      <button>
        <div className="c-modal-menu-header-button">
          <BsHeart color="#3167eb" size={20} />
          <p>Favoritos</p>
        </div>
      </button>
      <button>
        <div className="c-modal-menu-header-button">
          <BsPerson color="#3167eb" size={20} />
          <p>Minha Conta</p>
        </div>
      </button>
    </div>
  );
}

export default MenuHeader;
