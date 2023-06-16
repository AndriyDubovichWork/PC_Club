import React from 'react';
import style from './About.module.scss';
import Plan from '../../Shared/Plan/Plan';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import Banner from '../../Shared/Banner/Banner';

const About = () => {
  return (
    <>
      <main className={style.About}>
        <SubHeader title='About' />
        <Plan />
      </main>
      <Banner />
    </>
  );
};

export default About;
