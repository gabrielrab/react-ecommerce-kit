import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './search.scss';

const Search = () => {
  return (
    <>
      <label className="c-search">
        <input placeholder="Digite aqui oque você procura" />
        <button className="c-search-btn">
          <BsSearch />
        </button>
      </label>
    </>
  );
};

export default Search;
