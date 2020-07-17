import React from 'react';
import './style.scss';
import SearchBar from './Search';
const Header = (props) => {
  return (
    <>
      <header className="c-header">
        <div className="c-header-content">
          <div className="c-header-up">
            <h2>LOGO CMPY</h2>
            <div className="c-header-up-serch">
              {/* Fazer a serach bar receber os item da busca */}
              <SearchBar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
