import React, { useRef, createContext } from 'react';
import style from './App.module.scss';
import Home from '../pages/Home/Home';
import Header from '../Layout/Header/Header';
import Fotter from '../Layout/Fotter/Fotter';
import ScrollTop from '../Layout/ScrollTop/ScrollTop';
import { RefContext } from '../Context/RefContext';

function App() {
  const GreetingRef = useRef(null);
  const BookRef = useRef(null);

  const scrollToElement = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <RefContext.Provider value={{ GreetingRef, BookRef, scrollToElement }}>
      <div className={style.App}>
        <Header />
        <Home />
        <Fotter />
        <ScrollTop />
      </div>
    </RefContext.Provider>
  );
}

export default App;
