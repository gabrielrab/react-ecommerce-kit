import React from 'react';
import './style.scss';
import SearchBar from './Search';
import Dropdown from '../Dropdown';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';

const Header = (props) => {
  const optsList = [
    { text: 'Primeiro link', to: '/vai-carai' },
    { text: 'Segundo link', to: '/vai-carai2' },
  ];
  return (
    <header className="c-header">
      <div className="c-header-content">
        <div className="c-header-up">
          <img src={logo} alt="" />
          <div className="c-header-up-serch">
            {/* Fazer a serach bar receber os item da busca */}
            <SearchBar opts={optsList} />
            <div className="c-header-up-serch-actions">
              <Dropdown opts={optsList}>
                <FaUserAlt />
              </Dropdown>
              <Dropdown opts={optsList}>
                <FaShoppingCart />
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="c-header-options">
          <Dropdown opts={optsList}>Suplementos</Dropdown>
          <Dropdown opts={optsList}>Genéricos</Dropdown>
          <Dropdown opts={optsList}>Beleza</Dropdown>
          <Dropdown opts={optsList}>Energia</Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
