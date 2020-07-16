import React from 'react';
import './style.scss';

const Layout = (props) => {
  return (
    <main>
      <section>{props.children}</section>
    </main>
  );
};

export default Layout;
