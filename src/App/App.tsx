import React, { useRef } from 'react';
import style from './App.module.scss';
import Home from '../pages/Home/Home';
import Header from '../Layout/Header/Header';
import Fotter from '../Layout/Fotter/Fotter';
import ScrollTop from '../Layout/ScrollTop/ScrollTop';

function App() {
  const GreetingRef = useRef(null);
  const BookRef = useRef(null);
  const scrollToElement = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className={style.App}>
      <Header />
      <Home
        GreetingRef={GreetingRef}
        BookRef={BookRef}
        scrollToElement={scrollToElement}
      />
      <Fotter GreetingRef={GreetingRef} scrollToElement={scrollToElement} />
      <ScrollTop />
    </div>
  );
}

export default App;
