import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './search.scss';

const Search = (props) => {
  const [openOpts, setOpts] = useState(false);

  const handleOpts = (e) => {
    e.preventDefault();
    if (!e.target.value || e.target.value === '') {
      setOpts(false);
    } else {
      setOpts(true);
    }
  };

  const { opts } = props;
  return (
    <>
      <label className="c-search">
        <input
          placeholder="Digite aqui oque você procura"
          name="c-search"
          onChange={handleOpts}
        />
        <button className="c-search-btn">
          <BsSearch />
        </button>
        {openOpts ? (
          <div className="c-search-drop-items">
            <ul>
              {opts && opts.length > 1 ? (
                opts.map((i, index) => (
                  <li key={index}>
                    <a href={i.to}>{i.text}</a>
                  </li>
                ))
              ) : (
                <li>Nenhum resultado encontrado</li>
              )}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </label>
    </>
  );
};

export default Search;
