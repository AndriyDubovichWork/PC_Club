import React, { useRef } from 'react';
import style from './Home.module.scss';
import Greeting from '../../Shared/Greeting/Greeting';
import Plan from '../../Shared/Plan/Plan';
import Banner from './Components/Banner/Banner';
import Choose from './Components/Choose/Choose';
import Reviews from './Components/Rewievs/Reviews';
import FAQ from './Components/FAQ/FAQ';
import BookPC from '../../Shared/BookPC/BookPC';

const Home = () => {
  return (
    <main className={style.Home}>
      <Greeting />
      <BookPC />
      <Plan />
      <Banner />
      <Choose />
      <Reviews />
      <FAQ />
    </main>
  );
};

export default Home;
