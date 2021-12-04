import React from 'react';
import { Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import styles from './InputWrapper.module.scss';

const InputWrapper = (props) => {
  const { name, ...rest } = props;
  return (
    <label className={styles.inputWrapper}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(styles.input, {
            [styles.valid]: meta.touched && !meta.error,
            [styles.invalid]: meta.touched && meta.error,
          });
          return (
            <input className={classNames} {...field} {...rest} />
          );
        }}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className={styles.error}
      ></ErrorMessage>
    </label>
  );
};

export default InputWrapper;
