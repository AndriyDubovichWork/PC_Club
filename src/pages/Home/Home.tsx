import React, { useRef } from 'react';
import style from './Home.module.scss';
import Greeting from '../../Shared/Greeting/Greeting';
import Plan from '../../Shared/Plan/Plan';
import Banner from '../../Shared/Banner/Banner';
import Choose from './Components/Choose/Choose';

import FAQ from './Components/FAQ/FAQ';
import BookPC from '../../Shared/BookPC/BookPC';
import Testimonials from '../../Shared/Testimonials/Testimonials';

const Home = () => {
  return (
    <main className={style.Home}>
      <Greeting />
      <BookPC />
      <Plan />
      <Banner />
      <Choose />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
