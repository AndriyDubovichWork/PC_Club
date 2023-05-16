import React from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import style from './Reviews.module.scss';
import Banner from '../../Shared/Banner/Banner';
import Testimonials from '../../Shared/Testimonials/Testimonials';

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
