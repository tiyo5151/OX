import React from 'react';
import styles from './index.module.css';
import { useGame } from '../hooks/useGame';

const Home: React.FC = () => {
  const {
    board,
    setpoint,
  } = useGame();

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        kokoniboard
      </div>
      <div className={styles.imformation}>
        kokoniimformation
      </div>
    </div>
  );
};

export default Home;
