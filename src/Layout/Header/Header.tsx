import React from 'react';
import style from './Header.module.scss';
import NavBar from './NavBar/NavBar';
import Button from '../../Styled/Button/Button';
import ButtonMUI from '@mui/material/Button';

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
        <ButtonMUI
          variant='text'
          sx={{
            color: '#000',
            '&:hover': {
              color: '#ff4d30',
            },
          }}
        >
          Sing In
        </ButtonMUI>
        <Button>Register</Button>
      </div>
    </header>
  );
};

export default Header;
