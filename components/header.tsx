import React from 'react';
import Container from './container';
import styles from '../styles/About.module.scss';

function Header() {
  return (
    <header className={`${styles.section} ${styles.header} `}>
      <h1 className={`${styles.gradient_text} ${styles.header__heading}`}>
        About
        <br />
        SkyWorld
      </h1>
      <p className={styles.header__text}>
        Created by our singular vision of Being the Best, we strive to improve
        lives through new ideas and creative designs, constantly pushing
        boundaries while maintaining quality through all our projects.
      </p>
    </header>
  );
}

export default Header;
