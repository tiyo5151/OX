import React from 'react';
import styles from './index.module.css';
import useGame from '../hooks/useGame';
import Board from '../component/board';
import Imformation from '../component/imformation';

const Home: React.FC = () => {
  const {
    board,
    setpoint,
  } = useGame();

  return (
    <div className={styles.container}>
      <Board/>
      <Imformation/>
    </div>
  );
};

export default Home;
