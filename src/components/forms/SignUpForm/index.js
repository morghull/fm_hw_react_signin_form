import { Form, Formik } from 'formik';
import React from 'react';
import ShortInputWrapper from '../ShortInputWrapper';
import InputWrapper from '../InputWrapper';
import styles from './SignUpForm.module.scss';
import { SIGN_UP_SCHEMA } from '../../../utils/schemasValidation';

const initialValues = {
  email: '',
  password: '',
};

const SignUpForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log('values:', values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      <Form className={styles.form}>
        <ShortInputWrapper
          name="fname"
          type="text"
          placeholder="First name"
        />
        <ShortInputWrapper
          name="lname"
          type="text"
          placeholder="Last name"
        />
        <ShortInputWrapper
          name="dispname"
          type="text"
          placeholder="Display name"
        />
        <ShortInputWrapper
          name="email"
          type="text"
          placeholder="Email address"
        />
        <ShortInputWrapper
          name="password"
          type="password"
          placeholder="Password"
        />
        <ShortInputWrapper
          name="passwordconf"
          type="password"
          placeholder="Password COnfirmation"
        />
        <label>
          <input name="join" type="radio" value="buyer" />
          <h3>Join As a Buyer</h3>
          <span>
            I am looking for a Name, Logo or Tagline for my business,
            brand or product.
          </span>
        </label>
        <label>
          <input name="join" type="radio" value="seller" />
          <h3>Join As a Creative or Marketplace Seller</h3>
          <span>
            I plan to submit name ideas, Logo designs or sell names in
            Domain Marketplace.
          </span>
        </label>
        <button className={styles.submit} type="submit">
          Create account
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
