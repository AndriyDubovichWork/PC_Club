import React from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import style from './Contact.module.scss';
import Banner from '../../Shared/Banner/Banner';

const Contact = () => {
  return (
    <>
      <main className={style.Contact}>
        <SubHeader title='Contact' />
      </main>
      <Banner />
    </>
  );
};

export default Contact;
