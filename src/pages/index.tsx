import React from 'react';
import Board from '../component/board';
import Information from '../component/information';
import useGame from '../hooks/useGame';
import styles from './index.module.css';

const Home: React.FC = () => {
  const { board, setOX, winner, turn } = useGame();

  return (
    <div className={styles.container}>
      <Board board={board} setOX={setOX} />
      <Information winner={winner} turn={turn} />
    </div>
  );
};

export default Home;
