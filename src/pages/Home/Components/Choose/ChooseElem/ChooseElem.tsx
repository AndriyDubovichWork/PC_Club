import React from 'react';
import style from './ChooseElem.module.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

type ChooseElemPropsT = {
  title: string;
  subTitle: string;
  children: ReactJSXElement;
};

const ChooseElem: React.FC<ChooseElemPropsT> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <div className={style.ChooseElem}>
      {children}
      <div className={style.Text}>
        <h1 className={style.Title}>{title}</h1>
        <h3 className={style.subTitle}>{subTitle}</h3>
      </div>
    </div>
  );
};

export default ChooseElem;
