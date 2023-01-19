import React from 'react';
import styles from '../styles/About.module.scss';

interface UserProps {
  text1: string;
  text2: string;
}

function Button({ text1, text2 }: UserProps) {
  return (
    <div className={styles.button}>
      <div className={styles.button__content}>
        <p className={styles.button__text}>
          <span className={styles.button__text1}>{text1}</span>
          <span className={styles.button__text2}>{text2}</span>
        </p>
      </div>
      <img
        className={styles.button__icon}
        src='/right-arrows.png'
        alt='A right arrow.'
      />
    </div>
  );
}

export default Button;
