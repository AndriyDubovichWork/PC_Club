import React from 'react';
import style from './Fotter.module.scss';
const Fotter = () => {
  const headers = ['PC CLUB', 'COMPANY', 'WORKING HOURS', 'SUBSCRIPTION'];

  return (
    <div className={style.Fotter}>
      {headers.map((header) => {
        return <h1>{header}</h1>;
      })}
      {headers.map((header) => {
        return <h1>{header}</h1>;
      })}
    </div>
  );
};

export default Fotter;
