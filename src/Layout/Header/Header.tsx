import React, { useContext } from 'react';
import style from './Header.module.scss';
import NavBar from './NavBar/NavBar';
import Button from '../../Styled/Button/Button';
import ButtonMUI from '@mui/material/Button';
import { RefContext } from '../../Context/RefContext';
import { NavLink } from 'react-router-dom';
import useIsPCScreen from '../../Hooks/useIsPCScreen';

const Header = () => {
  const { HeaderRef } = useContext(RefContext);
  const { isPC } = useIsPCScreen();
  return (
    <header className={style.Header} ref={HeaderRef}>
      <NavLink to='/' className={style.Logo}>
        <img
          src={require('./assets/PCIcon.png')}
          alt='logo'
          className={style.Img}
        />
        <div className={style.Name}>
          <h1>PC</h1>
          <h2>CLUB</h2>
        </div>
      </NavLink>
      {isPC ? (
        <>
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
        </>
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
