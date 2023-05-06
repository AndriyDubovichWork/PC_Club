import React from 'react';
import style from './PlanElem.module.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
type PlanElemPropsT = {
  title: string;
  subTitle: string;
  children: ReactJSXElement;
};

const PlanElem: React.FC<PlanElemPropsT> = ({ title, subTitle, children }) => {
  return (
    <div className={style.PlanElem}>
      {children}
      <h1>{title}</h1>
      <h3 className={style.subTitle}>{subTitle}</h3>
    </div>
  );
};

export default PlanElem;
