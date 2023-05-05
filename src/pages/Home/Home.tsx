import React, { useRef } from 'react';
import style from './Home.module.scss';
import Greeting from './Components/Greeting/Greeting';
import BookPC from './Components/BookPC/BookPC';
import Pros from './Components/Pros/Pros';
import Banner from './Components/Banner/Banner';
import Choose from './Components/Choose/Choose';
import Reviews from './Components/Rewievs/Reviews';
import FAQ from './Components/FAQ/FAQ';

const Home = ({
  GreetingRef,
  BookRef,
  scrollToElement,
}: {
  BookRef: React.MutableRefObject<null>;
  GreetingRef: React.MutableRefObject<null>;
  scrollToElement: (ref: any) => void;
}) => {
  return (
    <div className={style.Home}>
      <Greeting
        GreetingRef={GreetingRef}
        BookRef={BookRef}
        scrollToElement={scrollToElement}
      />
      <BookPC BookRef={BookRef} />
      <Pros />
      <Banner />
      <Choose GreetingRef={GreetingRef} scrollToElement={scrollToElement} />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default Home;
