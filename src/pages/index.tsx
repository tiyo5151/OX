import React from 'react';
import Board from '../component/board';
import Information from '../component/information';
import useGame from '../hooks/useGame';
import styles from './index.module.css';

const Home: React.FC = () => {
  const { history, currentStep, currentTurn, currentBoard, winner, setOX, jumpTo } = useGame();

  return (
    <div className={styles.container}>
      <Board board={currentBoard} setOX={setOX} />
      <Information
        winner={winner}
        turn={currentTurn}
        jumpTo={jumpTo}
        step={currentStep}
        history={history}
      />
    </div>
  );
};
export default Home;
