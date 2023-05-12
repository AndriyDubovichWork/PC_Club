import React, { useContext, useState } from 'react';
import style from './PresonalInformation.module.scss';
import { MenuItem, Paper } from '@mui/material';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { Formik, Form, Field } from 'formik';

import dayjs from 'dayjs';

import { TextField } from 'formik-mui';
import PresonalInformationSchema from './Validation/PresonalInformationSchema';

require('dayjs/locale/en');
const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);
const PresonalInformation = () => {
  return (
    <div className={style.PresonalInformation}>
      <h1 className={style.Title}>PERSONAL INFORMATION</h1>
      <Formik
        onSubmit={(data) => {
          console.log(data);
        }}
        initialValues={{
          email: 'asadad@gmail.com',
        }}
        validationSchema={PresonalInformationSchema}
      >
        <Form>
          <div className={style.Element}>
            <h3 className={style.Title}></h3>

            <Field
              name='email'
              component={TextField}
              helperText='This field is required'
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PresonalInformation;
