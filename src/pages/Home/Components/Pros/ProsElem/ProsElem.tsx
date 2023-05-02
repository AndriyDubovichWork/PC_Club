import React from 'react';
import style from './ProsElem.module.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
type ProsElemPropsT = {
  title: string;
  subTitle: string;
  children: ReactJSXElement;
};

const ProsElem: React.FC<ProsElemPropsT> = ({ title, subTitle, children }) => {
  return (
    <div className={style.ProsElem}>
      {children}
      <h1>{title}</h1>
      <h3 className={style.subTitle}>{subTitle}</h3>
    </div>
  );
};

export default ProsElem;
