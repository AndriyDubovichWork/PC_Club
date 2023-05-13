import React, { useContext } from 'react';
import style from './Greeting.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../../Styled/Button/Button';
import ButtonMUI from '@mui/material/Button';
import { RefContext } from '../../Context/RefContext';
import { useLocation } from 'react-router-dom';

const Greeting = () => {
  const { BookRef, scrollToElement } = useContext(RefContext);

  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && (
        <img
          src={require('./assets/backGround.png')}
          className={style.BackGround}
        />
      )}
      <div className={style.Greeting}>
        <div className={style.Content}>
          <h2 className={style.preTitle}>Plan Your day now</h2>
          <div className={style.title}>
            Save <span className={style.HighLighted}>big</span> with our PC
            Clubs
          </div>
          <p className={style.subtitle}>
            Best and cheapest PC Clubs in country
          </p>
          <Button
            onClick={() => {
              scrollToElement(BookRef);
            }}
          >
            Book PC
            <CheckCircleIcon sx={{ marginLeft: '1vw' }} />
          </Button>
          <ButtonMUI
            variant='outlined'
            className={style.MoreButton}
            sx={{
              padding: '2vh 2vw',
              backgroundColor: '#000',
              color: '#fff',
              borderColor: '#000',
              '&:hover': {
                borderColor: '#000',
                backgroundColor: '#fff',
                color: '#000',
              },
            }}
          >
            Learn More
            <ArrowForwardIosIcon />
          </ButtonMUI>
        </div>
        <img src={require('./assets/pcImg.png')} className={style.PCImage} />
      </div>
    </>
  );
};

export default Greeting;
