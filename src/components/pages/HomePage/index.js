import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

class HomePage extends Component {
  render() {
    return (
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuitem}>
            <Link to="/login" className={styles.btn}>Sign in</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to="/signup" className={styles.btn}>Sign up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomePage;
