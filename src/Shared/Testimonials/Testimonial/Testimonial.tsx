import React from 'react';
import style from './Testimonial.module.scss';
import { Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

type TestimonialPropsT = {
  text: string;
  name: string;
  img: string;
};

const Testimonial = ({ img, text, name }: TestimonialPropsT) => {
  return (
    <Paper sx={{ padding: '10vh 2vw' }}>
      <div>
        <span className={style.Text}>"{text}"</span>
      </div>
      <div className={style.Author}>
        <img src={img} alt='testimonial' className={style.Img} />
        <h3>{name}</h3>
        <FormatQuoteIcon sx={{ fontSize: '5rem', color: '#ff4d30' }} />
      </div>
    </Paper>
  );
};

export default Testimonial;
