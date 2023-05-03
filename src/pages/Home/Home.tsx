import React from 'react';
import style from './Home.module.scss';
import Greeting from './Components/Greeting/Greeting';
import BookPC from './Components/BookPC/BookPC';
import Pros from './Components/Pros/Pros';
import Banner from './Components/Banner/Banner';
import Choose from './Components/Choose/Choose';
import Reviews from './Components/Rewievs/Reviews';
import FAQ from './Components/FAQ/FAQ';

const Home = () => {
  return (
    <div className={style.Home}>
      <Greeting />
      <BookPC />
      <Pros />
      <Banner />
      <Choose />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default Home;
