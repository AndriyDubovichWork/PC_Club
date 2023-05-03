import React from 'react';
import style from './Header.module.scss';
import Button from '@mui/material/Button';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <header className={style.Header}>
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
        <Button
          variant='text'
          sx={{
            color: '#000',
            '&:hover': {
              color: '#ff4d30',
            },
          }}
        >
          Sing In
        </Button>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#ff4d30',
            '&:hover': {
              backgroundColor: '#ff4d30',
            },
          }}
        >
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;
