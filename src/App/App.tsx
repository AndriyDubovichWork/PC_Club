import React, { useRef } from 'react';
import style from './App.module.scss';
import Home from '../pages/Home/Home';
import Header from '../Layout/Header/Header';
import Fotter from '../Layout/Fotter/Fotter';
import ScrollTop from '../Layout/ScrollTop/ScrollTop';
import { RefContext } from '../Context/RefContext';
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import { CPUs, GPUs } from '../pages/Home/Components/BookPC/PCParts/PCParts';
import dayjs from 'dayjs';

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
