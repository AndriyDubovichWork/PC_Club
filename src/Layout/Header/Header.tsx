import React, { useContext, useState } from 'react';
import style from './Header.module.scss';
import NavBar from './NavBar/NavBar';
import ButtonMUI from '@mui/material/Button';
import { RefContext } from '../../Context/RefContext';
import { NavLink } from 'react-router-dom';
import useIsPCScreen from '../../Hooks/useIsPCScreen';
import { Button } from '@mui/material';

const Header = () => {
  const { HeaderRef } = useContext(RefContext);
  const { isPC } = useIsPCScreen();

  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

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
      <NavBar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />

      {isPC ? (
        <>
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
        <Button onClick={() => setIsNavBarOpen(true)}>open</Button>
      )}
    </header>
  );
};

export default Header;
