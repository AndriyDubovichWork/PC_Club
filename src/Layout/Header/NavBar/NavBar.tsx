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
            {urls.map((url) => {
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
          </div>
        </Dialog>
      )}
    </nav>
  );
};

export default NavBar;
