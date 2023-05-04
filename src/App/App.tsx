import React from 'react';
import style from './App.module.scss';
import Home from '../pages/Home/Home';
import Header from '../Layout/Header/Header';
import Fotter from '../Layout/Fotter/Fotter';
import ScrollTop from '../Layout/ScrollTop/ScrollTop';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Home />
      <Fotter />
      <ScrollTop className={style.App} />
    </div>
  );
}

export default App;
