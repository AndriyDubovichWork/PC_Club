import React from 'react';
import style from './Greeting.module.scss';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Greeting = () => {
  return (
    <>
      <img
        src={require('./assets/backGround.png')}
        className={style.BackGround}
      />
      <div className={style.Greeting}>
        <div className={style.Content}>
          <h2 className={style.preTitle}>Plan Your day now</h2>
          <div className={style.title}>
            Save <p className={style.HighLighted}>big</p> with our PC Clubs
          </div>
          <p className={style.subtitle}>
            Best and cheapest PC Clubs in country
          </p>
          <Button variant='contained' className={style.BookButton}>
            Book PC
          </Button>
          <Button variant='outlined' className={style.MoreButton}>
            Learn More
            <ArrowForwardIosIcon />
          </Button>
        </div>
        <img src={require('./assets/pcImg.png')} className={style.PCImage} />
      </div>
    </>
  );
};

export default Greeting;
