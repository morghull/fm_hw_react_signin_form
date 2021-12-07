import React, { Component } from 'react';
import SignUpForm from '../../forms/SignUpForm';
import styles from './SignUpPage.module.scss';

class SignUpPage extends Component {
  render() {
    return (
      <div className={styles.contaner}>
        <h2 className={styles.title}>create an account</h2>
        <h3 className={styles.text}>
          We always keep your name and email address private.
        </h3>
        <SignUpForm />
      </div>
    );
  }
}

export default SignUpPage;
