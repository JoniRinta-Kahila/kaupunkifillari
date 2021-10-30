import React from 'react';
import styles from './main.module.scss';

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      Main
    </div>
  )
}

export default Main;
