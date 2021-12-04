import React, { Component } from 'react';
import SignInForm from '../../forms/SignInForm';
import styles from './SignInPage.module.scss'

class SignInPage extends Component {
  render() {
    return (
      <div className={styles.contaner}>
        <h2 className={styles.title}>login to your account</h2>
        <SignInForm />
      </div>
    );
  }
}

export default SignInPage;
