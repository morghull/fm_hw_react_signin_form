import React from 'react';
import { Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import styles from './InputWrapper.module.scss';

const InputWrapper = (props) => {
  const { name, children, ...rest } = props;
  return (
    <label className={styles.inputWrapper}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(styles.input, {
            [styles.valid]: meta.touched && !meta.error,
            [styles.invalid]: meta.touched && meta.error,
          });
          return (
            <>
              <input className={classNames} {...field} {...rest} />
              <span />
            </>
          );
        }}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className={styles.error}
      ></ErrorMessage>
      {children}
    </label>
  );
};

export default InputWrapper;
