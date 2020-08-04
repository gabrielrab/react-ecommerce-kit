import React from 'react';
import './style.scss';

const Dropdown = (props) => {
  const { opts } = props;
  return (
    <>
      <div className="c-dropdown">
        <div className="c-dropdown-up">{props.children}</div>
        <div className="c-dropdown-content">
          <ul>
            {opts.map((i, index) => (
              <li key={index}>
                <a href={i.to}>{i.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
