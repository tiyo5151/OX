import useGame from '../hooks/useGame';
import styles from '../pages/index.module.css';

const Information: React.FC = () => {
  const { winner } = useGame();
  return (
    <div className={styles.information}>
      {winner !== null ? <h1>{winner}の勝利</h1> : <h1>対戦中...</h1>}
    </div>
  );
};

export default Information;
