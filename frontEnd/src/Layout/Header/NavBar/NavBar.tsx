import React, { useContext } from 'react';
import style from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import useIsPCScreen from '../../../Hooks/useIsPCScreen';
import { Dialog, ListItem } from '@mui/material';
import { IsAuthorisedContext } from '../../../Context/IsAuthorisedContext';
import ButtonMUI from '@mui/material/Button';

type NavBarPropsT = {
  isNavBarOpen: boolean;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ isNavBarOpen, setIsNavBarOpen }: NavBarPropsT) => {
  const { isPC } = useIsPCScreen();
  const urls = [
    {
      text: 'Home',
      link: '/PC_Club',
    },
    {
      text: 'About',
      link: '/PC_Club/about',
    },
    {
      text: 'Computers',
      link: '/PC_Club/computers',
    },
    {
      text: 'Reviews',
      link: '/PC_Club/reviews',
    },
    {
      text: 'Our Team',
      link: '/PC_Club/team',
    },
    {
      text: 'Contact',
      link: '/PC_Club/contact',
    },
  ];
  const { isAuthorised, setIsAuthorised } = useContext(IsAuthorisedContext);
  const PhoneUrls = isAuthorised
    ? urls
    : [
        ...urls,
        {
          text: 'Log In',
          link: '/PC_Club/login',
        },
        {
          text: 'Register',
          link: '/PC_Club/register',
        },
      ];
  return (
    <nav className={style.NavBar}>
      {isPC &&
        urls.map((url) => {
          return (
            <NavLink to={url.link} key={url.text} className={style.Link}>
              {url.text}
            </NavLink>
          );
        })}
      {isNavBarOpen && (
        <Dialog
          open={isNavBarOpen}
          onClose={() => setIsNavBarOpen(false)}
          fullScreen
        >
          <div className={style.comtemt}>
            {PhoneUrls.map((url) => {
              return (
                <ListItem key={url.text}>
                  <NavLink
                    to={url.link}
                    className={style.Link}
                    onClick={() => setIsNavBarOpen(false)}
                  >
                    {url.text}
                  </NavLink>
                </ListItem>
              );
            })}
            {isAuthorised && (
              <ListItem>
                <ButtonMUI
                  variant='text'
                  sx={{
                    marginRight: '2vw',
                    color: '#000',
                    '&:hover': {
                      color: '#ff4d30',
                    },
                  }}
                  onClick={() => {
                    setIsNavBarOpen(false);
                    setIsAuthorised(false);
                  }}
                >
                  Log out
                </ButtonMUI>
              </ListItem>
            )}
          </div>
        </Dialog>
      )}
    </nav>
  );
};

export default NavBar;
