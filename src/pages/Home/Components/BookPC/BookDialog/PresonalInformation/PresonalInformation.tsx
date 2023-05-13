import React, { useContext, useState } from 'react';
import style from './PresonalInformation.module.scss';
import {
  Alert,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Paper,
  Snackbar,
} from '@mui/material';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { Formik, Form, Field } from 'formik';

import dayjs from 'dayjs';

import { TextField } from 'formik-mui';
import PresonalInformationSchema from './Validation/PresonalInformationSchema';
import Required from '../../../../../../Styled/Required/Required';
import Button from '../../../../../../Styled/Button/Button';

require('dayjs/locale/en');
const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

type PresonalInformationPropsT = {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FieldT = { name: string; placeHolder: string };
const Fields: FieldT[] = [
  { name: 'firstName', placeHolder: 'First Name' },
  { name: 'lastName', placeHolder: 'Last Name' },
  { name: 'email', placeHolder: 'Email' },
  { name: 'phoneNumber', placeHolder: 'Phone Number' },
  { name: 'coupon', placeHolder: 'Coupon if You have' },
];

const PresonalInformation = ({
  setIsDialogOpen,
  setIsSnackbarOpen,
}: PresonalInformationPropsT) => {
  return (
    <div className={style.PresonalInformation}>
      <h1 className={style.Title}>PERSONAL INFORMATION</h1>
      <Formik
        onSubmit={(data) => {
          console.log(data);
        }}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          coupon: '',
        }}
        validationSchema={PresonalInformationSchema}
      >
        {({ isValid }: { isValid: boolean }) => (
          <Form>
            <div className={style.Element}>
              <h3 className={style.Title}></h3>
              <div className={style.Elems}>
                {Fields.map((elem) => {
                  return (
                    <div>
                      <Required text={elem.placeHolder} />

                      <Field
                        name={elem.name}
                        placeholder={'Enter your ' + elem.placeHolder}
                        fullWidth
                        component={TextField}
                      />
                    </div>
                  );
                })}
              </div>
              <FormControlLabel
                control={<Checkbox />}
                label='Please send me latest news and updates'
              />

              <Button
                type='submit'
                className={style.Button}
                disabled={!isValid}
                onClick={() => {
                  setIsSnackbarOpen(true);
                  setIsDialogOpen(false);
                }}
              >
                Reserve now
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PresonalInformation;
