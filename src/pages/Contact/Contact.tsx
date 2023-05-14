import React, { useState } from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import style from './Contact.module.scss';
import Banner from '../../Shared/Banner/Banner';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Required from '../../Styled/Required/Required';
import { TextField } from '@mui/material';
import Button from '../../Styled/Button/Button';
import { NavLink, redirect } from 'react-router-dom';
import PopUpMessage from '../../Styled/PopUpMessage/PopUpMessage';

const Contact = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  return (
    <>
      <main className={style.Contact}>
        <SubHeader title='Contact' />
        <div className={style.content}>
          <div className={style.column}>
            <h1 className={style.header}>Need additional information?</h1>
            <h5 className={style.subHeader}>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </h5>
            <div className={style.highLighted}>
              <LocalPhoneIcon />
              (123) -456-789
            </div>
            <div className={style.highLighted}>
              <EmailIcon />
              randomemail@gmail.com
            </div>
            <div className={style.highLighted}>
              <LocationOnIcon />
              Lviv , Ukraine
            </div>
          </div>
          <div className={style.column}>
            <div className={style.field}>
              <Required text='Full Name' />
              <TextField
                fullWidth
                placeholder='E.g. "John Statham"'
              ></TextField>
            </div>
            <div className={style.field}>
              <Required text='Email' />
              <TextField fullWidth placeholder='example@gmail.com'></TextField>
            </div>
            <div className={style.field}>
              <Required text='Tell us about it' />
              <TextField
                multiline
                fullWidth
                rows={4}
                placeholder='write there...'
              ></TextField>
            </div>
            <Button fullWidth onClick={() => setIsSnackbarOpen(true)}>
              <EmailIcon sx={{ marginRight: '1vw' }} />
              send message
            </Button>
          </div>
        </div>
      </main>
      <Banner />
      <PopUpMessage
        isSnackbarOpen={isSnackbarOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
        text='Successfully send'
      />
    </>
  );
};

export default Contact;
