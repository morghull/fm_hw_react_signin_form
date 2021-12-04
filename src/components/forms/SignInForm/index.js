import { Form, Formik } from 'formik';
import React from 'react';
import InputWrapper from '../InputWrapper';
import styles from './SignInForm.module.scss';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log('values:', values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <InputWrapper
          name="email"
          type="email"
          placeholder="Email address"
        />
        <InputWrapper
          name="password"
          type="password"
          placeholder="Password"
        />
        <button className={styles.submit} type="submit">
          login
        </button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
