import React from 'react';
import style from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const urls = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Computers',
      link: '/computers',
    },
    {
      text: 'Reviews',
      link: '/reviews',
    },
    {
      text: 'Our Team',
      link: '/team',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <nav className={style.NavBar}>
      {urls.map((url) => {
        return (
          <NavLink to={url.link} key={url.text} className={style.Link}>
            {url.text}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;
