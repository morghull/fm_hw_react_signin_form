import { Form, Formik } from 'formik';
import React from 'react';
import InputWrapper from '../InputWrapper';

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
      <Form>
        <InputWrapper name="email" placeholder="Email" />
        <InputWrapper
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form>
    </Formik>
  );
};

export default SignInForm;
