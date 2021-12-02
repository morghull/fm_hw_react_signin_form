import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navButtonText: 'SignUp',
      navButtonLink: '/signup',
    };
  }
  render() {
    return (
      <section>
        <Link to="/">
          <img src={logo}></img>
        </Link>
      </section>
    );
  }
}

export default Header;
