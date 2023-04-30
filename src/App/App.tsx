import React from 'react';
import style from './App.module.scss';
import Home from '../pages/Home/Home';
import Header from '../Layout/Header/Header';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
