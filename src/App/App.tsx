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
import useIsPCScreen from '../Hooks/useIsPCScreen';
import { Box } from '@mui/material';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
  {
    path: 'PC_Club/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: 'PC_Club/about',
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: 'PC_Club/computers',
    element: (
      <>
        <Header />
        <Computers />
      </>
    ),
  },
  {
    path: 'PC_Club/reviews',
    element: (
      <>
        <Header />
        <Reviews />
      </>
    ),
  },
  {
    path: 'PC_Club/team',
    element: (
      <>
        <Header />
        <Team />
      </>
    ),
  },
  {
    path: 'PC_Club/contact',
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
  {
    path: 'PC_Club/login',
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: 'PC_Club/register',
    element: (
      <>
        <Header />
        <Register />
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
      <Box className={style.App}>
        <RouterProvider router={router} />
        <Fotter />
        <ScrollTop />
      </Box>
    </RefContext.Provider>
  );
}

export default App;
