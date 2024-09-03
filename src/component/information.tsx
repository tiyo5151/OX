import styles from '../pages/index.module.css';

interface Props {
  winner: number | null;
  turn: number;
}

const Information: React.FC<Props> = ({ winner, turn }) => {
  return (
    <div className={styles.information}>
      {winner === null ? (
        <h1>対戦中...</h1>
      ) : winner === 3 ? (
        <h1>引き分け！</h1>
      ) : (
        <h1>{winner === 1 ? '○' : '×'}の勝ち！</h1>
      )}
      <h1>NEXT:{turn === 1 ? '○' : '×'}</h1>
    </div>
  );
};

export default Information;
