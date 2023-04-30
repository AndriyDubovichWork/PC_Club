import React from 'react';
import style from './Home.module.scss';
import Greeting from './Components/Greeting/Greeting';

const Home = () => {
  return (
    <div className={style.Home}>
      <Greeting />
    </div>
  );
};

export default Home;
