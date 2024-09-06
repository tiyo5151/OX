import styles from '../pages/index.module.css';

interface Props {
  winner: number | null;
  turn: number;
  jumpTo: (step: number) => void;
  step: number;
  history: { board: (number | null)[][]; turn: number }[];
}

const Information: React.FC<Props> = ({ winner, turn, jumpTo, history }) => {
  return (
    <>
      <div className={styles.information}>
        {winner === null ? (
          <h1>対戦中...</h1>
        ) : winner === 3 ? (
          <h1>引き分け！</h1>
        ) : (
          <h1>{winner === 1 ? '○' : '×'}の勝ち！</h1>
        )}
        <h1>NEXT:{turn === 1 ? '○' : '×'}</h1>
        <h1>履歴</h1>
      </div>
      <div className={styles.history}>
        {history.map((_, step) => (
          <div key={step}>
            <button onClick={() => jumpTo(step)} className={styles.historyElement}>
              <span>{step === 0 ? 'ゲーム開始時' : `${step}手目へ戻る`}</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Information;
