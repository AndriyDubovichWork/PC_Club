import React from 'react';
import style from './Home.module.scss';
import Greeting from './Components/Greeting/Greeting';
import BookPC from './Components/BookPC/BookPC';

const Home = () => {
  return (
    <div className={style.Home}>
      <Greeting />
      <BookPC />
    </div>
  );
};

export default Home;
