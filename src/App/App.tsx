import React, { useRef } from 'react';
import style from './App.module.scss';
import Home from '../pages/Home/Home';
import Header from '../Layout/Header/Header';
import Fotter from '../Layout/Fotter/Fotter';
import ScrollTop from '../Layout/ScrollTop/ScrollTop';
import { RefContext } from '../Context/RefContext';
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import dayjs from 'dayjs';
import Computers from '../pages/Computers/Computers';
import Reviews from '../pages/Reviews/Reviews';
import Team from '../pages/Team/Team';
import Contact from '../pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: '/computers',
    element: (
      <>
        <Header />
        <Computers />
      </>
    ),
  },
  {
    path: '/reviews',
    element: (
      <>
        <Header />
        <Reviews />
      </>
    ),
  },
  {
    path: '/team',
    element: (
      <>
        <Header />
        <Team />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
]);

function App() {
  const HeaderRef = useRef(null);
  const BookRef = useRef(null);

  const scrollToElement = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <RefContext.Provider value={{ HeaderRef, BookRef, scrollToElement }}>
      <div className={style.App}>
        <RouterProvider router={router} />
        <Fotter />
        <ScrollTop />
      </div>
    </RefContext.Provider>
  );
}

export default App;
