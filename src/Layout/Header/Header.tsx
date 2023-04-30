import React from 'react';
import style from './Header.module.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.Logo}>
        <img
          src={require('./assets/PCIcon.png')}
          alt='logo'
          className={style.Img}
        />
        <div className={style.Name}>
          <h1>PC</h1>
          <h2>CLUB</h2>
        </div>
      </div>
      <NavBar />
      <div className={style.LoginRegister}>
        <Button variant='text'>Sing In</Button>
        <Button variant='contained'>Register</Button>
      </div>
    </div>
  );
};

export default Header;
