import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './../../logo.png';
import styles from './Header.module.scss';

const buttonsText = {
  '/login': 'Login',
  '/signup': 'Signup',
};

const creatBbutton = (path) => {
  return (
    <Link to={path}>
      <button className={styles.btn}>{buttonsText[path]}</button>
    </Link>
  );
};

const Header = () => {
  const { pathname } = useLocation();
  const sideButton = creatBbutton(
    pathname === '/login' ? '/signup' : '/login'
  );
  return (
    <section className={styles.header}>
      <Link to="/" className={styles.logoWrapper}>
        <img src={logo} alt="logo"></img>
      </Link>
      {sideButton}
    </section>
  );
};

export default Header;
