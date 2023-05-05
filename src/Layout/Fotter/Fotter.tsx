import React, { useContext } from 'react';
import style from './Fotter.module.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RefContext } from '../../Context/RefContext';

const Fotter = () => {
  const { GreetingRef, scrollToElement } = useContext(RefContext);

  const headers = [
    <h1>PC CLUB</h1>,
    <h1>COMPANY</h1>,
    <h1>WORKING HOURS</h1>,
    <h1>SUBSCRIPTION</h1>,
  ];
  const companyies = ['New York', 'Careers', 'Mobile', 'Blog', 'How we work'];
  const contents = [
    <div>
      <p className={style.SubTitle}>
        We offers a big range of service for all your needs. We have the perfect
        PC to meet your needs
      </p>
      <div className={style.HighLighted}>
        <LocalPhoneIcon />
        (123) -456-789
      </div>
      <div className={style.HighLighted}>
        <EmailIcon />
        randomemail@gmail.com
      </div>
    </div>,
    <div>
      {companyies.map((company) => {
        return (
          <p
            className={style.HighLighted}
            onClick={() => {
              scrollToElement(GreetingRef);
            }}
          >
            {company}
          </p>
        );
      })}
    </div>,
    <div>
      <p className={style.HighLighted}>Mon - Fri: 9:00AM - 9:00PM</p>
      <p className={style.HighLighted}>Sat: 9:00AM - 19:00PM</p>
      <p className={style.HighLighted}>Sun: Closed</p>
    </div>,
    <div>
      <p>Subscribe your Email address for latest news & updates.</p>
      <TextField
        variant='filled'
        className={style.Input}
        placeholder='Enter Email Address'
        type='email'
        name='email'
        sx={{ width: '100%', margin: '2vh 0' }}
      />
      <Button
        variant='contained'
        sx={{
          width: '100%',
          backgroundColor: '#ff4d30',
          '&:hover': {
            backgroundColor: '#ff4d30',
          },
        }}
      >
        Submit
      </Button>
    </div>,
  ];

  return (
    <div className={style.Fotter}>
      {headers.map((header, id) => {
        return <div key={id}>{header}</div>;
      })}
      {contents.map((content, id) => {
        return <div key={id}>{content}</div>;
      })}
    </div>
  );
};

export default Fotter;
