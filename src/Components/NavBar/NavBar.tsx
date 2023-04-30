import React from 'react';
import style from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <a>home</a>
      <a>abiut</a>
      <a>computers</a>
      <a>reviews</a>
      <a>our Team</a>
      <a>contact</a>
    </nav>
  );
};

export default NavBar;
