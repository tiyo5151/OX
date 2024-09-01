import styles from '../pages/index.module.css';

type BoardProps = {
  board: (number | null)[][];
  setOX: (x: number, y: number) => void;
};

const Board: React.FC<BoardProps> = ({ board, setOX }) => {
  return (
    <div className={styles.board}>
      {board.map((row, y) => (
        <div key={y} className={styles.row}>
          {row.map((cell, x) => (
            <div key={x} className={styles.cell} onClick={() => setOX(x, y)}>
              {cell === 1 ? '○' : cell === 2 ? '×' : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Board;
