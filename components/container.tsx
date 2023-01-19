import React from 'react';
import styles from '../styles/About.module.scss';

interface UserProps {
  children: JSX.Element;
  center?: Boolean;
}

function Container({ children, center = false }: UserProps) {
  return (
    <div className={center ? styles.container_center : styles.container}>
      {children}
    </div>
  );
}

export default Container;
