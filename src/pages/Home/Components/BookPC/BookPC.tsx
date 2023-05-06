import { Button, Paper } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import style from './BookPC.module.scss';
import { RefContext } from '../../../../Context/RefContext';

const Required = ({ text }: { text: string }) => {
  return (
    <>
      <p>{text}</p>
      <p className={style.Required}>*</p>
    </>
  );
};
const VideoCards = [
  {
    label: 'Rtx 4090',
    value: 'Rtx 4090',
  },
  {
    label: 'Rtx 4080',
    value: 'Rtx 4080',
  },
  {
    label: 'Rtx 4070',
    value: 'Rtx 4070',
  },
  {
    label: 'Rtx 3090',
    value: 'Rtx 3090',
  },
  {
    label: 'Rtx 3080',
    value: 'Rtx 3080',
  },
  {
    label: 'Gtx 1080',
    value: 'Gtx 1080',
  },
  {
    label: 'Gtx 1660ti',
    value: 'Gtx 1660ti',
  },
];
const CPUs = [
  {
    label: 'i9 13th 13900k',
    value: 'i9 13th 13900k',
  },
  {
    label: 'i7 13th 13700k',
    value: 'i7 13th 13700k',
  },
  {
    label: 'i5 13th 13500',
    value: 'i5 13th 13500',
  },
  {
    label: 'i9 12th 12900k',
    value: 'i9 12th 12900k',
  },
  {
    label: 'i7 12th 12700k',
    value: 'i7 12th 12700k',
  },
  {
    label: 'i5 12th 12600k',
    value: 'i5 12th 12600k',
  },
];

const BookPC = () => {
  const { BookRef } = useContext(RefContext);
  return (
    <Paper
      ref={BookRef}
      sx={{
        margin: '5vh auto',
        width: '80%',
        padding: '2vw 3vw',
      }}
      elevation={3}
    >
      <h1>Book PC</h1>
      <div className={style.Grid}>
        <div className={style.Element}>
          <h3 className={style.Title}>
            <CalendarMonthIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
            <Required text={'Select Date'} />
          </h3>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker sx={{ width: '100%' }} label='Select date' />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className={style.Element}>
          <h3 className={style.Title}>
            <SelectAllIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
            <Required text={'Video Card'} />
          </h3>

          <TextField
            select
            label='Video Card'
            defaultValue={VideoCards[0].value}
            sx={{ width: '100%' }}
          >
            {VideoCards.map((VideoCard) => (
              <MenuItem key={VideoCard.value} value={VideoCard.value}>
                {VideoCard.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={style.Element}>
          <h3 className={style.Title}>
            <SelectAllIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
            <Required text={'CPU'} />
          </h3>

          <TextField
            select
            label='CPU'
            defaultValue={CPUs[0].value}
            sx={{ width: '100%' }}
          >
            {CPUs.map((CPU) => (
              <MenuItem key={CPU.value} value={CPU.value}>
                {CPU.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={style.Element}>
          <h3 className={style.Title}>
            <AccessTimeIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
            <Required text={'From'} />
          </h3>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
              <TimePicker label='From' sx={{ width: '100%' }} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className={style.Element}>
          <h3 className={style.Title}>
            <AccessTimeIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
            <Required text={'Until'} />
          </h3>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
              <TimePicker label='Until' sx={{ width: '100%' }} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className={style.Element}>
          <Button
            variant='contained'
            className={style.Button}
            sx={{
              backgroundColor: '#ff4d30',
              '&:hover': {
                backgroundColor: '#ff4d30',
              },
              padding: '2vh 2vw',
            }}
          >
            Book
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default BookPC;
