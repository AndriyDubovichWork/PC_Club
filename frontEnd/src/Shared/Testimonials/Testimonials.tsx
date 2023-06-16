import React from 'react';
import style from './Testimonials.module.scss';
import Testimonial from './Testimonial/Testimonial';

const Testimonials = () => {
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

        <div className={style.Testimonials}>
          <Testimonial
            name='Harry Potter'
            text='I had a great experience at PC Club! The staff was friendly and helpful. I highly recommend this store.'
            img={require('./assets/harry.jpg')}
          />

          <Testimonial
            img={require('./assets/Ron.jpg')}
            name='Ron Weasley'
            text="PC Club's great selection and knowledgeable staff make them my go-to for tech needs."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
