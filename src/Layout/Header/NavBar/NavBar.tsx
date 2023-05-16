import React from 'react';
import style from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import useIsPCScreen from '../../../Hooks/useIsPCScreen';
import { Dialog, Drawer, ListItem, ListItemButton, Paper } from '@mui/material';

type NavBarPropsT = {
  isNavBarOpen: boolean;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ isNavBarOpen, setIsNavBarOpen }: NavBarPropsT) => {
  const { isPC } = useIsPCScreen();
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
      {isPC &&
        urls.map((url) => {
          return (
            <NavLink
              to={'PC_Club/' + url.link}
              key={url.text}
              className={style.Link}
            >
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
            {urls.map((url) => {
              return (
                <ListItem key={url.text}>
                  <NavLink
                    to={'PC_Club/' + url.link}
                    className={style.Link}
                    onClick={() => setIsNavBarOpen(false)}
                  >
                    {url.text}
                  </NavLink>
                </ListItem>
              );
            })}
          </div>
        </Dialog>
      )}
    </nav>
  );
};

export default NavBar;
