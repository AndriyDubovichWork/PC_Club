import React from 'react';
import style from './Register.module.scss';
import { Field, Form, Formik } from 'formik';
import LoginSchema from './Validation/RegisterSchema';
import { TextField } from 'formik-mui';
import Button from '../../Styled/Button/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
  };

  return (
    <div className={style.login}>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          navigate('/PC_Club');
        }}
        validationSchema={LoginSchema}
      >
        <Form className={style.form}>
          <Field
            name='email'
            component={TextField}
            placeholder='Email'
            className={style.field}
          />
          <Field
            name='passwordOne'
            component={TextField}
            placeholder='Password'
            className={style.field}
          />
          <Field
            name='passwordTwo'
            component={TextField}
            placeholder='repeat Password'
            className={style.field}
          />

          <Button type='submit'>Log In</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
