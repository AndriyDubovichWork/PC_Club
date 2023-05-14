import React from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import style from './Reviews.module.scss';
import Testimonials from './Testimonials/Testimonials';
import Banner from '../../Shared/Banner/Banner';

const Reviews = () => {
  return (
    <>
      <main className={style.Reviews}>
        <SubHeader title='Reviews' />
        <Testimonials />
      </main>
      <Banner />
    </>
  );
};

export default Reviews;
