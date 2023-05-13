import React from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import style from './Reviews.module.scss';
import Testimonials from './Testimonials/Testimonials';

const Reviews = () => {
  return (
    <main className={style.Reviews}>
      <SubHeader title='Reviews' />
      <Testimonials />
    </main>
  );
};

export default Reviews;
