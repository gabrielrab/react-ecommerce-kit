import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import SearchHeader from '../Modal/SearchHeader';
import MenuHeader from '../Modal/MenuHeader';
import {
  BsHeart,
  BsPerson,
  BsBag,
  BsCaretDown,
  BsSearch,
  BsX,
} from 'react-icons/bs';

import './styles.scss';

function Header() {
  const [searchModal, setSearchModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);

  const handleChangeModalSearch = () => {
    setSearchModal(!searchModal);
  };
  const handleChangeModalMenu = () => {
    setMenuModal(!menuModal);
  };

  return (
    <>
      {menuModal === false ? (
        <> </>
      ) : (
        <>
          {' '}
          <MenuHeader />{' '}
        </>
      )}
      <header className="c-header-main">
        <div
          className={searchModal === false ? 'c-header-top' : 'c-header-top'}
        >
          {searchModal === false ? (
            <>
              <div className="c-header-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="c-header-search">
                <input type="text" placeholder="Pesquisar" />
                <div className="c-header-search-button">
                  <button type="submit">
                    <BsSearch size={20} />
                  </button>
                </div>
              </div>
              <div className="c-header-buttons">
                <button onClick={handleChangeModalSearch}>
                  <BsSearch color="#3167eb" size={20} />
                </button>
                <button onClick={handleChangeModalMenu}>
                  <div
                    className={
                      menuModal === true
                        ? 'c-header-buttons-div-menu-active'
                        : 'c-header-buttons-div-menu'
                    }
                  >
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </button>
                <button>
                  <BsBag color="#3167eb" size={20} />
                </button>
                <button>
                  <BsHeart color="#3167eb" size={20} />
                </button>
                <button>
                  <BsPerson color="#3167eb" size={20} />
                </button>
                <BsCaretDown className="c-header-buttons-last-svg" />
              </div>{' '}
            </>
          ) : (
            <>
              {' '}
              <SearchHeader />
              <button
                className="c-header-menu-header-button"
                onClick={handleChangeModalSearch}
              >
                <BsX />
              </button>{' '}
            </>
          )}
        </div>
        <div className="c-header-bottom">
          <span>Cadeiras</span>
          <span>Mesas</span>
          <span>Vestuario</span>
        </div>
      </header>
    </>
  );
}

export default Header;
