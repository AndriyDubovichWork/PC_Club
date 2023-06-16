import React, { useRef, useState } from 'react';
import style from './App.module.scss';
import Home from '../pages/Home/Home';
import Header from '../Layout/Header/Header';
import Fotter from '../Layout/Fotter/Fotter';
import ScrollTop from '../Layout/ScrollTop/ScrollTop';
import { RefContext } from '../Context/RefContext';
import { IsAuthorisedContext } from '../Context/IsAuthorisedContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../pages/About/About';
import Computers from '../pages/Computers/Computers';
import Reviews from '../pages/Reviews/Reviews';
import Team from '../pages/Team/Team';
import Contact from '../pages/Contact/Contact';
import { Box } from '@mui/material';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';

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
  {
    path: 'PC_Club/forgotPassword',
    element: (
      <>
        <Header />
        <ForgotPassword />
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
  const [isAuthorised, setIsAuthorised] = useState(false);
  return (
    <IsAuthorisedContext.Provider value={{ isAuthorised, setIsAuthorised }}>
      <RefContext.Provider value={{ HeaderRef, BookRef, scrollToElement }}>
        <Box className={style.App}>
          <RouterProvider router={router} />
          <Fotter />
          <ScrollTop />
        </Box>
      </RefContext.Provider>
    </IsAuthorisedContext.Provider>
  );
}

export default App;
