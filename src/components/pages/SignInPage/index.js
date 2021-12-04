import React, { Component } from 'react';
import SignInForm from '../../forms/SignInForm';

class SignInPage extends Component {
  render() {
    return (
      <div>
        <h2>login to your account</h2>
        <SignInForm />
      </div>
    );
  }
}

export default SignInPage;
