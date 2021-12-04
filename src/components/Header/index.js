import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './../../logo.png';

const buttonsText = {
  '/login': 'Sign in',
  '/signup': 'Sign up',
};

const creatBbutton = (path) => {
  return (
    <Link to={path}>
      <button>{buttonsText[path]}</button>
    </Link>
  );
};

const Header = () => {
  const { pathname } = useLocation();
  const sideButton = creatBbutton(
    pathname === '/login' ? '/signup' : '/login'
  );
  return (
    <section>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      {sideButton}
    </section>
  );
};

export default Header;
