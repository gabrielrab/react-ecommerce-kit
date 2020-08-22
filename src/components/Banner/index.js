import React from 'react';

import './styles.scss';

import imageBanner from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <div className="c-banner-container">
      <img src={imageBanner} alt="banner" />
    </div>
  );
};

export default Banner;
