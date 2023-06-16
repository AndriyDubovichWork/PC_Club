import React from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import style from './Computers.module.scss';
import Greeting from '../../Shared/Greeting/Greeting';
import BookPC from '../../Shared/BookPC/BookPC';
import Banner from '../../Shared/Banner/Banner';

const Computers = () => {
  return (
    <>
      <main className={style.Computers}>
        <SubHeader title='Computers' />
        <Greeting />
        <BookPC />
      </main>
      <Banner />
    </>
  );
};

export default Computers;
