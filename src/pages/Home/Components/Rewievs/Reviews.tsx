import React from 'react';
import style from './Reviews.module.scss';
import Testimonial from './Testimonial/Testimonial';
const Reviews = () => {
  return (
    <div className={style.Reviews}>
      <div className={style.Content}>
        <h3 className={style.preTitle}>Reviewed by People</h3>
        <h1 className={style.Title}>Client's Testimonials</h1>
        <h4 className={style.subTitle}>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </h4>

        <Testimonial />
      </div>
    </div>
  );
};

export default Reviews;
