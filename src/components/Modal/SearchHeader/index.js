import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './styles.scss';

function SearchHeader() {
  return (
    <div className="c-modal-search-header">
      <input type="text" placeholder="Pesquisar" />
      <div className="c-modal-search-header-button">
        <button type="submit">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchHeader;
