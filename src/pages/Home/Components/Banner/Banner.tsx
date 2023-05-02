import React from 'react';
import style from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={style.Banner}>
      <h1 className={style.Title}>Save big with our cheap PC Club</h1>
      <h3 className={style.subTitle}>
        Top PCs. Global Suppliers.
        <span className={style.HighLighted}> 24/7</span> Support.
      </h3>
    </div>
  );
};

export default Banner;
