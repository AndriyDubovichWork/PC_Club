import React, { useContext, useState } from 'react';
import { MenuItem, Paper } from '@mui/material';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import TextField from '@mui/material/TextField';
import style from './BookPC.module.scss';
import { RefContext } from '../../../../Context/RefContext';
import BookDialog from './BookDialog/BookDialog';
import { Formik, Form, Field } from 'formik';
import BookSchema from './Validation/BookPCValidation';
import dayjs from 'dayjs';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MUIDatePicker from './MUIDatePicker/MUIDatePicker';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import enGB from 'date-fns/locale/en-GB';
import enLocale from 'date-fns/locale/en-US';
import Button from '../../../../Styled/Button/Button';
import DropDown from '../../../../Styled/DropDown/DropDown';

const Required = ({ text }: { text: string }) => {
  return (
    <>
      <p>{text}</p>
      <p className={style.Required}>*</p>
    </>
  );
};
const GPUs = [
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const initialValues = {
    date: dayjs(Date.now()),
    GPU: GPUs[0].value,
    CPU: CPUs[0].value,
    From: dayjs(Date.now()),
    Until: dayjs(Date.now()),
  };

  return (
    <>
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

        <Formik
          initialValues={initialValues}
          onSubmit={(data) => {
            console.log(data);
          }}
          validationSchema={BookSchema.validate}
        >
          <Form
            className={style.Grid}
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <CalendarMonthIcon
                    sx={{ color: 'red', paddingRight: '0.5vw' }}
                  />
                  <Required text={'Select Date'} />
                </h3>
                <Field name='date' component={DatePicker} />
              </div>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <SelectAllIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
                  <Required text={'GPU'} />
                </h3>
                <Field name='GPU' component={DropDown} Array={GPUs} />
              </div>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <SelectAllIcon sx={{ color: 'red', paddingRight: '0.5vw' }} />
                  <Required text={'CPU'} />
                </h3>

                <Field name='CPU' component={DropDown} Array={CPUs} />
              </div>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <AccessTimeIcon
                    sx={{ color: 'red', paddingRight: '0.5vw' }}
                  />
                  <Required text={'From'} />
                </h3>
                <Field name='From' component={TimePicker} />
              </div>
              <div className={style.Element}>
                <h3 className={style.Title}>
                  <AccessTimeIcon
                    sx={{ color: 'red', paddingRight: '0.5vw' }}
                  />
                  <Required text={'Until'} />
                </h3>
                <Field name='Until' component={TimePicker} />
              </div>
              <div className={style.Element}>
                <Button
                  onClick={() => {
                    setIsDialogOpen(true);
                  }}
                  className={style.Button}
                >
                  Book
                </Button>
              </div>
            </LocalizationProvider>
          </Form>
        </Formik>
      </Paper>

      <BookDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};

export default BookPC;
