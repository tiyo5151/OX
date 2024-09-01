import styles from '../pages/index.module.css';

interface Props {
  winner: number | null;
}

const Information: React.FC<Props> = ({ winner }) => {
  return (
    <div className={styles.information}>
      {winner !== null ? <h1>{winner}の勝利!</h1> : <h1>対戦中...</h1>}
    </div>
  );
};

export default Information;
